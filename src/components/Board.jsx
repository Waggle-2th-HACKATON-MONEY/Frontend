import "./MainPage.css";
import Comment from "../items/Comment";
import { useNavigate } from "react-router-dom";
import { board, types } from "../recoil/state";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Board = ({ moneyType, comment }) => {
  const navigate = useNavigate();
  const boards = useRecoilValue(board);
  const type = useRecoilValue(types);

  const goMain = () => {
    navigate("/");
  };
  return (
    <div className=" flex flex-col items-center w-[40%] bg-[#FFC288] h-[100%] rounded-[10px] m-auto overflow-y-auto scrollbar-hide">
      <div className=" color-[#FF6701] text-5xl mt-8">
        {type[0].moneyTI} 유형 게시판
      </div>
      <div className="flex flex-col items-center justify-center mt-[6%] mb-[5%] pt-[4%] px-[4%] w-[90%] gap-y-3 h-[auto] rounded-[10px] text-5xl bg-[#FCECDD]">
        {boards.map((board, index) => (
          <Comment key={index} comment={board.content} />
        ))}
        <div className="flex gap-x-2 w-[95%] h-[10%] mt-[20px]">
          <div
            className="flex items-center justify-center w-[50%] h-[80px] rounded-[10px] cursor-pointer text-4xl bg-[#FF6701]"
            onClick={goMain}
          >
            처음으로
          </div>
          <div className="flex items-center justify-center w-[50%] h-[80px] rounded-[10px] cursor-pointer text-3xl bg-[#FF6701]">
            친구에게 공유
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
