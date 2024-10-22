"use client";

// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import PlusIcon from "@/app/icons/PlusIcon";
import MinusIcon from "@/app/icons/MinusIcon";

// CLSX
import clsx from "clsx";

export default function FooterLinksGroup({
  links,
  title,
}: {
  links: { label: string; url: string }[];
  title: string;
}) {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsToggled((prevToggle) => !prevToggle);
    }
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className={clsx(
          "py-2 flex items-center justify-between rounded-full",
          isToggled ? "bg-white/10 opacity-100" : "opacity-50",
          !isMobile && "cursor-default"
        )}
      >
        <span>{title}</span>
        {isMobile &&
          (isToggled ? (
            <MinusIcon width={16} height={16} />
          ) : (
            <PlusIcon width={16} height={16} />
          ))}
      </div>

      {isToggled || !isMobile ? (
        <ul className="flex flex-col gap-3">
          {links.map(({ label, url }, linkIndex) => (
            <li
              className="max-w-fit rounded-full hover:bg-white hover:text-footer py-1 px-2"
              key={linkIndex}
            >
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
