interface ScheduleEventProps {
  index: number;
  title: string;
  description?: string;
  time: string;
  location?: string;
}

const ScheduleEvent: React.FC<ScheduleEventProps> = ({
  index,
  title,
  description,
  time,
  location,
}) => {
  // const [clicked, setClicked] = useState(false);

  // Determine the color based on the index (even or odd)
  const color = index % 2 === 0 ? "bg-offWhite" : "bg-neutral-100/50";

  // if (clicked) return null;

  return (
    <>
      <div className={`w-full p-4 flex-col ${color}`}>
        <div className="flex justify-between">
          <h5 className="text-black lg:text-lg text-sm">{title}</h5>
          <p className="text-neutral-800 lg:text-base text-xs">{time}</p>
        </div>
        <div className="flex justify-between">
          <p
            className="text-xs lg:text-sm mt-1 text-neutral-800/90"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
          <p className="text-xs lg:text-sm mt-1 text-neutral-800/90">
            {location}
          </p>
        </div>
      </div>
    </>
  );
};

export default ScheduleEvent;
