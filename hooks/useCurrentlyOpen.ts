import businessDays from "@/data/businessDays";
import BusinessDay from "@/interfaces/BusinessDay";
import formatToHumanHour from "@/utils/formatToHumanHour";

/**
 * The status of the business at the time the hook is called, depending on the openingHours array in data/openingHours.ts.
 * @param {Date} today The date to check the status of the business. Defaults to the current date. Useful for testing !
 * @returns {[boolean, string]} An array containing the open status and a message.
 */
const useCurrentlyOpen = (today: Date = new Date()) => {
  const currentHour = parseFloat(today.getHours() + "." + today.getMinutes());
  const currentDay: BusinessDay = businessDays[today.getDay()];
  const isOpen = currentHour >= currentDay.startHour && currentHour < currentDay.endHour;
  let message = "";

  const getNextOpeningDay = (from: number, tomorrow: boolean = true): BusinessDay => {
    let dayIterator = from + 1;

    if (dayIterator > 6) {
      dayIterator = 0;
    }

    // If the next day is a day off, recursively call the function to get the following day with tomorrow set to false.
    if (businessDays[dayIterator].dayOff) {
      return getNextOpeningDay(dayIterator, false);
    } else {
      // If the next opening day is tomorrow, we return the day but with "demain" as the name of the day.
      if (tomorrow) return { ...businessDays[dayIterator], name: "demain" };

      return businessDays[dayIterator];
    }
  };

  const getMinutesDifference = (state: "closing" | "opening"): number => {
    const eventTime: Date = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${state === "closing" ? currentDay.endHour : currentDay.startHour}:00:00`);
    const millisecondsDifference = (eventTime.getTime() - today.getTime()) as number;
    const minutesDifference = Math.floor(millisecondsDifference / 60000);

    return minutesDifference;
  };

  if (getMinutesDifference("opening") > 90) {
    if (!currentDay.dayOff && currentDay.startHour) {
      message = `Nous ouvrons à ${formatToHumanHour(currentDay.startHour)}h !`;
    } else {
      message = "Nous sommes fermés aujourd'hui...";
    }
  } else if (getMinutesDifference("opening") <= 90 && getMinutesDifference("opening") > 30) {
    // Between 90 and 30 minutes before opening
    message = "Nous ouvrons bientôt !";
  } else if (getMinutesDifference("opening") <= 30 && getMinutesDifference("opening") > 0) {
    // Between 30 and 0 minutes before opening
    message = "Nous ouvrons très bientôt !";
  } else if (getMinutesDifference("opening") <= 0 && getMinutesDifference("closing") > 60) {
    // Between opening hour and 60 minutes before closing
    message = "Nous sommes ouverts !";
  } else if (getMinutesDifference("closing") <= 60 && getMinutesDifference("closing") > 30) {
    // Between 60 and 30 minutes before closing
    message = `Nous fermons bientôt (dans ${getMinutesDifference("closing")} minutes) !`;
  } else if (getMinutesDifference("closing") <= 30 && getMinutesDifference("closing") > 0) {
    // Between 30 and 0 minutes before closing
    message = `Attention, nous fermons très bientôt (dans ${getMinutesDifference("closing")} minutes) !`;
  } else if (getMinutesDifference("closing") <= 0) {
    message = `Nous sommes fermés... Rendez-vous dès ${getNextOpeningDay(today.getDay()).name} à ${formatToHumanHour(getNextOpeningDay(today.getDay()).startHour)}h !`;
  }

  return [isOpen, message];
};

export default useCurrentlyOpen;
