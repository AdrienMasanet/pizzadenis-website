import businessDays from "@/data/businessDays";
import BusinessDayItem from "./BusinessDayItem";

const BusinessDays = () => {
  if (!businessDays || businessDays.length < 7) return <div className="text-red-800 text-center">Erreur lors du chargement des horaires d&apos;ouverture</div>;

  return (
    <table className="table-fixed border-black">
      {businessDays.map((businessDay, index) => (
        <BusinessDayItem businessDay={businessDay} key={index} />
      ))}
    </table>
  );
};

export default BusinessDays;
