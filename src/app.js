import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Counter from "./components/Counter";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    const detail = data.results[0];
    console.log(detail)
    setDetails(detail);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <Counter />
      <Navbar />
      <h1 className="text-3xl font-bold bg-gray-700 underline">
        Adarsh chhetri
      </h1>
      <p className="text-2xl">this is me coding</p>
      <Card details={details} />
    </>
  );
}

export default App;
