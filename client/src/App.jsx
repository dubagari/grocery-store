import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Layout from "./pages/Layout";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
