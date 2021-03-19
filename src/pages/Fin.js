import React from "react";

// components
import Container from "../components/Container";
import { ReactComponent as HomeIcon } from "../asset/img/icon_home.svg";
import { ReactComponent as ReplayIcon } from "../asset/img/icon_replay.svg";
import { ReactComponent as SurveyIcon } from "../asset/img/icon_survey.svg";

// packages
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    padding: 1rem 0 0 0;
  }

  a {
    width: initial;
  }

  & + & {
    padding-top: 2.5rem;
  }
`;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
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

  & > * {
    width: 30px;
    height: 30px;
  }
`;

function Fin(props) {
  return (
    <Container flex background="#55129E" height="100vh">
      <ItemBlock>
        <Link to="/learn1">
          <IconBlock color="white">
            <ReplayIcon fill="#55119e" />
          </IconBlock>
        </Link>
        <h2>다시하기</h2>
      </ItemBlock>
      <ItemBlock>
        <Link to="#">
          <IconBlock color="#FFEA00">
            <SurveyIcon fill="#55119e" />
          </IconBlock>
        </Link>
        <h2>설문조사</h2>
      </ItemBlock>
      <ItemBlock>
        <Link to="/">
          <IconBlock color="#FFEA00">
            <HomeIcon fill="#55119e" />
          </IconBlock>
        </Link>
        <h2>홈으로</h2>
      </ItemBlock>
    </Container>
  );
}

export default Fin;
