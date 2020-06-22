import React from "react";
import styled from "styled-components";

export default ({ toggle, setToggle }) => (
  <NavIcon toggle={toggle} onClick={() => setToggle(!toggle)}>
    <div />
  </NavIcon>
);

const NavIcon = styled.div`
  grid-column: 1;
  justify-self: end;
  cursor: pointer;
  width: 30px;
  &:after,
  &:before,
  div {
    background-color: black;
    border-radius: 5px;
    content: "";
    display: block;
    height: 3px;
    margin: 3px 0;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: ${props =>
      props.toggle ? `translateY(6px) rotate(45deg)` : `none`};
  }

  &::after {
    transform: ${props =>
      props.toggle ? `translateY(-6px) rotate(-45deg)` : `none`};
  }

  div {
    transform: ${props =>
      props.toggle ? `translateX(-50px) scaleX(0)` : `none`};
  }

  @media only screen and (min-width: 990px) {
    display: none;
  }
`;
