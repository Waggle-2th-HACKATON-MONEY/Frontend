import { useEffect } from "react";
import "./MainPage.css";
import StartTest from "./StartTest";
import { useRecoilState, useResetRecoilState } from "recoil";
import { scoreState } from "../recoil/state";
import Loading from "../items/Loading";

const MainPage = () => {
  const resetScore = useResetRecoilState(scoreState); // 배열 Recoil 상태 초기화
  useEffect(() => {
    resetScore();
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center w-[40%] bg-[#FFC288] h-[100%] rounded-[10px] m-auto ">
      <div className=" mt-[10%] mb-[30%] w-[80%] h-[160px] rounded-[10px] bg-[#FCECDD]">
        <div className="flex flex-col items-center justify-center text-orange-500  ">
          <div className="text-[66px]">돈  MBTI</div>
          <div className="text-[30px]">
            나를 표현하는 금융 MBTI
          </div>
          <div className="absolute left-6 top-[240px] text-3xl"> </div>
        </div>
      </div>
      <StartTest />
    </div>
  );
};

export default MainPage;
