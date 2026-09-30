import "./App.css";
import healthApi from "./api/healthApi.js";
import useApi from "./hooks/useApi.js";
function App() {
  const {data, loading, error, refresh} = useApi(healthApi.food, {});
  return (
    <>
    <h2>{loading ? "loading": ""}</h2>
    <h2>Hellor i world</h2>
    {data.map(food => (
          <>
          <p>{food.Matvare}</p>
          </>
        ))
    }
    </>
  )
}

export default App
