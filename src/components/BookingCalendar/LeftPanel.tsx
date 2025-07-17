import calender from "../../assets/calender.svg";
import avatar from "../../assets/avatar.svg";
const LeftPanel = () => {
  return (
    <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center flex-col">
      <div className="left-panel-font">
        <div className="mb-4">
          <div className="flex items-center mb-6 w-20 h-20">
            <img src={calender} alt="calender" className="w-full" />
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4 text-[var(--white)] text-left font-bold">
            Booking Calendar
            <br />
            <span className="text-3xl lg:text-4xl">+ Pricing</span>
          </h1>
          <p className="text-2xl mb-8 text-left font-medium text-[var(--dark)]">
            Click on dates to add to or subtract from the total price and number
            of nights.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-full flex right-panel-font">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mr-3">
          <img src={avatar} alt="avatar" className="w-full" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-[var(--dark)]">
            Nate Greenwall
          </h3>
          <p className="text-xs font-medium text-[var(--dark)]">
            Vue Experience Person
          </p>
          <a href="#" className="text-xs underline font-normal">
            Community Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
