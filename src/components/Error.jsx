import ErrorImg from "/error.svg";

// we could take an error prop
function Error({ error }) {
  // you can do something nice based on error.message 😉
  
  return (
    <div className="flex justify-center flex-col items-center w-full h-full">
      <h3 className="text-[3rem] px-8 sma:text-[2rem] text-center">
        Something went wrong. Try again Later
      </h3>
      <img src={ErrorImg} alt="error page" className="w-[80rem]" />
    </div>
  );
}

export default Error;
