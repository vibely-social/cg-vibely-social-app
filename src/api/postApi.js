import axios from "axios";
import {getAccessToken} from "~/service/accountService.js";
import {VIBELY_API} from "~/app/constants.js";

const getHeaders =() => {
    return {
        'Authorization' : 'Bearer ' + getAccessToken(),
        'Content-Type' : 'application/json'
    }
};
export const getPostDetail = async (id) => {
    let result = null;
    const headers = getHeaders();
    try {
        result = await axios.get(`${VIBELY_API}/posts/${id}`,{headers});
    } catch (e) {
        return e.response
    }
    return result;
};

export const getPostsList = async () => {
    const headers = getHeaders();
    try {
        return await axios.get(`${VIBELY_API}/posts`, {headers})
    } catch (error) {
        console.log(error)
    }
};

export const likePost = async (postId) => {
    const headers = getHeaders();
    try {
        const response = await axios.get(`${VIBELY_API}/posts/like/${postId}`,{headers});
        return response.data
    } catch (error) {
        return error.response
    }
};

export const commentPosts = async (postId) => {
    const headers = getHeaders();
    try {
        const response = await axios.get(`${VIBELY_API}/posts/${postId}/comments/list`,{headers});
        return response.data
    } catch (error) {
        return error.response
    }
};

// export const editComment = async (postId) => {
//     const headers = getHeaders;
//     try {
//         const response = await axios.get(`${VIBELY_API}/posts/${postId}/comments`,{headers});
//         return response.data
//     } catch (error) {
//         return error.response
//     }
// };

export const deleteComment = async (postID,cmtID) => {
    const headers = getHeaders();
    try {
        const response = await axios.delete(`${VIBELY_API}/posts/${postID}/comment/${cmtID}`,{headers});
        return response
    } catch (error) {
        return error.response
    }
};

export const likeComment = async (postId,commentId) => {
    const headers = getHeaders();
    try {
        const response = await axios.get(`${VIBELY_API}/posts/${postId}/like/${commentId}`,{headers});
        return response.data
    } catch (error) {
        return error.response
    }
};

export const likeReply = async (postId,commentId,replyId) => {
    const headers = getHeaders();
    try {
        const response = await axios.get(`${VIBELY_API}/posts/${postId}/like/${commentId}/${replyId}`,{headers});
        return response.data
    } catch (error) {
        return error.response
    }
};

export const deleteReply = async (postId,commentId,replyId) => {
    const headers = getHeaders();
    try {
        const response = await axios.delete(`${VIBELY_API}/posts/${postId}/comment/${commentId}/${replyId}`,{headers});
        return response
    } catch (error) {
        return error.response
    }
};
