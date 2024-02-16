import Button from "../items/Button";
import "./MainPage.css";
import StartTest from "./StartTest";
import { useNavigate } from "react-router-dom";

const Result = ({ moneyType, comment }) => {
  let navigate = useNavigate();
    function handleClick() {
      navigate("/Board");
    }
  return (
    <div className=" flex flex-col items-center w-[40%] bg-[#FFC288] h-[90%] rounded-[10px] m-auto overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-center justify-center mt-[10%] mb-[5%] p-[4%] w-[80%] h-[auto] rounded-[10px] text-5xl bg-[#FCECDD]">
        <div className="flex items-center justify-center w-[95%] h-[120px]  rounded-[10px] text-5xl bg-[#FEA82F]">
          {moneyType}자수성가형
        </div>
        <div className="w-[60%] m-[5%]">
          <img src={process.env.PUBLIC_URL + "/images/grandma.png"} />
        </div>
        <div className="flex w-[95%] break-all  h-[auto] m-[5%] bg-[#FFC288] rounded-[10px] p-[4%] text-[28px] overflow-y-auto scrollbar-hide">
          asddsadsasaldasjsaajfknasddsadsasaldasjsaajfknasddsadsasaldasjsaajfknasddsadsasaldasjsaajfknasddsadsasaldasjsaajfknasddsadsasaldasjsaajfknasddsadsasaldasjsaajfkn
          asddsadsasaldasjsaajfkn asddsadsasaldasjsaajfkn
          asddsadsasaldasjsaajfkn asddsadsasaldasjsaajfkn
          asddsadsasaldasfjsaajfkn asddsadsasaldasfjsaajfkn
          asddsadsasaldasfjsaajfkn asddsadsasaldasfjsaajfkn
          {comment}
        </div>
        <div className="flex items-center justify-center gap-x-3 w-[95%] h-[15%] ">
          <textarea
            className="w-[70%] h-[90%] text-[18px] p-[4%] rounded-[10px]"
            placeholder="앞으로의 계획을 적어주세요!"
          />
          <div className="w-[25%] text-5xl cursor-pointer text-[#FF6701]" onClick={handleClick}>제출</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
