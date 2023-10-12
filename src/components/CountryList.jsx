import CountryItem from "./CountryItem";

function CountryList({ countries, darkMode }) {
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
