"use client";
export const Header = ({ weekday, events, date, yellowtext }: any) => {
  return (
    <div className="bg-zinc-800 grid grid-flow-col grid-cols-[auto_max-content]">
      <div className="font-semibold w-full text-center grid justify-center content-center border-b-8 border-slate-950 last:border-0">
        <div className="text-[64px] capitalize">{weekday}</div>
        <div className="text-[40px] text-zinc-500">{date}</div>
      </div>
      <div className="w-[290px] leading-[74px] text-center grid content-center justify-center border-b-8 border-l-8 bg-gradient-to-t from-amber-300/20 to-transparent border-slate-950">
        <div className="text-[55px] font-semibold text-amber-400">
          {yellowtext}
        </div>
        <div className="text-[100px] font-bold pt-3">{events}</div>
      </div>
    </div>
  );
};
