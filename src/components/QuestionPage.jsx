import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { scoreState } from "../recoil/state";
import { useState } from "react";
import { questions } from "../data/questions";

const QuestionPage = () => {
  const setContent = useSetRecoilState(scoreState);
  const content = useRecoilValue(scoreState);

  const answerYes = () => {
    setNum(num + 1);
    setContent((content) => [...content, 1]);
    console.log(content);
  };

  const answerNo = () => {
    setNum(num + 1);
    setContent((content) => [...content, 0]);
    console.log(content);
  };

  const cancelQuestion = () => {
    setNum(num - 1);
    setContent((content) => [...content, 0]);
    console.log(content);
  };

  const [num, setNum] = useState(0);

  return (
    <div className=" w-[40%] bg-[#FFC288] h-[100%] m-auto pt-[20px]">
      <div className="flex ml-[10%] mb-[20px]">
        <div
          className="w-8 h-8 flex-shrink-0 cursor-pointer"
          onClick={cancelQuestion}
        >
          <img src={process.env.PUBLIC_URL + "images/backButton.png"} />
        </div>
      </div>
      <div className="w-[80%] h-[65%] flex-col bg-orange-100 rounded-2xl m-auto p-[6%] flex">
        <div className="w-[20%] h-[15%] text-black text-5xl">
          Q{num + 1}.
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <div className=" flex justify-center items-center w-[50%] ">
            <img
              src={process.env.PUBLIC_URL + "images/goldPig.png"}
              alt="image"
            />
          </div>
          <div className="mt-[40px] text-black text-2xl">
            {questions[num]}
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[20%] flex flex-col m-auto mt-[35px]  rounded-lg text-black text-4xl font-thin font-['CookieRun'] gap-y-3">
        <div
          className="flex items-center justify-center w-[100%] h-[70%] bg-orange-100 rounded-[10px] cursor-pointer"
          onClick={answerYes}
        >
          예
        </div>
        <div
          className="flex items-center justify-center w-[100%] h-[70%] bg-orange-100 rounded-[10px] cursor-pointer"
          onClick={answerNo}
        >
          아니오
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
