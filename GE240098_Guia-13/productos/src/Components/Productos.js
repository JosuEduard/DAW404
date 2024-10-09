import React, { Component } from 'react';
// agregamos referencia al archivo json
import ListaProductos from '../data/productos.json';
import Card from './card';

class Productos extends Component {
  render() {
    // Recorrido del json para mostrar los datos en componente Card
    return (
      <div className="row">
        {ListaProductos.map((ProductosDetalle, index) => (
          <Card
            key={index} // Asegúrate de agregar una key única
            MarcaProducto={ProductosDetalle.marca} // Acceso directo a marca, nombre y presentación
            NombreProducto={ProductosDetalle.nombre}
            PresentacionProducto={ProductosDetalle.presentacion}
          />
        ))}
      </div>
    );
  }
}

export default Productos;