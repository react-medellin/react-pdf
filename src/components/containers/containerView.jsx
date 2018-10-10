import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class containerView extends Component {
divStyle = {
     /*  Contenido  */
    backgroundImage: '#1D1E22',
    /*  Tamaño   */
    width:'595px',
    height: '100vh',
    minWidth:'400px', 
    minHeight:'98vh',
    margin: '8px',
    /* Forma  */
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    resize: 'both',
    display: 'block',
};
    render() {
        return (
            <div tyle={this.divStyle}>
                Hola
            </div>
        );
    }
}

// containerView.propTypes = {

// };

export default containerView;