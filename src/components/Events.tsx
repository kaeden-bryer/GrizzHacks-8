"use client";
import React, { useState } from "react";
import ScheduleEvent from "./ScheduleEvent";
import eventsData from "../data/events.json";

interface Event {
  day: "saturday" | "sunday";
  name: string;
  time: string;
  description: string;
  location?: string;
}

const Events: React.FC = () => {
  const [saturdaySelected, setSaturdaySelected] = useState(true);

  const events: Event[] = eventsData as Event[];

  return (
    <div id="schedule" className="containerr p-2">
      <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        Schedule
      </h1>
      {/* BIG SCREENS */}
      <div className="w-full gap-3 hidden lg:flex">
        {/* SATURDAY */}
        <div className="w-1/2 flex flex-col">
          <h4 className="text-2xl mb-2 text-neutral-800/80">
            <span className="font-semibold text-black">Saturday</span> March
            22nd
          </h4>
          <div className="overflow-auto h-[30rem] rounded-lg">
            {events
              .filter((event) => event.day === "saturday")
              .map((event, index) => (
                <ScheduleEvent
                  key={index}
                  index={index}
                  title={event.name}
                  time={event.time}
                  description={event.description}
                  location={event.location}
                />
              ))}
          </div>
        </div>

        {/* SUNDAY */}
        <div className="w-1/2">
          <h4 className="text-2xl mb-2 text-neutral-800/80">
            <span className="font-semibold text-black">Sunday</span> March 23rd
          </h4>
          <div className="overflow-auto h-[30rem] rounded-lg">
            {events
              .filter((event) => event.day === "sunday")
              .map((event, index) => (
                <ScheduleEvent
                  key={index}
                  index={index}
                  title={event.name}
                  time={event.time}
                  description={event.description}
                  location={event.location}
                />
              ))}
          </div>
        </div>
      </div>

      {/* SMALLER SCREENS */}
      <div className="w-full lg:hidden">
        <div className="flex items-end mx-1 justify-between mb-1">
          <h4 className="text-2xl text-neutral-300/80">
            <span className="font-semibold text-white">
              {saturdaySelected ? "Saturday" : "Sunday"}
            </span>
            {saturdaySelected ? "March 22nd" : "March 23rd"}
          </h4>
          <button
            className="flex items-center text-sm"
            onClick={() => setSaturdaySelected(!saturdaySelected)}
          >
            {saturdaySelected ? "Sunday" : "Saturday"}
            <img src="/arrowRight.svg" alt="arrow" />
          </button>
        </div>
        <div className="overflow-auto h-[30rem] rounded-lg">
          {events
            .filter(
              (event) =>
                event.day === (saturdaySelected ? "saturday" : "sunday")
            )
            .map((event, index) => (
              <ScheduleEvent
                key={index}
                index={index}
                title={event.name}
                time={event.time}
                description={event.description}
                location={event.location}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
