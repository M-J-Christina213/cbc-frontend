import { createClient } from "@supabase/supabase-js"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyemtvdW5iZGxmaHZoYndvempyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MzA0NTcsImV4cCI6MjA1MTQwNjQ1N30.EsHykQ18bY6mOHFYBiiUIANEdN2lQItP0d36wSgOGWY`

const url = "https://zrzkounbdlfhvhbwozjr.supabase.co"

export default function uploadMediaToSupabase(file){
    return new Promise((resolve, reject)=>{
        if (file==null){
            reject("file not added")
        }

        let fileName = file.name

        const extension = fileName.split(".")[fileName.split(".").length-1] 

        if(extension != "jpg" && extension != "png"){
            alert ("Please select a jpg or png file")
            return
        }

        const supabase = createClient(url, key)

        const timestamp = new Date().getTime()
    
        fileName = timestamp+"."+extension

        supabase.storage.from("images").upload(file.name, file, {
            cacheControl : "3600",
            upsert : false
        }).then(()=>{
          const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
          resolve(publicUrl);
        }).catch((err)=>{
            reject(err)
        })

    })

   
}