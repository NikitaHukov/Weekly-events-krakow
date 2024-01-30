"use client";
import * as R from "ramda";
import { EventBox } from "./components/EventBox";
import { Header } from "./components/Header";
const rawData = [
  [
    "wednesday",
    "",
    "19:00",
    "Breakthrough",
    "English conversation night",
    "IG:breakthroughkrakow",
    "Wroclawska 8A",
    "breakthrough",
  ],
  [
    "monday",
    "12/12/2023",
    "17:30",
    "Fusion Kraków",
    "Teenage choir by NCC",
    "IG:fusionkrakow",
    "Zygmunta Miłkowskiego 9",
    "fusion",
  ],
  [
    "monday",
    "12/12/2023",
    "19:30",
    "Gravity Kraków",
    "The Polish Christian Club",
    "IG:gravity.krk",
    "Golikówka 12",
    "gravitykrakow",
  ],
];
// Now you can use 'data' as a JavaScript array
const events = rawData.map((item) => {
  return {
    weekday: item[0],
    title: item[3],
    subtitle: item[4],
    social: item[5],
    location: item[6],
    date: Date.now(),
    time: item[2],
    image: item[7],
  };
});
// const events = [
//   {
//     weekday: "monday",
//     title: "Breakthrougth Krakow",
//     subtitle: "English conversation night",
//     social: "breakthroughkrakow",
//     location: "Wroclawska 8A",
//     date: Date.now(),
//   },
//   {
//     weekday: "monday",
//     title: "Breakthrougth Krakow",
//     subtitle: "English conversation night",
//     social: "breakthroughkrakow",
//     location: "Wroclawska 8A",
//     date: Date.now(),
//   },
//   {
//     weekday: "monday",
//     title: "Breakthrougth Krakow",
//     subtitle: "English conversation night",
//     social: "breakthroughkrakow",
//     location: "Wroclawska 8A",
//     date: Date.now(),
//   },
//   {
//     weekday: "tuesday",
//     title: "Breakthrougth Krakow",
//     subtitle: "English conversation night",
//     social: "breakthroughkrakow",
//     location: "Wroclawska 8A",
//     date: Date.now(),
//   },
//   {
//     weekday: "wednesday",
//     title: "Breakthrougth Krakow",
//     subtitle: "English conversation night",
//     social: "breakthroughkrakow",
//     location: "Wroclawska 8A",
//     date: Date.now(),
//   },
//   {
//     weekday: "saturday",
//     title: "Breakthrougth Krakow",
//     subtitle: "English conversation night",
//     social: "breakthroughkrakow",
//     location: "Wroclawska 8A",
//     date: Date.now().toString(),
//   },
// ];
console.log(R.groupBy((item) => item.weekday, events));

const grouped = R.groupBy((item) => item.weekday, events);
export default function Home() {
  return (
    <main className="grid justify-center gap-10">
      {Object.entries(grouped).map(([weekday, data]) => (
        <div className="text-white w-[1080px] h-[1350px] bg-violet-800 border-8 border-slate-950 grid grid-rows-[280px_auto]">
          <Header weekday={weekday} events={data?.length} />
          <div className="grid grid-rows-[1fr_1fr_1fr] content-center">
            {data?.map((event, index) => (
              <EventBox {...event} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
