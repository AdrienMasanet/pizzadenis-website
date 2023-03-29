import BusinessDay from "@/interfaces/BusinessDay";

const businessDays: BusinessDay[] = [
  { name: "dimanche", startHour: 18.0, endHour: 21.0 },
  { name: "lundi", dayOff: true },
  { name: "mardi", startHour: 18.0, endHour: 21.0 },
  { name: "mercredi", startHour: 18.0, endHour: 21.0 },
  { name: "jeudi", startHour: 18.0, endHour: 21.0 },
  { name: "vendredi", startHour: 18.0, endHour: 21.0 },
  { name: "samedi", startHour: 18.0, endHour: 21.0 },
];

export default businessDays;
