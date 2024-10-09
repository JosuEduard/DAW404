import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  constructor(props) {
    //recibir datos para componentes
    super(props);
    //estado para capturar valores
    this.state = { textovalor: '' }
    //haciendo escuchadores de eventos a traves de bind 
    this.Cambiar=this.Cambiar.bind(this);
    this.MostrarValor = this.MostrarValor.bind(this);
  }

  //funciones para capturar datos en componente padre
  Cambiar(e) {
    this.setState({ textovalor: e.target.value });
  }

  //Para mostrarlo en componente padre 
  MostrarValor() {
    return this.state.textovalor;
  }

  render() {
    //creacion de etiqueta input generica reutilizable en todo el proyecto
    return (
      <div>
        <label>{this.props.textolabel}</label>
        <input type={this.props.tipoInput} value={this.state.textovalor} onChange={this.Cambiar} required={this.props.esrequerido} />
      </div>);
  }
}

//variables para trabajar con datos 
Inputs.protoType = {
  textolabel: PropTypes.string, tipoInput: PropTypes.string,
  esrequerido: PropTypes.bool
}
export default Inputs;
