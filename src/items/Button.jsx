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
