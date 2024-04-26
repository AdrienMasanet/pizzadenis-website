import BusinessDay from "@/interfaces/BusinessDay";
import formatToHumanHour from "@/utils/formatToHumanHour";

type BusinessDayItemProps = {
  businessDay: BusinessDay;
};

const BusinessDayItem = ({ businessDay }: BusinessDayItemProps) => {
  return (
    <tbody>
      <tr className="my-1">
        <td className="capitalize py-1">
          <span className="font-bold rounded mr-10">{businessDay.name}</span>
        </td>
        {!businessDay.dayOff && businessDay.startHour && businessDay.endHour ? (
          <>
            <td className="text-center">{formatToHumanHour(businessDay.startHour)}</td>
            <td className="px-2 mx-2">|</td>
            <td className="text-center">{formatToHumanHour(businessDay.endHour)}</td>
          </>
        ) : (
          <td className="text-center text-red-500" colSpan={3}>
            Fermé
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default BusinessDayItem;
