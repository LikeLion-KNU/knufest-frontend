import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useVisitor } from "@/hooks/useVisitor";

import { boothService } from "./booth.service";
import { IBoothItem, IReadBoothByIdResponse } from "./booth.types";
import { pageActions } from "@/store/page.slice";
import { Dispatch } from "@reduxjs/toolkit";

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

export const useBoothDetail = () => {
    const dispatch: Dispatch = useDispatch();

    const { category, boothId } = useParams();
    const { visitorId } = useVisitor();

    const [isPending, setIsPending] = useState<boolean>(false);
    const [boothDetail, setBoothDetail] = useState<IReadBoothByIdResponse | null>(null);

    useEffect(() => {
        setIsPending(true);
        boothService
            .readBoothById(category as string, parseInt(boothId as string), visitorId as string)
            .then((data) => {
                dispatch(pageActions.setMaxPage(Math.ceil(data.commentCount / 20)));
                setBoothDetail(data);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [category, boothId, visitorId, dispatch]);

    return { isPending, boothDetail };
};
