import React, { useState, useEffect } from 'react';

interface ScheduleEventProps {
  index: number;
  title: string;
  description: string;
  time: string;
}

const ScheduleEvent: React.FC<ScheduleEventProps> = ({ index, title, description = '', time }) => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState<string>('bg-neutral-950/80');

  // Set color based on index
  useEffect(() => {
    if (index % 2 === 0) {
      setColor('bg-neutral-950/80');
    } else {
      setColor('bg-neutral-950/50');
    }
  }, [index]);

  return (
    <>
      {!clicked && (
        <div className={`w-full p-4 flex-col ${color}`}>
          <div className="flex justify-between">
            <h5 className="text-white lg:text-lg">{title}</h5>
            <p className="text-neutral-400 lg:text-base text-sm">{time}</p>
          </div>
          <p className="text-xs lg:text-sm mt-1 text-neutral-300/90" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
    </>
  );
};

export default ScheduleEvent;
