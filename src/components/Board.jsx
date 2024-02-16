import "./MainPage.css";
import Comment from "../items/Comment";

const Board = ({ moneyType, comment }) => {
  return (
    <div className=" flex flex-col items-center w-[40%] bg-[#FFC288] h-[90%] rounded-[10px] m-auto overflow-y-auto scrollbar-hide">
        <div className=" color-[#FF6701] text-6xl mt-8">
            종합 게시판
        </div>
      <div className="flex flex-col items-center justify-center mt-[10%] mb-[5%] p-[4%] w-[90%] gap-y-3 h-[auto] rounded-[10px] text-5xl bg-[#FCECDD]">
        <Comment
          type="자수성가"
          comment="저는 앞으로 저금을 열심히 하려구요!!"
        />
        <Comment
          type="자수성가"
          comment="저는 앞으로 저금을 열심히 하려구요!!"
        />
        <Comment
          type="자수성가"
          comment="저는 앞으로 저금을 열심히 하려구요!!"
        />
        <Comment
          type="자수성가"
          comment="저는 앞으로 저금을 열심히 하려구요!!"
        />
        <Comment
          type="자수성가"
          comment="저는 앞으로 저금을 열심히 하려구요!!"
        /><Comment
        type="자수성가"
        comment="저는 앞으로 저금을 열심히 하려구요!!"
      /><Comment
      type="자수성가"
      comment="저는 앞으로 저금을 열심히 하려구요!!"
    /><Comment
    type="자수성가"
    comment="저는 앞으로 저금을 열심히 하려구요!!"
  /><Comment
  type="자수성가"
  comment="저는 앞으로 저금을 열심히 하려구요!!"
/><Comment
          type="자수성가"
          comment="저는 앞으로 저금을 열심히 하려구요!!"
        />
      </div>
    </div>
  );
};

export default Board;
