import "./App.css";
import healthApi from "./api/healthApi.js";
import useApi from "./hooks/useApi.js";
import Table from "./components/Table.jsx";

function App() {
  const {data, loading, error, refresh} = useApi(healthApi.food, {});

  if(loading) return <h2>Loading... </h2>
  if(error) return <h2>Error: {error.message}</h2>
  return (
    <>
    <h2>Hellor i world</h2>
        <Table data={data} refresh={refresh}/>
    </>
  )
}

export default App
