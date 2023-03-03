import businessDays from "@/data/businessDays";
import BusinessDay from "@/interfaces/BusinessDay";

/**
 * The status of the business at the time the hook is called, depending on the openingHours array in data/openingHours.ts.
 * @returns {[boolean, string]} An array containing the open status and a message.
 */
const useCurrentlyOpen = (today: Date = new Date("March 3, 2023 19:00:00")) => {
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

  if (currentHour < currentDay.startHour - 2.3) {
    message = "Nous sommes fermés jusqu'à XXX";
  } else if (currentHour >= currentDay.startHour - 2.3 && currentHour < currentDay.startHour - 1) {
    message = "Nous ouvrons bientôt";
  } else if (currentHour >= currentDay.startHour - 1 && currentHour < currentDay.startHour) {
    message = "Nous ouvrons très bientôt";
  } else if (currentHour >= currentDay.startHour && currentHour < currentDay.endHour - 1) {
    message = "Nous sommes ouverts";
  } else if (currentHour >= currentDay.endHour - 1 && currentHour < currentDay.endHour - 0.3) {
    message = "Nous fermons bientôt";
  } else if (currentHour >= currentDay.endHour - 0.3 && currentHour < currentDay.endHour) {
    message = "Nous fermons très bientôt";
  } else if (currentHour >= currentDay.endHour) {
    message = `Nous sommes fermés... Rendez-vous ${getNextOpeningDay(today.getDay()).name} dès ${getNextOpeningDay(today.getDay()).startHour}h !`;
  }

  return [isOpen, message];
};

export default useCurrentlyOpen;
