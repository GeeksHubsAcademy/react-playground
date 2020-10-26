import React, { Component, useEffect, useState } from 'react';
// class Counter extends Component {
//     constructor(props) {
//         super(props); // Requerido!! 
//         this.state = {
//             count: this.props.initialCounter //
//         };
//     }
//     componentDidMount() {
//         console.log('mounted', this.props.initialCounter);
//         setInterval(() => this.setState({ count: this.state.count + 2 }), 1000);
//     }
//     componentDidUpdate() {
//         console.log('updated', this.props.initialCounter, this.state.count);
//     }
//     increment() {
//         this.setState({ count: this.state.count + 1 });
//     }
//     render() {
//         return <div onClick={() => this.increment()}>{this.state.count}</div>;
//     }
// }
const Counter = props => {
    const [count, setCount] = useState(props.initialCounter)
    useEffect(() => {
        console.log('mounted',props.initialCounter);
        const intervalId = setInterval(()=>setCount(count => count + 2), 1000);
        return () => {
            console.log(intervalId);
            clearInterval(intervalId)};
    }, [])//equivalente a componentDidMount() por array vacía
    useEffect(() => {
        console.log('updated',props.initialCounter,count)
        // 
    })
    const increment = () => {
        setCount(count + props.step);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - props.step);
        }
    }
    return <div >
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
    </div>;
}
export default Counter;