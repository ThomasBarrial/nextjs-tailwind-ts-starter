import "../src/styles/global.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Loader from "../src/components/Loader";
import { useEffect, useReducer, useState } from "react";
import IsLoaderContext from "../src/context/isLoaderContext";
import { AppContext, AppContextDefault } from "../src/context/AppContext";
import { appReducer } from "../src/context/reducer/reducer";
import { Provider } from "react-redux";
import { store } from "../src/components/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [isLoader, setIsLoader] = useState(true);
    const [state, dispatch] = useReducer(appReducer, AppContextDefault);
    const [loadAnim, setLoadAnim] = useState("animate-fade");

    useEffect(() => {
        setInterval(() => {
            setLoadAnim("animate-fadeOut");
        }, 1500);
        setInterval(() => {
            setIsLoader(false);
        }, 2500);
    }, []);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <IsLoaderContext.Provider
                value={{
                    isLoader: isLoader,
                    toggleIsLoader: () => setIsLoader,
                }}
            >
                {isLoader && <Loader loadAnim={loadAnim} />}

                <Provider store={store}>
                    <div className="bg-darkBlue">
                        <Component {...pageProps} />
                    </div>
                </Provider>
            </IsLoaderContext.Provider>
        </AppContext.Provider>
    );
}

export default MyApp;