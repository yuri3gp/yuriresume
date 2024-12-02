import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NotFoundCard } from "./components/NotFoundCard";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100vh"
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFoundCard />} />
        </Routes>
      </Layout>
    </Box>
  )
}

export default App;
