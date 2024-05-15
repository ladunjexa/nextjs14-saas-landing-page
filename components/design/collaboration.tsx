import { curve1, curve2 } from "@/public/assets/index";

export const RightCurve = () => (
  <div className="pointer-events-none absolute left-full top-1/2 -mt-1 ml-10 hidden w-[10.125rem] xl:block">
    <img src={curve2} width={162} height={76} alt="Curve 2" />
  </div>
);

export const LeftCurve = () => (
  <div className="pointer-events-none absolute right-full top-1/2 -mt-1 mr-10 hidden w-[32.625rem] xl:block">
    <img src={curve1} width={522} height={182} alt="Curve 1" />
  </div>
);