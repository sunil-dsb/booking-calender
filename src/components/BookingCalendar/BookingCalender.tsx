import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const BookingCalendar = () => {

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row rounded-2xl max-w-5xl w-full overflow-hidden">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel - Calendar */}
        <RightPanel />
      </div>
    </div>
  );
};

export default BookingCalendar;
