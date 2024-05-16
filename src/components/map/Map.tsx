import { BoothInfo } from "./BoothInfo";
import { BoothSVGImage } from "./BoothSVGImage";
import { BoothSVGIndex } from "./BoothSVGIndex";
import { BoothSVGPath } from "./BoothSVGPath";

export const Map = (props: React.ComponentProps<"svg">) => {
    return (
        <div className="map-wrapper">
            <svg
                className="map"
                width={2621}
                height={1007}
                // viewBox="0 0 2621 2007"
                // fill="none"
                // xmlns="http://www.w3.org/2000/svg"
                // xmlnsXlink="http://www.w3.org/1999/xlink"
                // style={{ marginTop: "80px" }}
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
        </div>
    );
};
