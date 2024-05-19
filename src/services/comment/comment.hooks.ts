import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useVisitor } from "@/hooks/useVisitor";

import { commentService } from "./comment.service";
import { IComment } from "./comment.types";
import { RootState } from "@/store/store";

export const useComment = () => {
    const commentInputRef = useRef<HTMLInputElement>(null);

    const { visitorId } = useVisitor();
    const { category, boothId } = useParams();

    const { currentPage } = useSelector((state: RootState) => state.page);

    const [refetch, setRefetch] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [comments, setComments] = useState<IComment[]>([]);

    const handleCommentSubmit = useCallback(
        (content: string) => {
            commentService.createComment(category as string, parseInt(boothId as string), visitorId as string, content);
            setRefetch(true);
        },
        [category, boothId, visitorId],
    );

    useEffect(() => {
        setIsPending(true);
        commentService
            .readComment(category as string, parseInt(boothId as string), currentPage, visitorId as string)
            .then((data) => {
                setComments(data.data);
            })
            .finally(() => {
                setIsPending(false);
                setRefetch(false);
            });
    }, [category, currentPage, visitorId, boothId, refetch]);

    return { isPending, comments, handleCommentSubmit, commentInputRef };
};

export const useDeleteable = (commentId: number) => {
    const { visitorId } = useVisitor();
    const [refetch, setRefetch] = useState<boolean>(false);

    const handleDeleteBtnClick = useCallback(() => {
        if (!visitorId) return;

        if (window.confirm("삭제하시겠습니까?")) {
            commentService.deleteComment(visitorId, commentId).then(() => {
                setRefetch(!refetch);
                alert("삭제되었습니다.");
            });
        }
    }, [visitorId, commentId, refetch]);

    return { handleDeleteBtnClick };
};
