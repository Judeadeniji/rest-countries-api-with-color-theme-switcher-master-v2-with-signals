import CountryList from "../components/CountryList";
import Error from "../components/Error";
import FilteredSection from "../components/FilteredSection";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function Homepage({
  loading,
  countries,
  region,
  onChangeRegion,
  onSearchCountry,
  country,
  errorPage,
  onToggleDarkMode,
  darkMode,
}) {
  return (
    <div
      className={`font-sans font-normal min-h-screen transition-all duration-300 ${
        darkMode ? "bg-white-bg text-dark-text " : "bg-dark-bg text-white"
      }`}
    >
      <Header onToggleDarkMode={onToggleDarkMode} darkMode={darkMode} />
      <main>
        <FilteredSection
          region={region}
          onChangeRegion={onChangeRegion}
          onSearchCountry={onSearchCountry}
          country={country}
          darkMode={darkMode}
        />

        {loading ? (
          <Spinner />
        ) : errorPage ? (
          <Error />
        ) : (
          <CountryList countries={countries} darkMode={darkMode} />
        )}
      </main>
    </div>
  );
}

export default Homepage;
