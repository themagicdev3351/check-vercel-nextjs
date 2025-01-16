import * as React from 'react'
const VerticalDottedLine = () => {
  return (
    <div
    aria-hidden="true"
      className={`relative border-l-2 border-dashed border-gray-500 opacity-50  flex items-center justify-center `}
      
    >
      <span className="h-2 w-2 bg-gray-500 absolute -top-[6px] -left-[4.5px] rounded-full"></span>
      <span className="h-2 w-2 bg-gray-500 absolute -bottom-[6px] -left-[4.5px] rounded-full"></span>
    </div>
  );
};

export default VerticalDottedLine;
