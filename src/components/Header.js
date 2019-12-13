// rsc
import React from 'react';

const Header = (props) => {

    console.log(props);
    return (

        

        <header>
            <h1>
                {props.titulo}
            </h1>
        </header>
    );
};

export default Header;