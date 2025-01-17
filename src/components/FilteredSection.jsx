import { useSignalValue } from "rc-extended/store";
import { darkMode, useApp } from "@/lib/glob";
import SearchIcon from "/search.svg";
import SearchWhiteIcon from "/search-white.svg";

function FilteredSection() {
  const $darkMode = useSignalValue(darkMode)
  const { country, region, onRegionChange, onCountryChange } = useApp()
  return (
    <section className="flex justify-between px-32 mb-20 med:flex-col med:gap-20 sma:px-8 sma:mb-10">
      <div
        className={`rounded-lg py-7 px-12 flex items-center gap-8 w-full max-w-[48rem] shadow-filter-sh  ${!$darkMode ? "bg-white" : "bg-dark-el-bg"} dark:bg-dark-el-bg`}
      >
          <img src={!$darkMode ? SearchWhiteIcon : SearchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search for a country…"
          className="text-[1.4rem] leading-8 bg-transparent border-0 border-transparent focus:outline-none w-full"
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
        />
      </div>
      <select
        className={`bg-dark-el-bg py-7 px-10 leading-8 text-[1.4rem] rounded-lg shadow-filter-sh border-transparent focus:outline-none  ${!$darkMode ? "bg-white" : "bg-dark-el-bg"
        } med:self-start med:w-[20rem] dark:bg-dark-el-bg`}
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option disabled value="">
          Filter by Region
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
}

export default FilteredSection;
