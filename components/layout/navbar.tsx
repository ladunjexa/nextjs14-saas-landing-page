"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { brainwave } from "@/public/assets/index";
import { cn } from "@/lib/utils";
import { navigation } from "@/constants";
import { useParams } from "next/navigation";
import Button from "../atoms/button";
import MenuSvg from "../svg/menu-svg";
import { HamburgerMenu } from "../design/navbar";

type Props = {};
type TSection = "hero" | "features" | "collaboration" | "how-to-use" | "pricing";

const Navbar = (props: Props) => {
  const params = useParams();
  const [hash, setHash] = useState<TSection>("hero");
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  useEffect(() => {
    setHash(window.location.hash as TSection);
  }, [params]);

  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <div
      className={cn(
        `fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`,
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      )}
    >
      <div className={cn(`flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10`)}>
        <Link href="#hero" className={cn(`block w-48 xl:mr-8`)}>
          <Image src={brainwave} alt="brainwave" width={190} height={40} />
        </Link>

        <nav
          className={cn(
            `fixed inset-x-0 bottom-0 top-20 hidden bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`,
            openNavigation ? "flex" : "hidden"
          )}
        >
          <div
            className={cn(
              "relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
            )}
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={cn(
                  `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1`,
                  "px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold",
                  item.onlyMobile && "lg:hidden",
                  item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50",
                  "lg:leading-5 lg:hover:text-n-1 xl:px-12"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Link
          href="#signup"
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </Link>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
