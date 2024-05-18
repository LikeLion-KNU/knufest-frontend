import { useState, useEffect } from "react";

import { useVisitor } from "@/hooks/useVisitor";

import { boothService } from "@/services/booth/booth.service";
import { ICommentRead } from "@/services/booth/booth.types";

export const useComment = (category: string, boothId: number) => {
    const [comments, setComments] = useState<ICommentRead[]>([]);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { visitorId } = useVisitor();

    useEffect(() => {
        if (!visitorId) return;

        const fetchComments = async () => {
            try {
                const response = await boothService.readComment(visitorId, category, boothId, 1);
                setComments(response.data as ICommentRead[]);
            } catch (err) {
                setError("댓글을 가져오는 중 오류가 발생했습니다.");
            } finally {
                setIsPending(false);
            }
        };

        fetchComments();
    }, [category, boothId, visitorId]);

    const createComment = async (commentText: string) => {
        if (!visitorId) return;

        try {
            await boothService.createComment(visitorId, category, boothId, commentText);
            const response = await boothService.readComment(visitorId, category, boothId, 1);
            setComments(response.data as ICommentRead[]);
        } catch (err) {
            setError("댓글을 추가하는 중 오류가 발생했습니다.");
        }
    };

    return { comments, isPending, error, createComment };
};
