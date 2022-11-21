import { BrowserRouter } from "react-router-dom";
import Header from './componentes/Header';
import PageRoutes from "./routes/PageRoutes";
import Footer from './componentes/Footer';
import GlobalStyle from './styles/global';



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <PageRoutes />
        <Footer/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}
