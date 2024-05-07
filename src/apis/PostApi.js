import axios from './axios.config'

export const getAllCode = async () => {
    return await axios.get('/posts');
};

export const getPostById = async (id) => {
    return await axios.get(`/posts/${id}`)
}

export const deletePost = async () => {
    return await axios.delete(`/posts/${id}`)
}


export const createPost = async () => {
    return await axios.post('posts', data)
}

export const updatePost = async (id , updateData) => {
    return await axios.patch(`/posts/${id}` ,updateData)
}
