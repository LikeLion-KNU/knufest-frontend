import { AxiosError } from "axios";

import { HTTPException, api } from "@/config/api";

import { IReadAllBoothResponse, IReadBoothByIdResponse } from "./booth.types";

export const boothService = {
    readAllBooth: async (userId: string | null) => {
        const response = await api.get<IReadAllBoothResponse>(`/booth?userHash=${userId}`);

        if (response instanceof AxiosError) {
            if (response.status === 404) {
                throw new HTTPException(404, "부스 전체 정보가 없습니다");
            }
            if (response.status === 406) {
                throw new HTTPException(406, "");
            }
        }

        return response;
    },

    readBoothById: async (category: string, boothId: number) => {
        return api.get<IReadBoothByIdResponse>(`/booth/${category}/${boothId}`);
    },

    updateLikesByBoothId: async (userId: string, category: string, boothId: number) => {
        const response = await api.patch(`/booth/${category}/${boothId}?userHash=${userId}`);

        if (response instanceof AxiosError) {
            //
        }
    },
};
