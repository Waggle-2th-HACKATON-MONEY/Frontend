import axios from "axios";
export async function postComment(comment, type) {
  const request = { content: comment, moneyTI: type };
  const jsonData = JSON.stringify(request);
  console.log("요청보내기", jsonData);
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
    console.log("요청후 가져온 데이터", response.data);
    return response.data;
  } catch (e) {
    console.log("여기서 나온 에러임", e);
  }
}
