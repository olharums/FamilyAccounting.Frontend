import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./Components/AppRouter";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar/NavBar";

const App = observer(() => {
  return (
    <BrowserRouter>
      <NavBar />

      <AppRouter />

      <Footer />
    </BrowserRouter>
  );
});

export default App;
