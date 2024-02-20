import axios from "axios";
export async function getBoard(page, type) {
  try {
    const response = await axios.get(
      `http://34.64.103.92:8080/boards?page=${page}&moneyTI=${type}`,
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
