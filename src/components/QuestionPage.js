

const QuestionPage = (onClickHandler) => {
  return (
    <div className=" w-[40%] bg-[#FFC288] h-[100%] m-auto pt-[20px]">
      <div className="flex">
        <div
          className="w-8 h-8 ml-6 mr-4 flex-shrink-0 "
          onClick={onClickHandler}
        >
          <img
            className="cursor-pointer"
            src={process.env.PUBLIC_URL + "images/backButton.png"}
            alt="image"
          />
        </div>
        <div className="w-52 h-11 text-black text-3xl flex-shrink-0 text-[20px]">
          이전 질문
        </div>
      </div>
      <div className="w-[80%] h-[60%] flex-col justify-center bg-orange-100 rounded-2xl m-auto flex">
        <div className="w-[20%] h-[25%] text-black text-5xl font-normal font-['CookieRun'] ml-3">
          Q1.
        </div>
        <div className="flex flex-col items-center gap-y-4 ">
          <div className=" flex justify-center items-center w-[35%] h-[35%] ">
            <img
              src={process.env.PUBLIC_URL + "images/goldPig.png"}
              alt="image"
            />
          </div>
          <div className="w-[80%] h-[auto]  text-black text-3xl font-normal font-['CookieRun'] text-[20px] ">
            당신의 어쩌구 저쩌구는 어쩌구 저쩌구 어쩌구 어쩌구 어쩌구 어쩌구
            어쩌구 어쩌구 어쩌구 어쩌구 어쩌구 당신의 어쩌구 저쩌구는 어쩌구
            저쩌구 어쩌구 어쩌구 어쩌구 어쩌구
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[20%] flex flex-col m-auto mt-[35px]  rounded-lg text-black text-4xl font-thin font-['CookieRun'] gap-y-3">
        <div
          className="flex items-center justify-center w-[100%] h-[70%] bg-orange-100 rounded-[10px] cursor-pointer"
          onClick={onClickHandler}
        >
          예
        </div>
        <div
          className="flex items-center justify-center w-[100%] h-[70%] bg-orange-100 rounded-[10px] cursor-pointer"
          onClick={onClickHandler}
        >
          아니오
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
