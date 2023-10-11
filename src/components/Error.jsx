import ErrorImg from "/error.svg";

function Error() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-[3rem]">No country was found. Try again Later</h3>
      <img src={ErrorImg} alt="error page" className="w-[80rem]" />
    </div>
  );
}

export default Error;
