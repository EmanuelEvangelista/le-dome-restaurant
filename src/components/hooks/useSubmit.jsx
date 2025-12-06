import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      // JSONPlaceholder devuelve un objeto con un id simulado
      setResponse({
        type: "success",
        message: `Simulated token (id): ${json.id}`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: error.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
      // Mantener el mensaje visible unos segundos
      setTimeout(() => setResponse(null), 3000);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;