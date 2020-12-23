import React from "react";
import Button from "react-bootstrap/Button";
import { TopContainer } from "./StyledComponents";

export default function TopButtons({onReset, onRefresh, value}) {
 

  return (
    <TopContainer>
      <Button
        variant="success"
        onClick={onReset}
        style={{ margin: ".5rem" }}
      >
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </Button>
      <Button
        variant="primary"
        onClick={onRefresh}
        style={{ margin: ".5rem" }}
        disabled={value}
      >
        <i className="fas fa-recycle"></i>
      </Button>
    </TopContainer>
  );
}
