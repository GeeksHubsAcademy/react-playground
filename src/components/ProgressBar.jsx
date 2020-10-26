import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setProgress(progress => {
                if (progress < 100) {
                    console.log(progress <= 100, progress);
                    return progress + 1
                }else{
                    return progress;
                }
            })
        }, 50);
    return () => console.log('unMounted')
}, [])
return (
    <div style={{
        backgroundColor:'green',
        width:progress+'%'
    }}>
        {progress}
    </div>
)
}

export default ProgressBar
