import React from "react";

const Header = ({ number, data, increment }) => {
  console.log("Header Component Re-rendered");
  return (
    <div>
      Header - {number}
      <br /> <br />
      <code>{JSON.stringify(data)}</code>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default React.memo(Header);
