import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setResponse(res); // 👈 esto guarda el objeto Response de fetch()
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
