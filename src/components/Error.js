import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h2>OOps !!</h2>
      <h5>Something went wrong !!</h5>
      <h6>
        {err.status}:{err.statusText}
      </h6>
    </>
  );
};

export default Error;
