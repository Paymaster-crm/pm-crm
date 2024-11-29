import React, { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLefttIcon from "@mui/icons-material/ChevronLeft";
import { IconButton, Tooltip } from "@mui/material";

const CustomCalendar = (props) => {
  const [daysInMonth, setDaysInMonth] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const holidays = [
    "2024-01-26",
    "2024-03-25",
    "2024-03-29",
    "2024-04-11",
    "2024-04-17",
    "2024-04-21",
    "2024-05-23",
    "2024-06-17",
    "2024-07-17",
    "2024-08-15",
    "2024-08-26",
    "2024-09-16",
    "2024-10-02",
    "2024-10-12",
    "2024-10-31",
    "2024-11-15",
    "2024-12-25",
  ];

  // Function to calculate the start day and number of days in the month
  const calculateMonthDetails = () => {
    const firstDayOfMonth =
      (new Date(props.year, props.month, 1).getDay() + 6) % 7;
    // Adjust first day to Monday (0 = Monday, 6 = Sunday)
    const lastDateOfMonth = new Date(props.year, props.month + 1, 0).getDate(); // Get the last date of the month
    const prevMonthLastDate = new Date(props.year, props.month, 0).getDate(); // Last date of the previous month

    const daysInCurrentMonth = [];

    // Add the last days of the previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      daysInCurrentMonth.push({
        day: prevMonthLastDate - i,
        isCurrentMonth: false,
      });
    }

    // Add the days of the current month
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === props.currentDate.getDate() &&
        props.month === props.currentDate.getMonth() &&
        props.year === props.currentDate.getFullYear();
      daysInCurrentMonth.push({ day: i, isCurrentMonth: true, isToday });
    }

    // Add the first days of the next month to fill the calendar grid
    const remainingDays = 42 - daysInCurrentMonth.length; // Calculate how many more days are needed to fill the grid
    for (let i = 1; i <= remainingDays; i++) {
      daysInCurrentMonth.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    setDaysInMonth(daysInCurrentMonth);
  };

  const getStatusClass = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return "";

    const date = new Date(props.year, props.month, day);
    if (date.getDay() === 0) return "";

    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
    const istDate = new Date(date.getTime() + istOffset); // Adjust to IST

    const dateStringforHoliday = istDate.toISOString().split("T")[0];

    if (holidays.includes(dateStringforHoliday)) {
      return "holiday";
    }

    const dateString = date.toISOString().split("T")[0];

    const status = props.attendances.find(
      (entry) => entry.date.split("T")[0] === dateString
    );
    if (status) {
      return status.status.toLowerCase();
    }
    return "";
  };

  useEffect(() => {
    calculateMonthDetails();
    // eslint-disable-next-line
  }, [props.month, props.year]);

  const handleNavigation = (direction) => {
    let newMonth = props.month + direction;
    let newYear = props.year;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    props.setMonth(newMonth);
    props.setYear(newYear);
  };

  const getTooltipTitle = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return ""; // No tooltip for inactive days

    const date = new Date(props.year, props.month, day);
    if (date.getDay() === 0) return "Week off"; // Sundays

    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset
    const istDate = new Date(date.getTime() + istOffset); // Adjust to IST
    const dateStringforHoliday = istDate.toISOString().split("T")[0];

    if (holidays.includes(dateStringforHoliday)) {
      return "Holiday"; // Tooltip for holidays
    }

    const dateString = date.toISOString().split("T")[0];
    const status = props.attendances.find(
      (entry) => entry.date.split("T")[0] === dateString
    );

    if (status) {
      switch (status.status.toLowerCase()) {
        case "present":
          return "Present";
        case "halfday":
          return "Half Day";
        case "leave":
          return "Leave";
        default:
          return "";
      }
    }

    return "";
  };

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <p className="calendar-current-date">{`${months[props.month]} ${
          props.year
        }`}</p>
        <div className="calendar-navigation">
          <IconButton onClick={() => handleNavigation(-1)}>
            <ChevronLefttIcon />
          </IconButton>
          <IconButton onClick={() => handleNavigation(1)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </header>

      <div className="calendar-body">
        <ul className="calendar-weekdays">
          {weekdays.map((weekday, index) => (
            <li key={index}>{weekday}</li>
          ))}
        </ul>
        <ul className="calendar-dates">
          {daysInMonth.map((day, index) => (
            <Tooltip
              key={index}
              title={getTooltipTitle(day.day, day.isCurrentMonth)}
              arrow
            >
              <li
                className={`calendar-day ${
                  day.isCurrentMonth ? "" : "inactive"
                } ${day.isToday ? "active" : ""} ${getStatusClass(
                  day.day,
                  day.isCurrentMonth
                )}`}
              >
                {day.day}
              </li>
            </Tooltip>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomCalendar;
