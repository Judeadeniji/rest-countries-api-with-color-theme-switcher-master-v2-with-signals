import { useSignalValue } from "rc-extended/store"
import { darkMode } from "@/lib/glob"
import { useNavigate } from "react-router-dom";
import Back from "/back.svg";
import BackWhite from "/back-white.svg";

function BackBtn() {
  const navigate = useNavigate();
  const $darkMode = useSignalValue(darkMode)
  return (
    <button
      className={`rounded-[0.6rem] shadow-back-sh py-4 px-12 flex items-center gap-4 ml-32 ${!$darkMode ? "bg-white" : "bg-dark-el-bg"} sma:ml-8 dark:bg-dark-el-bg`}
      onClick={() => navigate(-1)}
    >
      {!$darkMode ? (
        <img src={BackWhite} alt="back" />
      ) : (
        <img src={Back} alt="back" />
      )}

      <p className="text-[1.6rem] font-light leading-8">Back</p>
    </button>
  );
}

export default BackBtn;
