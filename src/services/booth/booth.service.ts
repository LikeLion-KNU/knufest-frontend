import { AxiosError } from "axios";

import { HTTPException, api } from "@/config/api";

import { IReadAllBoothResponse, IReadBoothByIdResponse } from "./booth.types";

export const boothService = {
    readAllBooth: async (userId: string | null) => {
        const response = await api.get<IReadAllBoothResponse>(`/booth?userHash=${userId}`);
        if (response instanceof AxiosError) {
            if (response.response?.status === 404) {
                throw new HTTPException(404, "부스 전체 정보가 없습니다");
            }
            if (response.response?.status === 406) {
                throw new HTTPException(406, "");
            }
        }
        return response;
    },

    readBoothById: async (category: string, boothId: number, userId: string) => {
        try {
            const response = await api.get<IReadBoothByIdResponse>(`/booth/${category}/${boothId}?userHash=${userId}`);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 404) {
                    throw new HTTPException(404, "부스 정보를 찾을 수 없습니다");
                }
            }
            throw error;
        }
    },

    updateLikesByBoothId: async (userId: string, category: string, boothId: number) => {
        try {
            const response = await api.patch(`/booth/${category}/${boothId}?userHash=${userId}`);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                // 오류 처리 추가 필요
            }
            throw error;
        }
    },

    createComment: async (userId: string, category: string, boothId: number, comment: string) => {
        try {
            const response = await api.post(`/booth/${category}/${boothId}/comment?userHash=${userId}`, {
                name: null,
                comment,
            });
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                // 오류 처리 추가 필요
            }
            throw error;
        }
    },

    readComment: async (userId: string, category: string, boothId: number, page: number) => {
        try {
            const response = await api.get(`/booth/${category}/${boothId}/comment?userHash=${userId}&page=${page}`);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                // 오류 처리 추가 필요
            }
            throw error;
        }
    },
};
