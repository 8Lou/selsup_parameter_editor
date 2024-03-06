import React from "react";

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
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  model: Model;
  selectedColorId: number | null;
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      model: props.model,
      selectedColorId: null,
    };
  }

  handleChange = (paramId: number, value: string) => {
    const updatedParamValues = this.state.model.paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );
    this.setState({
      model: { ...this.state.model, paramValues: updatedParamValues },
    });
  };

  handleColorChange = (colorId: number) => {
    this.setState({ selectedColorId: colorId });
  };

  getModel = (): Model => {
    return { ...this.state.model };
  };

  render() {
    const { params, model } = this.props;
    const { selectedColorId } = this.state;

    return (
      <div>
        <h2>SelSup Editor</h2>
        {params &&
          params.map((param) => (
            <div key={param.id}>
              <label>{param.name}: </label>
              <input
                type="text"
                value={
                  model.paramValues.find((p) => p.paramId === param.id)
                    ?.value || ""
                }
                onChange={(e) => this.handleChange(param.id, e.target.value)}
              />
            </div>
          ))}
        {model && model.colors && (
          <div>
            <h3>Выберите цвет:</h3>
            {model.colors.map((color) => (
              <button
                key={color.id}
                style={{
                  backgroundColor: color.name,
                  color: "white",
                  padding: "5px",
                  margin: "5px",
                  cursor: "pointer",
                }}
                onClick={() => this.handleColorChange(color.id)}
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
      </div>
    );
  }
}

export default ParamEditor;
