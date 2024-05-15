import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  title: string;
};

const Heading = ({ className, title }: Props) => {
  return (
    <div className={cn(className, "max-w-[50rem] mx-auto mb-12 lg:mb-20")}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
