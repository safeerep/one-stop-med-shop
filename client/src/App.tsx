import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./shadcn/theme-provider";
import { 
  Home, 
  ProductView
} from "./pages";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-view" element={<ProductView />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
