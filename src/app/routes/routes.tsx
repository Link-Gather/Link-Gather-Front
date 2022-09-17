import { HomeScreen } from "@screens";
import { Route, Routes } from "react-router-dom";
import { ROUTE_ROOT } from "./const";

function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTE_ROOT} element={<HomeScreen />} />
    </Routes>
  );
}

export { AppRouter };
