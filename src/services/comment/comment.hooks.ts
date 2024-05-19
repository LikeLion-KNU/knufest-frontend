import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { useVisitor } from "@/hooks/useVisitor";

import { commentService } from "./comment.service";
import { IComment } from "./comment.types";

export const useComment = () => {
    const commentInputRef = useRef<HTMLInputElement>(null);
    const { visitorId } = useVisitor();
    const { category, boothId } = useParams();

    const [isPending, setIsPending] = useState<boolean>(false);
    const [comments, setComments] = useState<IComment[]>([]);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchMoreComments = useCallback(
        async (newPage: number) => {
            setIsPending(true);
            try {
                const data = await commentService.readComment(
                    category as string,
                    parseInt(boothId as string),
                    newPage,
                    visitorId as string,
                );
                setComments((prevComments) => [...prevComments, ...data.data]);
                setHasMore(data.data.length > 0);
            } catch (error) {
                console.error("Failed to load comments", error);
            }
            setIsPending(false);
        },
        [category, boothId, visitorId],
    );

    useEffect(() => {
        fetchMoreComments(page);
    }, [page, fetchMoreComments]);

    const handleCommentSubmit = useCallback(
        async (content: string) => {
            await commentService.createComment(
                category as string,
                parseInt(boothId as string),
                visitorId as string,
                content,
            );
            setPage(1);
            setComments([]);
            fetchMoreComments(1);
        },
        [category, boothId, visitorId, fetchMoreComments],
    );

    return { isPending, comments, hasMore, setPage, handleCommentSubmit, commentInputRef };
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
