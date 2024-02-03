export const YellowEventBox = ({ weekday, events }: any) => {
  return (
    <div className="px-16 py-8">
      <div className="text-6xl font-semibold bg-zinc-800 h-[124px] grid grid-cols-3 border-8 border-slate-950">
        <div className="p-5 capitalize">{weekday}</div>
        <div className="bg-slate-950 w-[8px] mx-auto items-baseline"></div>
        <div className="p-5">{events} Events</div>
      </div>
    </div>
  );
};
