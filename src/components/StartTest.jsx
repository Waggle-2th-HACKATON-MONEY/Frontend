import React from 'react';
import { useNavigate } from "react-router-dom";

const StartTest = () => {
    let navigate = useNavigate()
    function handleClick() {
      navigate("/question");
    }
    return (
        <div className='flex flex-col items-center w-[60%] gap-y-3 cursor-pointer ' onClick={handleClick}>
            <img src={process.env.PUBLIC_URL + '/images/grandma.png'} alt="grandMa" />
            <div className=" text-[#FF6701] text-[40px] ">테스트 시작</div>
        </div>
    );
};

export default StartTest;