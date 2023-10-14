import { Switch, Match } from "rc-extended";
import { useSignalValue } from "rc-extended/store";
import { darkMode, useApp } from "@/lib/glob";
import CountryList from "../components/CountryList";
import Error from "../components/Error";
import FilteredSection from "../components/FilteredSection";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function Homepage() {
  const $darkMode = useSignalValue(darkMode)
  const { loading, countries, error } = useApp()
  
  return (
    <div
      className={`font-sans font-normal min-h-screen  ${!$darkMode ? "bg-white-bg text-dark-text " : "bg-dark-bg text-white"} dark:bg-dark-bg dark:text-white`}>
      <Header />
      <main>
        <FilteredSection />

        <Switch fallback={<CountryList countries={countries} />}>
          <Match when={loading}>
            <Spinner />
          </Match>
          <Match when={error}>
            <Error />
          </Match>
        </Switch>
      </main>
    </div>
  );
}

export default Homepage;
