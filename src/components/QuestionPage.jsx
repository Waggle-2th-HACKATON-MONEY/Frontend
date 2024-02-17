import { useRecoilValue, useSetRecoilState } from "recoil";
import { scoreState, types } from "../recoil/state";
import { useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { postScore } from "../apis/postScore";

const QuestionPage = () => {
  const [num, setNum] = useState(0);
  const score = useRecoilValue(scoreState);
  const setContent = useSetRecoilState(scoreState);
  const type = useRecoilValue(types);
  const setTypes = useSetRecoilState(types);
  const navigate = useNavigate();

  const answerYes = () => {
    setNum(num + 1);
    setContent((score) => [...score, 1]);
    if (num === 9) {
      navigate('/loading');
      postScore(score).then((getType) => {
        setTypes(getType);
        navigate("/result");
      });
    }
    console.log(type);
  };

  const answerNo = () => {
    setNum(num + 1);
    setContent((score) => [...score, 0]);
    console.log(score);
    if (num === 9) {
      navigate('loading');
      postScore(score).then((getType) => {
        setTypes(getType);
        navigate("/result");
      });
    }
  };

  const cancelQuestion = () => {
    if (num === 0) navigate("/");
    setNum(num - 1);
    setContent((prevScore) => {
      const newScore = [...prevScore];
      newScore.pop();
      return newScore;
    });
    console.log(score);
  };
  console.log(score);

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
      <div className="w-[80%] h-[65%] relative bg-orange-100 rounded-2xl m-auto p-[6%] ">
        <div className="w-[20%] h-[15%] text-black text-5xl">Q{num + 1}.</div>
        <div className="flex flex-col items-center gap-y-8">
          <div className=" flex justify-center items-center w-[50%] h-[50%] ">
            <img
              src={process.env.PUBLIC_URL + `images/question${num + 1}.png`}
              alt="image"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" top-[400px] absolute text-black text-[18px] break-words flex">
            {questions[num]}
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[20%] flex flex-col m-auto mt-[35px]  rounded-lg text-black text-4xl gap-y-3">
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
