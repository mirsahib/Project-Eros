import { useState } from "react"

export default function UploadForm(){

    const [file,setFile] = useState(null)
    const [error,setError] = useState("")

    const changeFileHandler = (e)=>{
        let selectedFile = e.target.files[0]
        const types = ["image/jpeg","image/jpg","image/png"]

        if(selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile)
            setError("")
        }else{
            setError("Please selected a jpeg or png format image")
        }
    }

    return(
        <form>
            <input type="file" onChange={changeFileHandler}/>
            {error? <div className="error">{error}</div>:""}
        </form>
    )
}