import React from "react";

// packages
import { createGlobalStyle, css } from "styled-components";

const BodyBlock = createGlobalStyle`
    body {
        ${(props) => {
          const color = props.color;
          const image = props.image;

          return css`
            background-color: ${color};
            background-image: url(${image});
          `;
        }}
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

function BodyBackground({ ...rest }) {
  return <BodyBlock {...rest} />;
}

export default BodyBackground;
