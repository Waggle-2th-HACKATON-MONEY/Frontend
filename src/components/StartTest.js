import React from 'react';

const StartTest = ({onClickHandler}) => {
    return (
        <div className='flex flex-col items-center w-[240px] gap-y-1 cursor-pointer ' onClick={onClickHandler}>
            <img src={process.env.PUBLIC_URL + '/images/grandma.png'} alt="grandMa" />
            <div className=" text-orange-500 text-[28px] ">테스트 시작</div>
        </div>
    );
};

export default StartTest;