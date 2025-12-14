import { useContext} from "react";
import { RestaurantContext } from "../../contexts/restaurantContext"

const TimeOption = () => {
  const { availableTimes } = useContext(RestaurantContext);

  if (!Array.isArray(availableTimes)) return null;

  return (
    <>
      {availableTimes.map((slot, idx) => {
        const time = typeof slot === "object" ? slot.time : slot;
        const key = typeof slot === "object"
          ? `${slot.date || 'no-date'}-${time}-${idx}`
          : `${slot}-${idx}`;

        return (
          <option key={key} value={time}>
            {time}
          </option>
        );
      })}
    </>
  );
};

export default TimeOption;