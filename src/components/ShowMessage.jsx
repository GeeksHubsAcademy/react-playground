import React, { Component, useState } from 'react';

// const ShowMessage = (props) => {
//     const [color, setColor] = useState('');
//     return <div
//         className="message"
//         style={{
//             color,
//             backgroundColor:props.bgColor
//         }}
//         onClick={()=>setColor('blue')}
//         onDoubleClick={()=>setColor('yellow')}
//         onMouseEnter={()=>setColor('red')}
//         onMouseLeave={()=>setColor('green')}
//     >Mensajito</div>
// }

class ShowMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }
    }
    render() {
        return <div
            className="message"
            style={{
                color: this.state.color,
                backgroundColor: this.props.bgColor
            }}
            onClick={() => this.setState({ color: 'blue' })}
            onDoubleClick={() => this.setState({ color: 'yellow' })}
            onMouseEnter={() => this.setState({ color: 'red' })}
            onMouseLeave={() => this.setState({ color: 'green' })}
        >Mensajito</div>
    }

}
export default ShowMessage;
