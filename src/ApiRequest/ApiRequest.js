
import axios from "axios";




const BaseURL = "https://boi-ghor.onrender.com/api/v1"



export function ReadAuthor() {
    let URL = BaseURL + "/authors";
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            return res.data['data'];
            console.log(res.data)
        } else {
            return false;
        }

    }).catch((err) => {
        console.log(err)
        return false;
    });
}

export function ReadPublishers() {
    let URL = BaseURL + "/publishers";
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            return res.data['data'];
            console.log(res.data)
        } else {
            return false;
        }

    }).catch((err) => {
        console.log(err)
        return false;
    });
}
