/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
const MenuItem = ({ item }) => {
  return (
    <div
      css={css`
        margin-top: 6px;
      `}
    >
      <img src={item.icon} alt={"svg0"} width="25px" height="25px"></img>

      <p
        css={css`
          letter-spacing: 0.3px;
          font-size: 21px;
          color: rgba(51, 57, 68, 0.75);
          display: inline-block;
          vertical-align: -4px;
          margin-left: 30px;
        `}
      >
        {item.name}
      </p>
    </div>
  );
};

export default MenuItem;