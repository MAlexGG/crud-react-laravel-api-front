import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true; 
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const serviceApi = () => {

    let baseUrl = "127.0.0.1:8000";
    let url = '/api/cards';
    let urlSignin = '/api/register';
    let urlLogin = '/api/login';
    let urlLogout = '/api/logout';
    
    const get = async () => {
        const res = await axios.get(url);
        return res;
    };

    const create = async (data) => {
        const res = await axios.post(url, data);
        return res;
    };

    const destroy = async (id) => {
        let urlID = `${url}/${id}`;
        const res = await axios.delete(urlID);
        return res;
    };

    const show = async (id) => {
        let urlID = `${url}/${id}`;
        const res = await axios.get(urlID);
        return res;
    }

    const update = async (data) => {
        let urlID = `${url}/${data.id}`;
        const res = await axios.post(urlID, data);
        return res;
    };

    const signin = async (data) => {
        const res = await axios.post(urlSignin, data);
        return res;
    };

    const login = async (data) => {
        const res = await axios.post(urlLogin, data);
        return res;
    };

    const logout = async () => {
        const res = await axios.post(urlLogout);
        return res;
    }

    return {
        get,
        create,
        destroy,
        show,
        update,
        signin,
        login,
        logout,
        url,
        baseUrl
    };
}