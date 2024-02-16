const Button = ({ text, onClickHandler }) => {
  return (
    <div
      oncClick={onClickHandler}
      className="flex justify-center h-[80px] items-center rounded-[10px] bg-[#FEA82F] cursor-pointer"
    >
      <div className=" text-4xl text-black ">{text}</div>
    </div>
  );
};

export default Button;

{/* <div className="flex flex-col gap-y-4 w-[95%]">
<Button text="게시판 커뮤니티" onClickHandler={console.log("hi")} />

<Button text="처음으로 돌아가기" onClickHandler={console.log("hi")} />
   </div> */}
