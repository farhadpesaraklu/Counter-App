import React, { useState } from "react";
import NavBar from "./Componenet/NavBar";
import TopButtons from "./Componenet/TopButtons";
import Counter from "./Componenet/Counter";


const initialState = [
  { id: "1", value: 0 },
  { id: "2", value: 0 },
  { id: "3", value: 0 },
  { id: "4", value: 0 },
];

export default function App() {

  const [state, setState] = useState(initialState);

  function handleChange(item, value) {
    const index = state.findIndex((x) => x.id === item.id);
    const copyState = [...state];
    copyState.splice(index, 1, {
      ...state[index],
      value: state[index].value + value,
    });
    setState(copyState);
  }

  function handleDelete(item) {
    const index = state.findIndex((x) => x.id === item.id);
    const newState = [...state];
    newState.splice(index, 1);
    setState(newState);
  }
  function handleReset() {
    setState(state.map((item) => ({ ...item, value: 0 })));
  }
  function handleRefresh() {
    setState(initialState);
  }

  const refreshAble = state.length;
  const numberOfItems = state.filter((item) => item.value > 0).length;
  return (
    <div>
      <NavBar value={numberOfItems} />

      <TopButtons
        onReset={handleReset}
        onRefresh={handleRefresh}
        value={refreshAble}
      />

      {state.map((item) => {
        return (
          <Counter
            key={item.id}
            onInc={() => handleChange(item, 1)}
            onDec={() => handleChange(item, -1)}
            onDelete={() => handleDelete(item)}
            value={item.value}
          />
        );
      })}
    </div>
  );
}
