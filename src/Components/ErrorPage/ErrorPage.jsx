import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

 const error = useRouteError();
 console.error(error)

  return (
    <div>
      <h2>Oops</h2>
      <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
          <h3>Page not pound</h3>
          <p>GO back where you from</p>
          <Link to='/'>Home</Link>
        </div>
      }
    </div>
  );
};

export default ErrorPage;