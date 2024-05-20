import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useVisitor } from "@/hooks/useVisitor";

import { commentService } from "./comment.service";
import { IComment } from "./comment.types";
import { RootState } from "@/store/store";
import { Dispatch } from "@reduxjs/toolkit";

export const useComment = () => {
    const dispatch: Dispatch = useDispatch();

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
            alert("댓글이 등록되었습니다!");
        },
        [category, boothId, visitorId],
    );

    const handleCommentDelete = useCallback(
        (commendId: number) => {
            if (window.confirm("댓글을 삭제 하시겠습니까?")) {
                commentService.deleteComment(visitorId as string, commendId).then(() => {
                    setRefetch(true);
                    alert("댓글이 삭제되었습니다!");
                });
            }
        },
        [visitorId],
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
    }, [category, currentPage, visitorId, boothId, refetch, dispatch]);

    return { isPending, comments, handleCommentSubmit, handleCommentDelete, commentInputRef };
};
