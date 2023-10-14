import { Show, For, useFetch } from "rc-extended";
import { useSignalValue, $signal, $effect } from "rc-extended/store";
import { darkMode } from "@/lib/glob";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Error from "@/components/Error"

function CountryDetail({ countryName }) {
  const { isPending, isFulfilled, isRejected, result, error } = useFetch(`https://restcountries.com/v3.1/alpha/${countryName}`);

  if (isPending) {
    return <Spinner />;
  }

  if (isRejected && error) {
    return <Error />
  }

  return (
    <Show when={result}>
      <Detail result={result} />
    </Show>
  );
}

function Detail({ result }) {
  const country = result[0];
  if (!country) return;

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
        <Show when={country.borders?.length > 0}>
          <div className="flex gap-6 mt-20 med:flex-col med:mt-0">
            <h3 className="text-[1.6rem] font-semibold leading-[2.4rem]">
              Border Countries:
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              <For each={country.borders}>
                <Border item="countryCode" />
              </For>
            </div>
          </div>
        </Show>
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

function Border({ countryCode }) {
  const $darkMode = useSignalValue(darkMode);
  const { isPending, isRejected, result, error } = useFetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  
  if (isRejected && error) {
    console.error(error);
    
    return <p>Something went wrong.</p>
  }
  
  if (true) {
    return (
      <div className={`h-10 w-24 animate-pulse rounded-[0.2rem] shadow-border-sh cursor-pointer ${!$darkMode ? "bg-white border-0 border-solid border-[#979797]" : "bg-dark-el-bg"} dark:bg-dark-el-bg`} />
    )
  }

  const name = result[0].name.common;
  return (
    <Link
      className={`text-[1.4rem] font-light py-2 px-11  rounded-[0.2rem] shadow-border-sh cursor-pointer ${
        !$darkMode
          ? "bg-white border-0 border-solid border-[#979797]"
          : "bg-dark-el-bg"
      } sma:text-[1.2rem] dark:bg-dark-el-bg`}
      to={`/country/${countryCode}`}
    >
      {name}
    </Link>
  );
}

export default CountryDetail;
