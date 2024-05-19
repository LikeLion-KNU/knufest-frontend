import { api } from "@/config/api";

export const userService = {
    readTotalUsers: async () => {
        const response = await api.get<{ count: number }>("/user");

        return response.data;
    },
};
