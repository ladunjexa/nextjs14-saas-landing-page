import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  title: string;
  text: string;
};

const Heading = ({ className, title, text }: Props) => {
  return (
    <div className={cn(className, "max-w-[50rem] mx-auto mb-12 lg:mb-20")}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
