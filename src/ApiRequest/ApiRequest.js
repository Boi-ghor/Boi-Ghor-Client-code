import axios from "axios";


export const LoadAll = async (endpoint, payload) => {
    let url = `${endpoint}`;

    const res = await axios.get(url, payload);
    if (res.status === 200) {
        return res.data;
    } else {
        return false;
    }
};

export const LoadAllAlt = async (endpoint) => {
    let url = `${endpoint}`;

    const res = await axios.get(url);
    if (res.status === 200) {
        return res.data["data"];
    } else {
        return false;
    }
};




