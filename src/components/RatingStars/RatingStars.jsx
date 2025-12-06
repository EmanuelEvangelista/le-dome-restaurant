import { FaStar } from "react-icons/fa";

const RatingStars = ({rating}) => {
  const totalStars = 5;
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
      {Array(totalStars)
        .fill()
        .map((_, i) => (
          <FaStar
            key={i}
            size={20}
            color={i < rating ? "#f4ce14" : "#ccc"}
          />
        ))}
    </div>
  );
};

export default RatingStars;