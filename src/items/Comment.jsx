const Comment = ({ type, comment }) => {
  return (
    <div className="flex flex-col w-[95%] h-[120px] p-4  gap-y-2 rounded-[10px]  bg-[#FEA82F]">
      <div className="text-[22px] w-[100%] flex">{type}</div>
      <div className="text-[18px] w-[100%] flex">{comment}</div>
    </div>
  );
};

export default Comment;
