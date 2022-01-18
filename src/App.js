import { useRoutes} from "hookrouter";

import Header from "./components/Header/Header";
import routes from "./routes/routes";

function App() {
  const routeMatches = useRoutes(routes);
  
  return (
    <>
      <Header />
     {routeMatches}
    </>
  );
}

export default App;
