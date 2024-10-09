import React, { Component } from 'react';
import PropTypes from 'prop-types';

//estructura de datos a recibir para opciones
export const opciones = {
  texto: PropTypes.string,
  valor: PropTypes.string
};

class Selects extends Component {
  constructor(props) {
    //recibir datos para componentes
    super(props);
    //estado para capturar valor del input
    this.state = { ValorSelect: '' }
    this.Cambiar = this.Cambiar.bind(this);
    this.MostrarValor = this.MostrarValor.bind(this);
  }
  //funciones para capturar datos del componente padre
  Cambiar(e) {
    this.setState({ ValorSelect: e.target.value });
  }
  //Para mostrar datos en componente padre
  MostrarValor() {
    return this.state.ValorSelect;
  }
  render() {
    return (
      <div>
        <label>{this.props.textlabel}</label>
        <select value={this.state.ValorSelect} onChange={this.Cambiar}> <option value="" disabled>seleccione</option>
          {this.props.Options.map((opciones) =>
            <option value={opciones.valor}>{opciones.texto}</option>)}
        </select>
      </div>);
  }
}
Selects.protoType = {
  textlabel: PropTypes.string, Options: PropTypes.arrayOf(opciones)
}
export default Selects;

