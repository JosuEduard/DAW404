import React, { Component } from 'react';
import ProtoTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card col-sm-4">
        <h5 class="card-header"> {this.props.MarcaProducto} </h5>
        <div class="card-body">
          <h5 class="card-title">{this.props.NombreProducto} </h5> <p class="card-text">{this.props.PresentacionProducto}</p>
        </div>
      </div>
    );
  }
}
Card.protoType = {
  MarcaProducto: ProtoTypes.string, NombreProducto: ProtoTypes.string, PresentacionProducto: ProtoTypes.string
}
export default Card;