import CountryItem from "./CountryItem";
import Error from "./Error";

function CountryList({ countries, darkMode }) {
  // console.log(errorPage);
  if (countries.status === 404) return <Error />;
  return (
    <div className="flex flex-wrap gap-24 px-32 justify-center sma:px-8 sma:gap-12 pb-12">
      {countries.map((country) => (
        // console.log(country)
        <CountryItem country={country} key={country.cca3} darkMode={darkMode} />
      ))}
    </div>
  );
}

export default CountryList;
