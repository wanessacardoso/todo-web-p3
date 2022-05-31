import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
