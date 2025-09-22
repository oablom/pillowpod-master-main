"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./CalendarDarkMode.css";

interface CalendarProps {
  value: Range;
  disableDates: Date[];
  onChange: (value: RangeKeyDict) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disableDates,
}) => {
  return (
    <DateRange
      rangeColors={["#444444"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disableDates}
    />
  );
};

export default Calendar;
