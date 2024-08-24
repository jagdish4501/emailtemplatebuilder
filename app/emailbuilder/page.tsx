"use client";
import Emailbuilder from "./index";
const EmailTemplateBuilder: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[300px] w-full bg-black"></div>
      <Emailbuilder />
    </div>
  );
};

export default EmailTemplateBuilder;
