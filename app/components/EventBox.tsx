"use client";

import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";

export const EventBox = ({
  title,
  subtitle,
  social,
  location,
  time,
  image,
  socialType,
}: any) => {
  // const image = "breakthrough";

  return (
    <div className="flex font-semibold px-10 items-center border-b-8 border-slate-950 gap-8 last:border-0">
      <div className="w-44 h-44 rounded-full">
        <img className="rounded-full w-52 " src={`/${image}.png`}></img>
      </div>
      <div className="">
        <div className="text-5xl"> {title}</div>
        <div className="text-4xl text-zinc-300 pt-3">{subtitle}</div>
        <div className="h-[64px] grid grid-cols-[64px_auto] text-3xl bg-slate-950 w-max  mt-3 rounded-lg">
          {socialType === "facebook" ? (
            <div className="bg-zinc-500 rounded-l-lg flex justify-center items-center h-[64px] p-3">
              <FacebookIcon />
            </div>
          ) : (
            <div className="bg-zinc-500 flex justify-center items-center rounded-l-lg">
              <InstagramIcon />
            </div>
          )}
          <div className="flex items-center px-6">{social}</div>
        </div>
        <div className="flex gap-2 text-4xl pt-3">
          <div className="">Starts at {time}</div>
          <div>-</div>
          <div>{location}</div>
        </div>
      </div>
    </div>
  );
};
