import {Character} from "@/app/witcher/types/WitcherTypes";
import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001',
    headers: {
        "API-KEY": ""
    }
});
export const imagesApi = {
    async getAll() {
        const res = await axiosInstance.get<Character[]>('/images');
        return res.data;
    },
};
