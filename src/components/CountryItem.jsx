import { Show } from "rc-extended";
import { useSignalValue } from "rc-extended/store";
import { darkMode } from "@/lib/glob";
import { Link } from "react-router-dom";

function CountryItem({ country }) {
  const $darkMode = useSignalValue(darkMode)
  return (
    <Link
      key={country.cca3}
      className={`w-[26.4rem]   shadow-country-sh rounded-lg  cursor-pointer   ${
        !$darkMode ? "bg-white" : "bg-dark-el-bg"
      } dark:bg-dark-el-bg`}
      to={`country/${country.cca3}`}
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="h-[16rem] w-full object-cover"
      />
      <h2 className="text-[1.8rem] font-extrabold leading-[2.6rem] pt-10 px-10 pb-6">
        {country.name.common}
      </h2>
      <div className="px-10 flex flex-col gap-2 pb-20">
        <h3 className="text-[1.4rem] font-semibold leading-[1.6rem]">
          Population:{" "}
          <span className=" font-light">
            {country.population.toLocaleString()}
          </span>
        </h3>
        <h3 className="text-[1.4rem] font-semibold leading-[1.6rem]">
          Region: <span className=" font-light">{country.region}</span>
        </h3>
        <h3 className="text-[1.4rem] font-semibold leading-[1.6rem]">
          Capital:{" "}
          <span className=" font-light">
            <Show when={country.capital?.[0]} fallback="No Capital">
              {country.capital?.[0]}
            </Show>
          </span>
        </h3>
      </div>
    </Link>
  );
}

export default CountryItem;
