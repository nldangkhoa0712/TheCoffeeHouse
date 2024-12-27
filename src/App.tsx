import { Route, Routes } from "react-router-dom";
import { publicRoute, RouteProps } from "./routes";

function App() {
  return (
    <div className="App">
      <h1>My React App with Routing</h1>
      <Routes>
        {publicRoute.map((item: RouteProps, index: number) => {
          const Page = item.component;
          return <Route key={index} path={item.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
