import React, { useState } from "react";

interface Param {
  id: number;
  name: string;
  type: "string";
}

interface Color {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string | undefined;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor = ({ params, model }: Props) => {
  const [paramValues, setParamValues] = useState(model.paramValues);
  const [selectedColorId, setSelectedColorId] = useState(null);

  const handleChange = (paramId, value) => {
    const updatedParamValues = paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );
    setParamValues(updatedParamValues);
  };

  const handleColorChange = (colorId) => {
    setSelectedColorId(colorId);
  };

  const getModel = () => {
    return { ...model, paramValues };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue" }}>SelSup Editor</h2>
      {params &&
        params.map((param) => (
          <div
            key={param.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label style={{ fontWeight: "bold", width: "100px" }}>
              {param.name}:{" "}
            </label>
            <input
              type="text"
              value={
                paramValues.find((p) => p.paramId === param.id)?.value || ""
              }
              onChange={(e) => handleChange(param.id, e.target.value)}
              style={{
                padding: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        ))}
      {model && model.colors && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px",
            margin: "15px",
          }}
        >
          <h3 style={{ color: "blue" }}>Выберите цвет:</h3>
          {model.colors.map((color) => (
            <button
              key={color.id}
              style={{
                backgroundColor: color.name,
                color: "white",
                padding: "15px",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "10px",
                border: "none",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                transform: "translateY(0)",
                transition: "transform 0.3s",
              }}
              onClick={() => handleColorChange(color.id)}
              onMouseDown={(e) => {
                e.target.style.transform = "translateY(1px)";
                e.target.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.3)";
              }}
              onMouseUp={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
              }}
            >
              {color.name}
            </button>
          ))}
          <p>
            Выбранный цвет:{" "}
            {model.colors.find((c) => c.id === selectedColorId)?.name ||
              "Не выбрано"}
          </p>
        </div>
      )}
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "15px",
          marginTop: "10px",
          cursor: "pointer",
          borderRadius: "10px",
          border: "none",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          transform: "translateY(0)",
          transition: "transform 0.3s",
        }}
        onClick={() => console.log(getModel())}
      >
        Получить модель
      </button>
    </div>
  );
};

export default ParamEditor;
