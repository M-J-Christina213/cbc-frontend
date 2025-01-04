import { createClient } from "@supabase/supabase-js"
import { useState } from "react"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyemtvdW5iZGxmaHZoYndvempyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MzA0NTcsImV4cCI6MjA1MTQwNjQ1N30.EsHykQ18bY6mOHFYBiiUIANEdN2lQItP0d36wSgOGWY`

const url = "https://zrzkounbdlfhvhbwozjr.supabase.co"

export default function FileUploadTest(){

    const [file, setFile] = useState(null)
    function handleUpload(){
        if (file==null){
            alert("Please select a file")
            return
        }
        console.log(file)

        const fileName = file.name

        const extension = fileName.split(".")[fileName.split(".").length-1] 

        if(extension != "jpg" && extension != "png"){
            alert ("Please select a jpg or png file")
            return
        }

        const supabase = createClient(url, key)

        supabase.storage.from("images").upload(file.name, file, {
            cacheControl : "3600",
            upsert : false
        }).then((res)=>{
            console.log(res)
        })
    }
    return (
        <div>
            <h1> File Upload test </h1>
            <input type="file" onChange={(e)=>{
                setFile(e.target.files[0])
            }} />
            <button onClick={handleUpload}> Upload </button>
        </div>
    )
}