import axiosClient from "./axiosClient";

const signUpApi = {
    signUpUser: (payload) => {
        const url = 'user/signUp';
        return axiosClient.post(url,payload);
    },
    signUpAdmin: (payload) => {
        const url = 'admins/signUp';
        return axiosClient.post(url,payload);
    },
}

export default signUpApi