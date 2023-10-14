import { ErrorBoundary } from "rc-extended"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";
import Error from "@/components/Error"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary fallback={() => <Error />}>
                <Homepage />
              </ErrorBoundary>
            }
          />

          <Route
            path="country/:countryName"
            element={
              <ErrorBoundary fallback={() => <Error />}>
                <CountryDetails />
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
