"use client";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dayjs from "dayjs";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs();

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startOfWeek = startOfMonth.startOf("week");
  const endOfWeek = endOfMonth.endOf("week");

  const days = [];
  let date = startOfWeek;

  while (date.isBefore(endOfWeek)) {
    days.push(date);
    date = date.add(1, "day");
  }

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleToday = () => {
    setCurrentDate(today);
  };

  return (
    <main className="flex items-center justify-center">
      <div className="w-full h-[44rem] container p-4 bg-white shadow-md rounded-lg pr-8 pl-8">
        <div className="flex items-center justify-between mb-4 text-black">
          <h1 className="text-2xl font-semibold">
            {currentDate.format("MMMM YYYY")}
          </h1>
          <div>
            <button
              onClick={handlePrevMonth}
              className="px-4 py-2 font-bold rounded-l hover:bg-[#f1f4f9]"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={handleNextMonth}
              className="px-4 py-2 font-bold rounded-r hover:bg-gray-200"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={handleToday}
              className="px-4 py-2 font-bold rounded hover:bg-gray-200"
            >
              Today
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 text-gray-800 bg-[#f1f4f9] rounded-lg">
          <div className="text-center text-sm py-4 font-semibold">MON</div>
          <div className="text-center text-sm py-4 font-semibold">TUE</div>
          <div className="text-center text-sm py-4 font-semibold">WED</div>
          <div className="text-center text-sm py-4 font-semibold">THU</div>
          <div className="text-center text-sm py-4 font-semibold">FRI</div>
          <div className="text-center text-sm py-4 font-semibold">SAT</div>
          <div className="text-center text-sm py-4 font-semibold">SUN</div>

          {days.map((day, index) => {
            const isCurrentMonth = day.month() === currentDate.month();
            const isToday = day.isSame(today, "day");

            return (
              <div
                key={index}
                className={`p-8 text-right pt-3 pb-12 pr-4 border 
                  ${
                    !isCurrentMonth
                      ? "bg-custom-pattern bg-custom-size"
                      : "bg-white"
                  } 
                  ${isToday ? "font-semibold border-3 border-blue-800" : ""}`}
              >
                {day.date()}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
