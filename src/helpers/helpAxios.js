import axios from "axios";

export const helpAxios = () => {
    
    const get = async (url) => {
        const res = await axios.get(url);
        return res;
    };

    const create = async (url, data) => {
        const res = await axios.post(url, data);
        return res;
    };

    const destroy = async (url, id) => {
        let urlID = `${url}/${id}`;
        const res = await axios.delete(urlID);
        return res;
    };

    const update = async (url, data) => {
        let urlID = `${url}/${data.id}`;
        const res = await axios.put(urlID, data);
        return res;
    };

    return {
        get,
        create,
        destroy,
        update
    };
}