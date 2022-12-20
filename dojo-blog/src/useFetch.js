import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [errFetch,setError] = useState(null)
  
   useEffect(() => {
    const abortCont = new AbortController()
   setTimeout(() => {
    fetch(url, {signal:abortCont.signal})
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
        if(err.name !== 'AbortError'){
            setIsPending(false)
            setError(err.message)
        }
       
    })
   },3000)
   return () => abortCont.abort()
   },[url])
   return {
    data,
    isPending,
    errFetch
   }
}
export default useFetch