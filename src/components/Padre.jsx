import React from 'react'

const Padre = props => {
    return (
        <div>
            <header>Header</header>
            {props.children}
            <footer>Footer</footer>
        </div>
    )
}

export default Padre
