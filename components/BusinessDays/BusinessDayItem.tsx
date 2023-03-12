import BusinessDay from "@/interfaces/BusinessDay";
import formatToHumanHour from "@/utils/formatToHumanHour";

type BusinessDayItemProps = {
  businessDay: BusinessDay;
};

const BusinessDayItem = ({ businessDay }: BusinessDayItemProps) => {
  return (
    <tbody>
      <tr className="my-1">
        <td className="capitalize py-1 px-2 ">
          <span className="bg-stone-300 rounded p-1">{businessDay.name}</span>
        </td>
        {businessDay.dayOff ? (
          <td className="text-red-500">Fermé</td>
        ) : (
          <>
            <td>{formatToHumanHour(businessDay.startHour)}</td>
            <td>{formatToHumanHour(businessDay.endHour)}</td>
          </>
        )}
      </tr>
    </tbody>
  );
};

export default BusinessDayItem;
