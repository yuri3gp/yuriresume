import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles/global';
import Switch from "./routes/Switch";
import Header from './componentes/Header';
import Footer from './componentes/Footer';



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch />
        <Footer/>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
