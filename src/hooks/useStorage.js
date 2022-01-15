import { useEffect,useState } from "react";
import {projectStorage} from "../firebase/config"

const useStorage = (file)=>{

    const [progress,setProgress] = useState(0)
    const [error,setError] = useState("")
    const [url,setUrl] = useState("")

    useEffect(()=>{

        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on("state_changed",
            (snap)=>{
                let percentage = (snap.bytesTransferred/snap.totalBytes * 100)
                setProgress(percentage)
            },
            (error)=>{
                setError(error)
            },
            async ()=>{
                const url = storageRef.getDownloadURL()
                setUrl(url)
            }
        )
    },[file])

    return {progress,error,url}
}

export default useStorage