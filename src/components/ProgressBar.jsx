import React, {  useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    useEffect(() => {
        const progressIntervalId = startProgressBar();
        setIntervalId(progressIntervalId);
        console.log('Mounted');
        return () => {
            clearInterval(intervalId);
            setProgress(0);
            console.log('unMounted');
        }
    }, []);
    useEffect(() => {
        console.log('updated', progress);
    })
    const startProgressBar = () => setInterval(() => {
        setProgress(progress => progress < 100 ? progress + 1 : progress);
    }, 50);
    const pauseOrResume = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null)
        } else {
            const progressIntervalId = startProgressBar();
            setIntervalId(progressIntervalId)
        }
    }
    return (
        <div className="progressbar">
            <div style={{
                backgroundColor: 'green',
                width: progress + '%'
            }}>
                {progress}
            </div>
            <button onClick={pauseOrResume}>{intervalId ? 'Pause' : 'Resume'}</button>
        </div>
    )
}

export default ProgressBar