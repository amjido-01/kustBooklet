import React from "react";


export default function ErrorPage() {

  return (
    <div id="error-page" className="error-page flex justify-center items-center text-center mt-52">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <h1>404</h1>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
      </div>
    </div>
  );
}