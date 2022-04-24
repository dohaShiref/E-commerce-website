import axios from "axios";

export default function postsAction() {
  let data = axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    type: "TODOS-LIST",
    payload: data,
  };
}
