export const serviceFetch = () => {

    const customFetch = (endpoint, options) => {
        const defaultHeaders = {
            accept: "application/json"
        };

        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders; 
        
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);

        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options).then((res) => res.ok ? res.json() : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "An error ocurred"
        })).catch((err) => err);

    };

    let url = "http://localhost:5000/cards";
    
    const get = (options = {}) => customFetch(url, options);

    const post = (options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };
    
    const put = (data, options = {}) => {
        options.method = "PUT";
        let endpoint = `${url}/${data.id}`;
        return customFetch(endpoint, options);
    };

    const del = (id, options = {}) => {
        options.method = "DELETE";
        let endpoint = `${url}/${id}`;
        return customFetch(endpoint, options);
    };
 
    return {
        get,
        post,
        put,
        del,
        url
    };

}