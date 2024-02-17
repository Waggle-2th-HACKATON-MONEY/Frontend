const Comment = ({ comment }) => {
  return (
    <div className="flex flex-col w-[95%] h-[100px] p-4  gap-y-2 rounded-[10px]  bg-[#FEA82F]">
      <div className="text-[24px] w-[100%] flex">{comment}</div>
    </div>
  );
};

export default Comment;
