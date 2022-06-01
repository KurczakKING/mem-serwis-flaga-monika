import "./styles/styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme.js";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hot } from "./routes/Hot";
import { Regular } from "./routes/Regular";
import { AddMeme } from "./routes/AddMeme";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/regular" />} />
        <Route path="/" element={<Layout />}>
          <Route path="hot" element={<Hot />} />
          <Route path="regular" element={<Regular />} />
          <Route path="add-meme" element={<AddMeme />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
