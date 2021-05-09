import axios from "axios";

const API = axios.create({ baseURL: 'https://hig-ikabir.herokuapp.com/' })


export const fetchPosts = () => API.get("/posts/get");
export const createPost = (newPost) => API.post("/posts/create", newPost);
export const getTopPosts = (newPost) => API.get("/posts/top3", newPost);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/register", formData);
export const adminSignIn = (formData) => API.post("/admin/login", formData);