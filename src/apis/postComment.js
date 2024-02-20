import axios from "axios";
export async function postComment(comment, type) {
  const request = { content: comment, moneyTI: type };
  try {
    const response = await axios.post(
      "http://34.64.103.92:8080/boards",
      request,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("여기서 나온 에러임", e);
  }
}
