import { CheckCircle, Circle } from 'react-feather'
import './filetreeitem.module.css'
import { useState } from 'react'


export default function FiletreeItem({itemText})
{
    let [statusDone, setStatus] = useState(false)
    let statusIcon = null
    
    const handleClick = () =>{
        setStatus(true)
    }

    if(statusDone)
    {
        statusIcon = (<CheckCircle size={16} stroke='green'/>)
    }
    else
    {
        statusIcon = (<Circle size={16}/>)
    }
    
    return (
        <>
            <div className='d-flex' onClick={handleClick}>
                <div className='w-auto' id='fileitem-mark'>{statusIcon}</div><span>&nbsp;&nbsp;{itemText}</span>
            </div>
        </>
    )
}