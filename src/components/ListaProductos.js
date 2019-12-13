import React, { Component, Fragment } from 'react';

import Producto from './Producto';
import { throwStatement } from '@babel/types';

class ListaProductos extends Component {

    state = {
        productos : []}


    componentDidMount() { /*3 Cuando todo esta listo */
        console.log(1);
        
        this.setState ({
            productos : [
                { id : 1 , nombre : 'Camisa 1', precio : 30 },
                { id : 2 , nombre : 'Camisa 2', precio : 30 },
                { id : 3 , nombre : 'Camisa 3', precio : 30 },
                { id : 4 , nombre : 'Camisa 4', precio : 30 }
            ]
        })
    }
    

    componentWillMount() { /* 1 Antes de que el componente se cargue*/
        console.log(2);
    }

    componentWillUpdate() { /*cuando se actualiza un componente y luego el render */
        console.log(3);
    }

    componentWillUnmount() {
        console.log(4);
    }

    render() {
        console.log(5); /*2 cargando componente*/
        const {productos} = this.state;
        //console.log(productos);
        
        
        return (
            <Fragment>
                <h1>Lista de productos</h1>
                {productos.map(producto =>(
                    <Producto 
                        key = {producto.id}
                        producto = {producto}
                    />
                ))}
            </Fragment>
        );
    }
}

export default ListaProductos;