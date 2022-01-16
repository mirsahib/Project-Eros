import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import useStorage from '../hooks/useStorage'

export default function ProgressBar({file,setFile}){

    const {url,progress} = useStorage(file)

    useEffect(()=>{
        if(url){
            setFile(null)
        }
    },[url,setFile])

    return(
        <div className="progress-bar" style={{width:progress+'%'}}></div>
    )
}