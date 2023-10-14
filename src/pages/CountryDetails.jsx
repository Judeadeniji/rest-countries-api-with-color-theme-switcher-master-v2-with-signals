import { useSignalValue } from "rc-extended/store";
import { darkMode } from "@/lib/glob";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import CountryDetail from "../components/CountryDetail";

function CountryDetails() {
  const { countryName } = useParams();
  const $darkMode = useSignalValue(darkMode)
  return (
    <section
      className={`min-h-screen  ${
        !$darkMode ? "bg-white text-dark-text" : "bg-dark-bg text-white"
      } dark:bg-dark-bg dark:text-white`}
    >
      <Header />
      <BackBtn />

      <CountryDetail countryName={countryName} key={countryName} />
    </section>
  );
}

export default CountryDetails;
