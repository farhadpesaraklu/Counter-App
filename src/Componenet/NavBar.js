import React from "react";
import { NavBarDiv, NavBarContainer, Span } from "./StyledComponents";

export default function NavBar({value}) {
  return (
    <NavBarContainer>
      <NavBarDiv>
        <i className="fas fa-shopping-cart" style={{margin:".5rem"}}></i>
        <Span>{value}</Span>
        <label>Items</label>
      </NavBarDiv>
    </NavBarContainer>
  );
}
