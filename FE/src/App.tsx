import { Route, Routes } from "react-router-dom";
import { publicRoute, RouteProps } from "./routes";

const routeRouter = (routeList: RouteProps[]) => {
  return routeList.map((item: RouteProps, index: number) => {
    const Page = item.component;
    return (
      <Route key={index} element={<Page />} path={item.path}>
        {item.children && routeRouter(item.children)}
      </Route>
    );
  });
};

console.log(routeRouter(publicRoute));

function App() {
  return (
    <div className="App">
      <Routes>{routeRouter(publicRoute)}</Routes>
    </div>
  );
}

export default App;
