import { useEffect, useRef } from "react";

import { useBooth } from "@/hooks/useBooth";

import { BoothInfo } from "./BoothInfo";
import { BoothSVGImage } from "./BoothSVGImage";
import { BoothSVGIndex } from "./BoothSVGIndex";
import { BoothSVGPath } from "./BoothSVGPath";

const options = {
    root: document.querySelector("#map-container"),
    rootMargin: "0px",
    threshold: 0.5,
};

export const Map = (props: React.ComponentProps<"svg">) => {
    const { setVisibleBooth } = useBooth();

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            setVisibleBooth((prevVisibleBooth) => {
                const newVisibleBooth = new Set(prevVisibleBooth);

                entries.forEach((entry) => {
                    if (entry.isIntersecting) newVisibleBooth.add(entry.target.id.toString());
                    else newVisibleBooth.delete(entry.target.id.toString());
                });

                return Array.from(newVisibleBooth);
            });
        }, options);

        const boothList = document.querySelectorAll(".booth-info");

        boothList.forEach((booth) => {
            observer.current?.observe(booth);
        });

        return () => {
            boothList.forEach((booth) => {
                observer.current?.unobserve(booth);
            });
        };
    }, [setVisibleBooth]);

    return (
        <>
            <svg
                width={2621}
                height={1007}
                viewBox="0 0 2621 1007"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                {...props}
            >
                <rect width={2621} height={1007} fill="url(#pattern0_246_866)" />
                <rect
                    x={113}
                    y={457.949}
                    width={312.886}
                    height={33.2674}
                    rx={8}
                    transform="rotate(-14.0481 113 457.949)"
                    fill="#919191"
                />

                <BoothSVGPath />
                <BoothInfo />
                <BoothSVGIndex />
                <BoothSVGImage />
            </svg>
        </>
    );
};
