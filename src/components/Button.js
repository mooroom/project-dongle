import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  padding: 1rem 3rem;


  font-size: 1.3rem;
  font-weight: bold;

  ${(props) => {
    const width = props.width;
    return css`
      width: ${width};
    `
  }}


  ${(props) => {
    const color = props.color;
    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, color)};
      }
      &:active {
        background: ${darken(0.1, color)};
      }
    `;
  }}

  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color: "#55129E",
};

export default Button;
