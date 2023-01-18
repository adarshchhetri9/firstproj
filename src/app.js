import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter/>
      <Navbar />
      <h1 className="text-3xl font-bold bg-gray-700 underline">
        Adarsh chhetri
      </h1>
      <p className="text-2xl">this is me coding</p>
      <Card
        img="https://as01.epimg.net/meristation_en/imagenes/2022/07/23/news/1658585691_407651_1658585843_noticia_normal.jpg"
        ler="happy me"
      />
    </>
  );
}

export default App;
