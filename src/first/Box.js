import React from "react";

import { Link } from "react-router-dom";

function Box({ linkTo, name }) {
  return (
    <div>
      <Link to={linkTo} style={{ padding: 5 }}>
        {name}
      </Link>
    </div>
  );
}

export default Box;
