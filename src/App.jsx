import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useReducer } from "react";
import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";

const initialState = {
  countries: [],
  region: "all",
  country: "",
  apiUrl: "https://restcountries.com/v3.1/all",
  loading: false,
  errorPage: false,
  countryInfo: [],
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setCountries":
      return { ...state, countries: action.payload };
    case "isLoading":
      return { ...state, loading: action.payload };
    case "setRegion":
      if (action.payload === "all")
        return {
          ...state,
          country: "",
          region: action.payload,

          apiUrl: "https://restcountries.com/v3.1/all",
        };
      return {
        ...state,
        region: action.payload,
        country: "",

        apiUrl: `https://restcountries.com/v3.1/region/${action.payload}`,
      };

    case "newCountry":
      if (action.payload === "")
        return {
          ...state,
          country: action.payload,
          region: "all",
          apiUrl: "https://restcountries.com/v3.1/all",
        };

      return {
        ...state,
        region: "all",
        country: action.payload,
        apiUrl: `https://restcountries.com/v3.1/name/${action.payload}`,
      };

    case "setError":
      return {
        ...state,
        darkMode: state.darkMode,
        errorPage: action.payload,
      };
    case "setCountryInfo":
      return { ...state, countryInfo: action.payload };
    case "toggleDarkMode":
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    apiUrl,
    countries,
    loading,
    region,
    country,
    errorPage,
    countryInfo,
    darkMode,
  } = state;

  useEffect(() => {
    const controller = new AbortController();
    async function getCountries() {
      try {
        dispatch({ type: "isLoading", payload: true });

        const res = await fetch(apiUrl, { signal: controller.signal });
        const data = await res.json();
        if (data.length === 0) {
          dispatch({ type: "setError", payload: true });
        } else if (country) {
          const newData = data.filter((c) =>
            c.name.common.toLowerCase().startsWith(country.toLowerCase())
          );
          if (newData.length === 0)
            dispatch({ type: "setError", payload: true });
          dispatch({ type: "setCountries", payload: newData });
        } else {
          dispatch({ type: "setCountries", payload: data });
        }
        dispatch({ type: "isLoading", payload: false });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log("error!!!!!!!!!!!!!!!!!!!!!!!");
          dispatch({ type: "setError", payload: true });
          dispatch({ type: "isLoading", payload: false });
        }
      }
    }
    getCountries().catch((err) => {
      console.log(err);
      dispatch({ type: "setError", payload: true });
    });
    return function () {
      controller.abort();
    };
  }, [apiUrl, country]);

  const updateRegion = (newRegion) => {
    dispatch({ type: "setRegion", payload: newRegion });
    dispatch({ type: "setError", payload: false });
  };

  const searchCountry = (newCountry) => {
    dispatch({ type: "setError", payload: false });

    dispatch({ type: "newCountry", payload: newCountry });
  };

  const toggleDarkMode = () => {
    dispatch({ type: "toggleDarkMode" });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              loading={loading}
              countries={countries}
              region={region}
              onChangeRegion={updateRegion}
              onSearchCountry={searchCountry}
              country={country}
              errorPage={errorPage}
              onToggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="country/:countryName"
          element={
            <CountryDetails
              countryInfo={countryInfo}
              dispatch={dispatch}
              loading={loading}
              onToggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
