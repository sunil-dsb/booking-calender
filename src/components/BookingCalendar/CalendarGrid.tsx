import type { DatePrice } from "../../types";

interface Props {
  dates: DatePrice[];
  selectedDates: Set<number>;
  firstDayOffset: number;
  onClick: (date: number) => void;
}

const CalendarGrid = ({ dates, selectedDates, firstDayOffset, onClick }: Props) => {
  const grid = [];

  for (let i = 0; i < firstDayOffset; i++) {
    grid.push(<div key={`empty-${i}`} className="h-12"></div>);
  }

  dates.forEach((d) => {
    const isSelected = selectedDates.has(d.date);
    const isAvailable = d.available;

    grid.push(
      <div
        key={d.date}
        onClick={() => onClick(d.date)}
        className={`h-[70px] flex flex-col items-center justify-center cursor-pointer transition-all duration-200 rounded gap-2
          ${isSelected
            ? "bg-[var(--color-primary)]"
            : isAvailable
              ? "hover:bg-[var(--color-secondary)]"
              : "bg-[var(--color-secondary)] opacity-50 cursor-not-allowed"
          }`}
      >
        <span className="text-xs font-bold text-[var(--dark)]">{d.date}</span>
        <span className="text-xs">
          {isAvailable ? `$${d.price}` : "--"}
        </span>
      </div>
    );
  });

  return <div className="grid grid-cols-7 gap-1 mb-8">{grid}</div>;
};

export default CalendarGrid;
