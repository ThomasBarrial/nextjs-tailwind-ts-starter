import "../src/styles/global.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useMemo, useReducer } from "react";
import { AppContext, AppContextDefault } from "../src/context/AppContext";
import appReducer from "../src/context/reducer/reducer";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [state, dispatch] = useReducer(appReducer, AppContextDefault);
    const app = useMemo(() => ({ state, dispatch }), []);

    return (
        <AppContext.Provider value={app}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;
