import React, { Component } from 'react'

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            intervalId: null
        }
    }
    componentDidMount() {
        const progressIntervalId = this.startProgressBar();
        this.setState({ intervalId: progressIntervalId });
        console.log('Mounted');
    }
    componentDidUpdate() {
        console.log('updated', this.state.progress);
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
        this.setState({ progress: 0 });
        console.log('unMounted');
    }

    startProgressBar = () => setInterval(() => {
        this.setState(state => state.progress < 100 ? { progress: state.progress + 1 } : { progress: state.progress });
    }, 50);
    pauseOrResume = () => {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
            this.setState({ intervalId: null })
        } else {
            const progressIntervalId = this.startProgressBar();
            this.setState({ intervalId: progressIntervalId })
        }
    }
    render() {
        return (
            <div className="progressbar">
                <div style={{
                    backgroundColor: 'green',
                    width: this.state.progress + '%'
                }}>
                    {this.state.progress}
                </div>
                <button onClick={this.pauseOrResume}>{this.state.intervalId ? 'Pause' : 'Resume'}</button>
            </div>

        )
    }

}

export default ProgressBar