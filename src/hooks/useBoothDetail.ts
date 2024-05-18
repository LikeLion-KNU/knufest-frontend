import { useState, useEffect } from "react";

import { useVisitor } from "@/hooks/useVisitor";

import { boothService } from "@/services/booth/booth.service";
import { IReadBoothByIdResponse } from "@/services/booth/booth.types";

export const useBoothDetail = (category: string, boothId: string) => {
    const [isPending, setIsPending] = useState<boolean>(true);
    const [boothDetail, setBoothDetail] = useState<IReadBoothByIdResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { visitorId } = useVisitor();

    useEffect(() => {
        if (!visitorId) return;

        const fetchBoothDetail = async () => {
            try {
                const response = await boothService.readBoothById(category, parseInt(boothId), visitorId);
                setBoothDetail(response);
            } catch (err) {
                setError("부스 정보를 가져오는 중 오류가 발생했습니다.");
            } finally {
                setIsPending(false);
            }
        };

        fetchBoothDetail();
    }, [category, boothId, visitorId]);

    return { isPending, boothDetail, error };
};
