import axios, { AxiosResponse } from "axios";
import { vehicle } from "./interface/vehicle";

axios.defaults.baseURL = 'http://localhost:8080/vehicle';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Vehciles = {
    list: () => requests.get<vehicle[]>('/findAll'),
    details: (Id: number) => requests.get<vehicle>(`/findOne${Id}`),
    create: (Vehcile: vehicle) => requests.post<void>('/post', Vehcile),
    update: (Vehcile: vehicle) => requests.put<void>(`/update`, Vehcile),
    delete: (Id: number) => requests.delete<void>(`/delete/${Id}`),
    findByAnything: (query: string) => requests.get<vehicle>(`/findByAnything/${query}`)
}

const agent = {
    Vehciles,
}

export default agent;