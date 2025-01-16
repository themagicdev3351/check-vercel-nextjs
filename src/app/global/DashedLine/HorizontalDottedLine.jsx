


const HorizontalDottedLine = () => {
  return (
    <div
    aria-hidden="true"
      className={`relative border-t-2 border-dashed border-gray-500 opacity-50 
         w-[95%]'
       flex items-center justify-center`}
      
    >
      <span className="h-2 w-2 bg-gray-500 absolute -left-[6px] -top-[5px] rounded-full"></span>
      <span className="h-2 w-2 bg-gray-500 absolute -right-[6px] -top-[5px] rounded-full"></span>
    </div>
  );
};

export default HorizontalDottedLine;
