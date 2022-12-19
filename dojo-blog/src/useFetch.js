import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [errFetch,setError] = useState(null)
  
   useEffect(() => {
    fetch(url)
        .then(data => {
            if(!data.ok){
                throw Error("Couldn't fetch the data")
            }
            return data.json()
        } )
        .then(data => {
            setData(data)
            setIsPending(false)
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        })
   },[url])
   return {
    data,
    isPending,
    errFetch
   }
}
export default useFetch