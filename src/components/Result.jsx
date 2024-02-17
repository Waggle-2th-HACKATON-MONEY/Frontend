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

  console.log(text);
  function onSubmit() {
    postComment(text, type.moneyTI);
    getBoard(0, type.moneyTI).then((boards)=>{
      setBoards(boards.result);
      console.log('가져온 보드 모습',boards);
      console.log('가져온 보드 모습',boards.result);  
      navigate("/Board");
    });
  }

  return (
    <div className=" flex flex-col items-center w-[40%] bg-[#FFC288] h-[100%] rounded-[10px] m-auto overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-center justify-center mt-[10%] mb-[5%] p-[4%] w-[80%] h-[auto] rounded-[10px] text-5xl bg-[#FCECDD]">
        <div className="flex items-center justify-center w-[95%] h-[120px]  rounded-[10px] text-5xl bg-[#FEA82F]">
          {type.moneyTI}
        </div>
        <div className="w-[60%] m-[5%]">
          <img src={process.env.PUBLIC_URL + "/images/grandma.png"} />
        </div>
        <div className="flex flex-col w-[95%] break-all  h-[auto] m-[5%] bg-[#FFC288] gap-y-3 rounded-[10px] p-[4%] text-[28px] overflow-y-auto scrollbar-hide">
          <h1 className="text-[32px]">추천 습관</h1>
          <div className="text-[24px]">{type.gptRecommend.recommendHabit}</div>
          <h1 className="text-[32px] ">추천 투자 방법</h1>
          <div className="text-[24px]">
            {type.gptRecommend.recommendProduct}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-3 w-[95%] h-[15%] ">
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="w-[70%] h-[90%] text-[18px] p-[4%] rounded-[10px]"
            placeholder="앞으로의 계획을 적어주세요!"
            value={text}
          />
          <div
            className="w-[25%] text-5xl cursor-pointer text-[#FF6701]"
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
