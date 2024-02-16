import Button from "./Button";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[40%] bg-[#FFC288] h-[100%] m-auto">
      <div className=" mt-[10%] w-[80%] h-[334px] rounded-[10px] bg-[#FCECDD]">
        <div className="relative text-orange-500  ">
          <div className="absolute left-6 top-6 text-7xl">돈비티아이</div>
          <div className="absolute left-6 top-[160px] text-6xl">
            나를 표현하는{" "}
          </div>
          <div className="absolute left-6 top-[240px] text-6xl">금융 MBTI </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default MainPage;
