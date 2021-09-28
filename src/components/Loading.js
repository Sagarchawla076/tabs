import React from "react";

const Loading = ({ loadingText }) => {
  return (
    <div className="ui segment loading">
      <div className="ui active dimmer">
        <div className="ui text loader">{loadingText}</div>
      </div>
    </div>
  );
};
Loading.defaultProps = {
  loadingText: "Loading...",
};
export default Loading;
