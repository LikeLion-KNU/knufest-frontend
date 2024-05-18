/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AxiosError } from "axios";

import { HTTPException, api } from "@/config/api";

import { IComment } from "./comment.types";
import { getRandomNickname } from "@woowa-babble/random-nickname";

export const commentService = {
    readComment: async (category: string, boothId: number, page: number, userHash: string) => {
        const response = await api.get<IComment[]>(
            `/booth/${category}/${boothId}/comment?page=${page}&userHash=${userHash}`,
        );
        if (response instanceof AxiosError) {
            if (response.response?.status === 404) {
                throw new HTTPException(404, "댓글이 없습니다");
            }
        }

        return response;
    },

    createComment: async (category: string, boothId: number, userHash: string, comment: string) => {
        const response = await api.post(`/booth/${category}/${boothId}/comment?userHash=${userHash}`, {
            name: getRandomNickname("animals"),
            comment,
        });

        if (response instanceof AxiosError) {
            // error handling
        }
    },
};
