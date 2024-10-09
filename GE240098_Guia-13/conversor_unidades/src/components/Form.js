import React, { Component } from 'react';
import Selects from './selects';
import Inputs from './input';
import './Form.css';

class App extends Component {
  constructor() {
    super();
    this.conversion = this.conversion.bind(this);
    this.state = { resultado: '' }
  }
  render() {
    //valores para el arreglo de objetos a nuestra lista 
    const medidas = [
      { valor: 'cm', texto: 'Centimetro' },
      { valor: 'm', texto: 'Metro' },
      { valor: 'mm', texto: 'Milimetro' },
      { valor: 'km', texto: 'Kilometro' }
    ];
    return (
      <div className="form">
        <h2>Conversor de Longitud</h2>
        <Inputs tipoInput="text" textolabel="Valor:" ref="numero" esrequerido={true} />
        <Selects textlabel="Longitud Origen:" Options={medidas} ref="uni1" />
        <Selects textlabel="Longitud Destino:" Options={medidas} ref="uni2" />

        <label className="resultado">{this.state.resultado}</label>
        <button onClick={this.conversion}>Conversion</button>
      </div>
    );
  }

  conversion(e) {
    let u1, u2, v, conversion;
    v = this.refs.numero.MostrarValor();
    u1 = this.refs.uni1.MostrarValor();
    u2 = this.refs.uni2.MostrarValor();
    switch (u1) {
      case "cm":
        switch (u2) {
          case "m":
            conversion = parseFloat(v) / 100;
            break;
          case "mm":
            conversion = parseFloat(v) * 10;
            break;
          case "km":
            conversion = parseFloat(v) / 100000;
            break;
          default:
            this.setState({
              resultado: "Su conversion es a la misma unidad de origen"
            })
            break;
        }
        break;
      case "m":
        switch (u2) {
          case "cm":
            conversion = parseFloat(v) * 100;
            break;
          case "mm":
            conversion = parseFloat(v) * 1000;
            break;
          case "km":
            conversion = parseFloat(v) / 1000;
            break;
          default:
            this.setState({
              resultado: "Su conversion es a la misma unidad de origen"
            })
            break;
        }
        break;
      case "mm":
        switch (u2) {
          case "cm":
            conversion = parseFloat(v) / 10;
            break;
          case "m":
            conversion = parseFloat(v) / 1000;
            break;
          case "km":
            conversion = parseFloat(v) / 0.000001;
            break;
          default:
            this.setState({
              resultado: "Su conversion es a la misma unidad de origen"
            })
            break;
        }
        break;
      case "km":
        switch (u2) {
          case "cm":
            conversion = parseFloat(v) * 100000
            break;
          case "mm":
            conversion = parseFloat(v) * 1000000
            break;
          case "m":
            conversion = parseFloat(v) * 1000
            break;
          default:
            this.setState({
              resultado: "Su conversion es a la misma unidad de origen"
            })
            break;
        }
        break;
      default:
        this.setState({
          resultado: "Seleccione unidades de longitud"
        })
        break;
    }
    if (conversion !== undefined) {
      this.setState({
        resultado: "Su conversion de  " + u1 + " a " + u2 + " es:" + conversion + " " + u2
      })
    }
  }
}
export default App;