import { useCalendar } from "../../hooks/useCalender";
import { DAYS_OF_WEEK, MONTH, YEAR } from "../../config/calendar.config";
import CalendarGrid from "./CalendarGrid";

const RightPanel = () => {
  const {
    selectedDates,
    monthDates,
    handleDateClick,
    calculateTotal,
    firstDayOffset,
  } = useCalendar();

  const monthName = new Date(YEAR, MONTH).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="lg:w-1/2 bg-white p-8 rounded-2xl right-panel-font">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-medium text-center mb-5 text-[var(--dark)]">
          Online Booking
        </h2>
        <h3 className="text-md font-medium text-center mb-6 text-[var(--dark)]">
          {monthName.toUpperCase()}
        </h3>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              className="h-8 flex items-center justify-center text-sm font-semibold text-[var(--dark)]"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Grid */}
        <CalendarGrid
          dates={monthDates}
          selectedDates={selectedDates}
          firstDayOffset={firstDayOffset}
          onClick={handleDateClick}
        />

        {/* Total */}
        <div className="grid grid-cols-2 gap-4 border border-[var(--color-secondary)] rounded">
          <div className="p-2 text-center text-md font-medium text-[var(--dark)] flex items-center justify-center">
            Select Dates To
            <br />
            See Total Cost
          </div>
          <div className="p-4 text-center bg-[var(--color-secondary)] text-[var(--dark)]">
            <div className="text-sm mb-1 font-medium">
              Total for <span className="text-sm font-semibold">{selectedDates.size} </span> nights
            </div>
            <div className="text-2xl font-semibold">
              <sup>$</sup>
              {calculateTotal()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
