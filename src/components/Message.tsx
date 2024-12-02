import React from "react";

interface MessageProps {
  msg: string;
  fontColor: string;
}

export const Message: React.FC<MessageProps> = ({ msg, fontColor }) => {
  let styles: React.CSSProperties = {
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
