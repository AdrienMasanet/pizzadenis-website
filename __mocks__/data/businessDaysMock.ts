import BusinessDay from "@/interfaces/BusinessDay";

const businessDaysMock: BusinessDay[] = [
  { name: "dimanche", startHour: 18.0, endHour: 21.0 },
  { name: "lundi", dayOff: true },
  { name: "mardi", startHour: 18.0, endHour: 21.0 },
  { name: "mercredi", dayOff: true },
  { name: "jeudi", dayOff: true },
  { name: "vendredi", startHour: 18.0, endHour: 21.0 },
  { name: "samedi", startHour: 18.0, endHour: 21.0 },
];

export default businessDaysMock;
