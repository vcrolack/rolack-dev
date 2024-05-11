import React from "react";

export const Message = ({ msg, fontColor }) => {
  let styles = {
    textAlign: "center",
    color: fontColor,
    fontWeight: "bold",
  };

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};
