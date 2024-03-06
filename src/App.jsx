import React from "react";
import ParamEditor from "./SelSupEditor";

function App() {
  const params = [
    {
      id: 1,
      name: "Назначение",
      type: "string",
    },
    {
      id: 2,
      name: "Длина",
      type: "string",
    },
  ];

  const model = {
    paramValues: [
      {
        paramId: 1,
        value: "повседневное",
      },
      {
        paramId: 2,
        value: "макси",
      },
    ],
    colors: [
      {
        id: 1,
        name: "red",
      },
      {
        id: 2,
        name: "blue",
      },
    ],
  };

  return (
    <div className="App">
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
