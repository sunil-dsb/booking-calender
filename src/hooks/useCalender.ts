import { useMemo, useState } from "react";
import { DISABLED_DATES, HARDCODED_PRICES, MONTH, SELECTEDDATES, YEAR } from "../config/calendar.config";
import type { DatePrice } from "../types";


export function useCalendar() {
  const [selectedDates, setSelectedDates] =
    useState<Set<number>>(SELECTEDDATES);

  const numDaysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  const firstDayOffset = new Date(YEAR, MONTH, 1).getDay();

  const monthDates: DatePrice[] = useMemo(() => {
    return Array.from({ length: numDaysInMonth }, (_, i) => {
      const day = i + 1;
      return {
        date: day,
        price: HARDCODED_PRICES[i] || 0,
        available: !DISABLED_DATES.has(day),
      };
    });
  }, [numDaysInMonth]);

  const handleDateClick = (date: number) => {
    const dateData = monthDates.find((d) => d.date === date);
    if (!dateData?.available) return;

    const newSelected = new Set(selectedDates);
    
    if (selectedDates.has(date)) {
      newSelected.delete(date);
    } else {
      newSelected.add(date);
    }
    setSelectedDates(newSelected);
  };

  const calculateTotal = () => {
    return Array.from(selectedDates).reduce((total, date) => {
      const dateData = monthDates.find((d) => d.date === date);
      return total + (dateData?.price || 0);
    }, 0);
  };

  return {
    selectedDates,
    monthDates,
    handleDateClick,
    calculateTotal,
    firstDayOffset,
  };
}
