import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

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
