import React from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
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

class ParamEditor extends React.Component<Props, State> {
  public getModel(): Model {
    return this.state.model;
  }

  render() {
    const { params, model } = this.props;

    return (
      <div>
        <h2>SelSup Editor</h2>
        {params.map((param) => (
          <div key={param.id}>
            <label>{param.name}: </label>
            <input
              type="text"
              value={model.paramValues.find((p) => p.paramId === param.id)?.value || ''}
              onChange={(e) => this.handleChange(param.id, e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }
}

// ColorPicker компонент и определения типов данных здесь

export default ParamEditor;
