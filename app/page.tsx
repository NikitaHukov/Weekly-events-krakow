"use client";
import * as R from "ramda";
import { EventBox } from "./components/EventBox";
import { Header } from "./components/Header";
import { YellowEventBox } from "./components/YellowEventBox";
import { groupEnd } from "console";
const getWeekdayNumber = (rawDate: string) => {
  const date = new Date(rawDate);
  const dayNumber = date.getDay();
  return dayNumber === 0 ? 7 : dayNumber - 1;
};
const displayDate = (rawDate: string) => {
  const date = new Date(rawDate);
  const options: any = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
const getWeekdayName = (rawDate: string) => {
  const date = new Date(rawDate);
  const options: any = { weekday: "long" };
  const dayName = date.toLocaleDateString("en-US", options);

  return dayName.toLowerCase();
};

// Output will be "Tuesday"
const rawData = [
  [
    "monday",
    "2/5/2024",
    "17:30",
    "Fusion Kraków",
    "Teenage choir by NCC",
    "instagram",
    "fusionkrakow",
    "Zygmunta Miłkowskiego 9",
    "fusion",
  ],
  [
    "wednesday",
    "2/7/2024",
    "19:00",
    "English conversation night",
    "Breakthrough",
    "instagram",
    "breakthroughkrakow",
    "Wroclawska 8A",
    "breakthrough",
  ],
  [
    "friday",
    "2/9/2024",
    "17:30",
    "TGIF Friday fellowship",
    "Krakow International Church",
    "facebook",
    "KrakowIntenationalChurch",
    "ul. Zabłocie 25/2",
    "internationalchurch",
  ],
  [
    "friday",
    "2/9/2024",
    "18:30",
    "Youth group",
    "By KDM for 12-18 y.o.",
    "instagram",
    "kdmkrakow",
    "Berka Joselewicza 28",
    "kdmkrakow",
  ],
];
// Now you can use 'data' as a JavaScript array
const events = rawData.map((item) => {
  const socialType = item[5] === "facebook" ? "facebook" : false;
  return {
    displayDate: displayDate(item[1]),
    weekDayName: getWeekdayName(item[1]),
    weekDayNumber: getWeekdayNumber(item[1]),
    weekday: item[0],
    title: item[3],
    subtitle: item[4],
    social: item[6],
    location: item[7],
    date: Date.now(),
    time: item[2],
    image: item[8],
    socialType: socialType,
  };
});

console.log(events.toSorted((a, b) => a.weekDayNumber - b.weekDayNumber));

const sortedEvents = events.toSorted(
  (a, b) => a.weekDayNumber - b.weekDayNumber
);
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function getStartAndEndOfWeek(dateStr: string): string {
  // Append current year to date string
  const date = new Date(`${dateStr}, ${new Date().getFullYear()}`);

  // Calculate the start of the week (Monday)
  const startOfWeek = new Date(date);
  startOfWeek.setDate(
    date.getDate() - (date.getDay() === 0 ? 6 : date.getDay() - 1)
  );

  // Calculate end of the week (Sunday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;
}

let week = getStartAndEndOfWeek(sortedEvents[0].displayDate);
console.log(week); // Prints: "January 29 - February 4"
console.log("HELLo", sortedEvents);
const grouped = R.groupBy((item) => item.weekDayName, sortedEvents);
console.log(grouped);
export default function Home() {
  return (
    <main className="grid justify-center gap-10">
      <div className="text-white w-[1080px] h-[1350px] bg-gradient-to-tr from-amber-400 to-amber-800 border-8 border-slate-950 grid grid-rows-[280px_auto]">
        <Header
          weekday="This week in Krakow"
          date={week}
          events="6"
          yellowtext="Week"
        />
        <div className="pt-10">
          {Object.entries(grouped).map(([weekday, data], index) => (
            <YellowEventBox weekday={weekday} events={data?.length} />
          ))}
        </div>
      </div>

      {Object.entries(grouped).map(([weekday, data], index) => (
        <div
          key={index}
          className="text-white w-[1080px] h-[1350px] bg-gradient-to-tr from-violet-600 to-violet-950 border-8 border-slate-950 grid grid-rows-[280px_auto]"
        >
          <Header
            date={data?.length ? data[0].displayDate : ""}
            weekday={weekday}
            events={data?.length}
            yellowtext="Events"
          />
          <div className="grid grid-rows-[1fr_1fr_1fr] content-center">
            {data?.map((event, index) => (
              <EventBox key={index} {...event} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
