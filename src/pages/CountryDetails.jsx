import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import CountryDetail from "../components/CountryDetail";

function CountryDetails({
  dispatch,
  countryInfo,
  loading,
  darkMode,
  onToggleDarkMode,
}) {
  const { countryName } = useParams();
  return (
    <section
      className={`min-h-screen  ${
        darkMode ? "bg-white text-dark-text" : "bg-dark-bg text-white"
      }`}
    >
      <Header darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      <BackBtn darkMode={darkMode} />

      <CountryDetail
        countryName={countryName}
        dispatch={dispatch}
        countryInfo={countryInfo}
        loading={loading}
        key={countryName}
        darkMode={darkMode}
      />
    </section>
  );
}

export default CountryDetails;
