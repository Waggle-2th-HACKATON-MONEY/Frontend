import "./MainPage.css";
import StartTest from "./StartTest";

const MainPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[40%] bg-[#FFC288] h-[90%] rounded-[10px] m-auto ">
      <div className=" mt-[10%] mb-[40%] w-[80%] h-[160px] rounded-[10px] bg-[#FCECDD]">
        <div className="relative text-orange-500  ">
          <div className="absolute left-6 top-6 text-7xl">돈비티아이</div>
          <div className="absolute left-6 top-[100px] text-[28px]">
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
