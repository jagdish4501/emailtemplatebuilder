import React from "react";
import selectedCommanIcon from "@/public/selectedCommonIcon.svg";

interface CardProps {
  title: string;
  content: string;
  badge?: boolean;
  badgeContent?: string;
}

const Card: React.FC<CardProps> = ({ title, content, badge, badgeContent }) => {
  return (
    <div className="relative w-[368px] h-[270px] rounded-[11px] bg-[#FAFAFA] p-[24px]">
      {badge && (
        <div className="bg-[#FFDC26] h-[28px] w-[113px] rounded-bl-[12px] rounded-tr-[12px] text-[14px] font-normal text-center absolute top-0 right-0">
          {badgeContent}
        </div>
      )}

      <div className="w-[320px] h-[222px]">
        <div className="w-full h-[84px]">
          <img
            src={selectedCommanIcon.src}
            alt="icon"
            className="w-[48px] h-[48px] bg-[#E2F3EF] rounded-[6px]"
          />
        </div>
        <div className="w-full h-[138px] relative">
          <div className="h-[84px] w-full">
            <div className="text-[24px] font-[600]">{title}</div>
            <div className="text-[14px] font-[400]">{content}</div>
          </div>
          <button className="text-[#389F7F] font-[500] text-[14px] w-[100px] h-[32px] text-center border border-[#389F7F] rounded-[6px] absolute bottom-0 left-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
