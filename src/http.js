import axios from "axios";

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

let client = axios.create({
    baseURL: 'https://dog.ceo/api/',
    headers,
    withCredentials: false,
});

client.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (res) {
        console.log("root err", res);
        const { response } = res;
        return Promise.reject({ status: response.status, ...response.data });
    }
);

export default {
    get: async function (url, data) {
        return new Promise((resolve, reject) => {
            client
                .get(url, { params: data })
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    post: async function (url, data) {
        return new Promise((resolve, reject) => {
            client
                .post(url, data)
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    put: async function (url, data) {
        return new Promise((resolve, reject) => {
            client
                .put(url, data)
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    delete: async function (url, data) {
        return new Promise((resolve, reject) => {
            client
                .delete(url, data)
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};
