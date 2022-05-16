import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import contentClass from "../../../styles/contentClass";
import SlideUp from "../../animated/SlideUp";
import SectionContainer from "../../SectionContainer";
import TitleSection from "../../TitleSection";

function RoadMap({ data }: { data: IRoadMap[] }): JSX.Element {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [isAnim, setIsAnim] = useState(true);

    useEffect(() => {
        if (inView === false && window.innerWidth < 1200) {
            setIsAnim(true);
        } else {
            setIsAnim(inView);
        }
    });

    return (
        <SectionContainer id="RoadMap" BG="bot">
            <div ref={ref} className={contentClass}>
                {isAnim && <TitleSection title="ROADMAP" />}
                {isAnim && (
                    <div className="my-5 mx-4 flex items-center transform lg:translate-x-44">
                        <div className="h-roadMap w-2 lg:w-1 mr-30px bg-blue" />
                        <div>
                            {data.map((item, index) => (
                                <div
                                    className={`my-8 ${
                                        index % 2 !== 0 &&
                                        "transform lg:-translate-x-80"
                                    }`}
                                    key={item.id}
                                >
                                    <SlideUp duration={index + 1.5}>
                                        <div
                                            className={`flex ${
                                                index % 2 !== 0 &&
                                                "lg:flex-row-reverse"
                                            } `}
                                        >
                                            <div
                                                className={`bg-darkBlue border-2 border-blue h-4 w-4 rounded-full absolute z-20 transform -translate-x-10 ${
                                                    index % 2 !== 0 &&
                                                    "lg:-translate-x-6"
                                                }`}
                                            />
                                            <h4
                                                className={`font-bold transform translate-x-0 ${
                                                    index % 2 !== 0 &&
                                                    "lg:-translate-x-20"
                                                }`}
                                            >
                                                {item.title}
                                            </h4>
                                        </div>
                                        {item.text.split("/").map((text) => (
                                            <p className="lg:max-w-xs">
                                                - {text}
                                            </p>
                                        ))}
                                    </SlideUp>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </SectionContainer>
    );
}

export default RoadMap;
