import React, { useState } from "react";
import events from './events';
const EventDay: React.FC = () => {
    const [saturdaySelected, setSaturdaySelected] = useState(true);
  
    return (
      <>
        {/* BIG SCREEN */}
        <div className="w-full gap-3 hidden lg:flex">
          {/* Saturday */}
          <div className="w-1/2 flex flex-col">
            <h4 className="text-2xl mb-2 text-neutral-300/80">
              <span className="font-semibold text-white">Saturday</span> March 9th
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
                  />
                ))}
            </div>
          </div>
  
          {/* Sunday */}
          <div className="w-1/2">
            <h4 className="text-2xl mb-2 text-neutral-300/80">
              <span className="font-semibold text-white">Sunday</span> March 10th
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
                  />
                ))}
            </div>
          </div>
        </div>
  
        {/* SMALL SCREEN */}
        <div className="w-full lg:hidden">
          <div className="flex items-end mx-1 justify-between mb-1">
            <h4 className="text-2xl text-neutral-300/80">
              <span className="font-semibold text-white">
                {saturdaySelected ? "Saturday" : "Sunday"}
              </span>
              {saturdaySelected ? " March 9th" : " March 10th"}
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
              .filter((event) => event.day === (saturdaySelected ? "saturday" : "sunday"))
              .map((event, index) => (
                <ScheduleEvent
                  key={index}
                  index={index}
                  title={event.name}
                  time={event.time}
                  description={event.description}
                />
              ))}
          </div>
        </div>
      </>
    );
  };
  
  export default EventDay;
  