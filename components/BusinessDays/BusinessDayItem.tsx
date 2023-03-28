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
          <span className="bg-black text-white font-bold rounded p-1 mr-5">{businessDay.name}</span>
        </td>
        {businessDay.dayOff ? (
          <td className="text-center text-red-500" colSpan={3}>
            Fermé
          </td>
        ) : (
          <>
            <td className="text-center">{formatToHumanHour(businessDay.startHour)}</td>
            <td className="px-2 mx-2">|</td>
            <td className="text-center">{formatToHumanHour(businessDay.endHour)}</td>
          </>
        )}
      </tr>
    </tbody>
  );
};

export default BusinessDayItem;
