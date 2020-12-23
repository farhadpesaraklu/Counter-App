import React from "react";
import Button from "react-bootstrap/Button";
import { CounterSpan, SpanWithNumber, CounterContainer } from "./StyledComponents";

export default function Counter({ onInc, onDec, value, onDelete }) {
  return (
    <CounterContainer >
      {!value ? (
        <CounterSpan>{!value ? "Zero" : value}</CounterSpan>
      ) : (
        <SpanWithNumber>{!value ? "Zero" : value}</SpanWithNumber>
      )}
      <Button
        variant="secondary"
        style={{ margin: ".5rem .25rem" }}
        onClick={onInc}
      >
        <i className="fas fa-plus-circle"></i>
      </Button>
      <Button
        variant="info"
        style={{ margin: ".5rem .25rem" }}
        disabled={!value}
        onClick={onDec}
      >
        <i className="fa fa-minus-circle" aria-hidden="true"></i>
      </Button>
      <Button
       variant="danger"
        style={{ margin: ".5rem .25rem" }}
        onClick={onDelete}
        >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </Button>
    </CounterContainer>
  );
}
