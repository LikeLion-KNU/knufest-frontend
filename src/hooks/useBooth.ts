import { useContext } from "react";

import { BoothContext } from "@/context/BoothContext";

export const useBooth = () => {
    const boothContext = useContext(BoothContext);
    if (!boothContext) throw new Error("useBooth 는 BoothContext 내부에서 사용되어야 합니다!");
    return { visibleBooth: boothContext.visibleBooth, setVisibleBooth: boothContext.setVisibleBooth };
};
