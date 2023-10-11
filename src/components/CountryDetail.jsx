import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function CountryDetail({
  countryName,
  countryInfo,
  dispatch,
  loading,
  darkMode,
}) {
  useEffect(() => {
    async function fetchCountryDetails() {
      try {
        dispatch({ type: "isLoading", payload: true });

        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryName}`
        );
        const data = await res.json();
        dispatch({ type: "setCountryInfo", payload: data });
        // dispatch({ type: "isLoading", payload: false });
      } catch (err) {
        console.log(err);
        dispatch({ type: "isLoading", payload: false });
      } finally {
        dispatch({ type: "isLoading", payload: false });
      }
    }
    fetchCountryDetails();
  }, [countryName, dispatch]);
  const country = countryInfo[0];
  if (!country) return;
  if (loading) {
    return <Spinner />;
  }

  const nativeNames = country?.name?.nativeName
    ? Object.values(country.name.nativeName)
        .map((name) => name.common)
        .join(", ")
    : `No Native name for ${country.name.common}`;

  const currName = country?.currencies
    ? Object.values(country.currencies)?.[0]?.name
    : `No Currency for ${country.name.common}`;

  const currSymb = country?.currencies
    ? Object.values(country.currencies)[0]?.symbol
    : "";

  const languages = country?.languages
    ? Object.values(country.languages).sort().join(", ")
    : `No languages for ${country.name.common}`;
  return (
    <section className="grid grid-cols-2 px-32 items-center mt-32 med:grid-cols-1 med:mt-20 sma:px-8 pb-12 ">
      <div className="w-[55.9715rem] max:w-[40.9715rem] med:w-[31.9875rem] justify-items-center xsm:w-full">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-11">
        <h2 className="text-[3.2rem] font-extrabold med:pt-16 sma:text-[2.2rem]">
          {country.name.common}
        </h2>
        <div className="flex justify-between med:flex-col med:gap-14">
          <div>
            <Items name={"Native Name"} span={nativeNames} />
            <Items
              name={" Population"}
              span={country.population.toLocaleString()}
            />
            <Items name="Region" span={country.region} />
            <Items name="Sub Region" span={country.subregion} />
            <Items name="Capital" span={country.capital} />
          </div>
          <div>
            <Items name="Top Level Domain" span={country.tld} />
            <Items name="Currencies" span={`${currName}, ${currSymb}`} />
            <Items name="Languages" span={languages} />
          </div>
        </div>
        <div className="flex gap-6 mt-20 med:flex-col med:mt-0">
          <h3 className="text-[1.6rem] font-semibold leading-[2.4rem]">
            Border Countries:
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            {country.borders?.length > 0 ? (
              country.borders.map((border) => (
                <Border
                  countryCode={border}
                  key={border}
                  country={country.name.common}
                  darkMode={darkMode}
                />
              ))
            ) : (
              <p className="text-[1.4rem] font-light py-2 px-11 bg-dark-el-bg rounded-[0.2rem] shadow-border-sh">
                No borders for {country.name.common}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Items({ name, span }) {
  return (
    <h3 className="text-[1.6rem] font-semibold leading-[3.2rem] sma:text-[1.4rem]">
      {name}: <span className="font-light">{span ? span : `No ${name}`}</span>
    </h3>
  );
}

function Border({ countryCode, darkMode }) {
  const [borderName, setBorderName] = useState("");
  useEffect(() => {
    async function fetchBorderName() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const data = await res.json();
        const name = data[0].name.common;
        setBorderName(name);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBorderName();
  }, [countryCode]);

  return (
    <Link
      className={`text-[1.4rem] font-light py-2 px-11  rounded-[0.2rem] shadow-border-sh cursor-pointer   ${
        darkMode
          ? "bg-white border-0 border-solid border-[#979797]"
          : "bg-dark-el-bg"
      } sma:text-[1.2rem] dark:bg-dark-el-bg`}
      to={`/country/${countryCode}`}
    >
      {borderName}
    </Link>
  );
}

export default CountryDetail;
