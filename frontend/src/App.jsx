import "./App.css";
import healthApi from "./api/healthApi.js";
import useApi from "./hooks/useApi.js";
import Table from "./components/Table.jsx";

function App() {
  const {data, loading, error, refresh} = useApi(healthApi.food, {});

  return (
    <>
    <h2>{loading ? "loading": ""}</h2>
    <h2>Hellor i world</h2>
    <Table data={data} refresh={refresh}/>
    </>
  )
}

export default App
