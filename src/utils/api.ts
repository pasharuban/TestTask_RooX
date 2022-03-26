import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = () => api.get("/users/");

export const getUser = (id: string) => api.get(`/users/${id}`);
