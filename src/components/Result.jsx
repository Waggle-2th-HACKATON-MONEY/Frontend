import { useRecoilValue, useSetRecoilState } from "recoil";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import { board, types } from "../recoil/state";
import { useState } from "react";
import { postComment } from "../apis/postComment";
import { getBoard } from "../apis/getBoard";

const Result = () => {
  let navigate = useNavigate();
  const type = useRecoilValue(types);
  const boards = useRecoilValue(board);
  const setBoards = useSetRecoilState(board);
  const [text, setText] = useState("");
  const saveType = type;
  console.log(text);

  function onSubmit() {
    postComment(text, type.moneyTI);
    getBoard(0, type.moneyTI).then((boards) => {
      setBoards(boards.result);
      console.log("가져온 보드 모습", boards);
      console.log("가져온 보드 모습", boards.result);
      navigate("/Board");
    });
  }

  return (
    <div className=" flex flex-col items-center w-[40%] bg-[#FFC288] h-[100%] rounded-[10px] m-auto overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-center justify-center mt-[10%] mb-[5%] p-[4%] w-[80%] h-[auto] rounded-[10px] text-5xl bg-[#FCECDD]">
        <div className="flex items-center justify-center w-[95%] h-[120px] p-4  rounded-[10px] text-5xl bg-[#FEA82F]">
          당신은 {type.moneyTI}형
        </div>
        <div className="m-[5%] w-[70%]">
          <img src={process.env.PUBLIC_URL + `images/${type.moneyTI}.png`} />
        </div>
        <div className="flex flex-col w-[95%] break-all  h-[auto] m-[5%] bg-[#FFC288] gap-y-3 rounded-[10px] p-[4%] text-[28px] scrollbar-hide">
          <h1 className="text-[32px] w-[auto] p-4 rounded-xl bg-white">추천 습관</h1>
          <div className="text-[24px] leading-10	">{type?.gptRecommend?.recommendHabit}</div>
          <h1 className="text-[32px] p-4 rounded-xl bg-white">추천 투자 방법</h1>
          <div className="text-[24px] leading-10	">
          {type?.gptRecommend?.recommendHabit}

          </div>
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center w-[95%] h-[50%] ">
          <div className="text-[18px]">현재 본인의 재테크 방법을 공유해주세요!</div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="w-[100%] h-[90%] text-[18px] p-[3%] rounded-[10px]"
            placeholder="작성 시 나와 같은 유형의 재테크 방식을 확인할 수 있어요"
            value={text}
          />
          <div
            className="flex justify-center p-3 rounded-[40px] bg-white w-[80%] text-5xl cursor-pointer text-[#FF6701]"
            onClick={onSubmit}
          >
            제출
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
