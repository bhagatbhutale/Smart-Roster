import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await api.get("/health");
        setStatus(response.data.message);
      } catch (err) {
        setError(err.message);
        setStatus("Backend connection failed");
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Smart Roster Management
        </h1>

        <p className="mt-4 text-gray-600">Backend Status:</p>

        <p className="mt-2 font-semibold text-green-600">{status}</p>

        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default App;
