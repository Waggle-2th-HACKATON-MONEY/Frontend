import axios from "axios";
export async function postScore(arr) {
  const request = { request: arr };
  const jsonData = JSON.stringify(request);
  try {
    const response = await axios.post(
      "http://34.64.103.92:8080/money-ti",
      jsonData,
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
