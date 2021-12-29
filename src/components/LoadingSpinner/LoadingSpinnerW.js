import React from "react";
import loadingSpinnerW from "../../assets/images/loadingW.gif";

function LoadingSpinner() {
  return (
    <div>
      <img
        style={{ display: "block", width: "50px", background: "none" }}
        src={loadingSpinnerW}
        alt=""
      />
    </div>
  );
}

export default LoadingSpinner;
