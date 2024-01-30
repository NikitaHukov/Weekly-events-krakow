"use client";
export const EventBox = ({
  title,
  subtitle,
  social,
  location,
  time,
  image,
}: any) => {
  // const image = "breakthrough";
  return (
    <div className="flex font-semibold px-10 items-center border-b-8 border-slate-950 gap-3 last:border-0">
      <div className="w-52 h-52 rounded-full">
        <img className="rounded-full w-52 " src={`/${image}.png`}></img>
      </div>
      <div className="">
        <div className="text-6xl"> {title}</div>
        <div className="text-3xl text-zinc-300 pt-3">{subtitle}</div>
        <div className="text-3xl bg-slate-950 w-max p-2 mt-3">{social}</div>
        <div className="flex gap-2 text-3xl pt-3">
          <div className="">Starts at {time}</div>
          <div>-</div>
          <div>{location}</div>
        </div>
      </div>
    </div>
  );
};
