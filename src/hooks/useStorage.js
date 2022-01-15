import { useEffect,useState } from "react";
import {projectFireStore, projectStorage} from "../firebase/config"

const useStorage = (file)=>{

    const [progress,setProgress] = useState(0)
    const [error,setError] = useState("")
    const [url,setUrl] = useState("")

    useEffect(()=>{

        const storageRef = projectFireStore.ref(file.name)

        storageRef.put(file).on("state_changed",
            (snap)=>{
                let percentage = (snap.bytesTransferred/snap.totalBytes * 100)
                setProgress(percentage)
            },
            (error)=>{
                setError(error)
            },
            async ()=>{
                const url = storageRef.getDownloadRef() 
                setUrl(url)
            }
        )

        return {progress,error,url}

    },[file])

}

export default useStorage