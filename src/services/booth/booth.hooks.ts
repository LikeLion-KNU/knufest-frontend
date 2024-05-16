import { useCallback, useEffect, useState } from "react";

import { useVisitor } from "@/hooks/useVisitor";

import { boothService } from "./booth.service";
import { IBoothItem } from "./booth.types";

export const useAllBooth = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [boothList, setBoothList] = useState<IBoothItem[]>([]);

    const { visitorId } = useVisitor();

    useEffect(() => {
        if (!visitorId) return;

        setIsPending(true);
        boothService
            .readAllBooth(visitorId)
            .then((data) => {
                setBoothList(data.data.boothDtoes);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [visitorId]);

    return { isPending, boothList };
};

export const useLikes = (initLikeable: boolean, category: string, boothId: number) => {
    const [likeable, setLikeable] = useState<boolean>(initLikeable);

    const { visitorId } = useVisitor();

    const handleLikeBtnClick = useCallback(() => {
        if (!visitorId) return;

        boothService.updateLikesByBoothId(visitorId, category, boothId).then(() => {
            setLikeable((likeable) => !likeable);
        });
    }, [boothId, visitorId, category]);

    return { likeable, handleLikeBtnClick };
};
