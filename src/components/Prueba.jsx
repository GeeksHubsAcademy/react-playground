import React, { Component, useState } from 'react'

// class Prueba extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: 
//         }
//     }
//     render() {
//         return <div className="user">
//             <h2 className="name">
//                 {this.state.user.name}
//             </h2>
//         </div>
//     }
// }

const Prueba = () => {
    let initialUser = null;
    try {
        initialUser = JSON.parse(localStorage.getItem('user'))
    } catch (error) {
        console.error(error)
    }
    const [user, setUser] = useState(initialUser);
    return <div className="user">
        <h2 className="name">
            {user.name}
        </h2>
        <span className="email">
            {user.email}
        </span>
    </div>
}

export default Prueba
