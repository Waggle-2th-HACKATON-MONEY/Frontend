
const Button = (onClickHandler) => {
    return (
        <div oncClick={onClickHandler} className="flex justify-center items-center mt-[30%] w-[80%] h-[120px] rounded-[10px] bg-[#FCECDD]">
        <div className=" text-6xl text-orange-500 cursor-pointer">테스트 시작</div>
      </div>
    );
};

export default Button;