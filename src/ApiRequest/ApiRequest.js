import axios from "axios";

const BaseURL = "https://boi-ghor.onrender.com/api/v1";

// export const ReadBooks = async () => {
//   let url = BaseURL + "/books";
//   const res = await axios.get(url);
//   if (res.status === 200) {
//     return res.data;
//   } else {
//     return false;
//   }
// };

export const LoadAll = async (endpoint) => {
  let url = `https://boi-ghor.onrender.com/api/v1${endpoint}`;

  const res = await axios.get(url);
  if (res.status === 200) {
    return res.data;
  } else {
    return false;
  }
};

export const LoadAllAlt = async (endpoint) => {
  let url = `https://boi-ghor.onrender.com/api/v1${endpoint}`;

  const res = await axios.get(url);
  if (res.status === 200) {
    return res.data["data"];
  } else {
    return false;
  }
};

export function ReadAuthor() {
  let URL = BaseURL + "/authors";
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
        // console.log(res.data);
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function ReadPublishers() {
  let URL = BaseURL + "/publishers";
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
        console.log(res.data);
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
