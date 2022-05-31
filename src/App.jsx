import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import { AppProvider } from "./providers";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
