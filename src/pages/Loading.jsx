import React from "react";
import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loading;
