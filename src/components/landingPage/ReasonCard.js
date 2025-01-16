import Image from "next/image";
function ReasonCard({ imgSrc, title, description, customWidth }) {
  return (
    <div
      className={`flex flex-col ${
        customWidth || "mq:w-[calc((570/1440)*100vw)]"
      } gap-y-[12px]`}>
      <Image
        src={imgSrc}
        height={40}
        width={40}
        alt={title}
        className="h-[40px] w-[40px] md:w-[calc((50/1440)*100vw)] md:h-[calc((48.44/1440)*100vw)]"
      />
      <div className="h-[2px] w-[100px] bg-[#640D51]"></div>
      <h4 className="text-h6 font-bold md:text-H4">{title}</h4>
      <p className="text-p2 md:text-P1 text-[#6B7B93]">{description}</p>
    </div>
  );
}

export default ReasonCard;
