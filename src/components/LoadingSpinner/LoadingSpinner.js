import React from "react";
import loadingSpinner from "../../assets/images/loading.gif";

function LoadingSpinner() {
  return (
    <div>
      <img
        style={{ display: "inline-block", width: "50px", background: "none" }}
        src={loadingSpinner}
        alt=""
      />
    </div>
  );
}

export default LoadingSpinner;
