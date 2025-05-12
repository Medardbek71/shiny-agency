import { useEffect, useState } from "react"

export function useFetch(url) {
    const [ data , setData ] = useState({})
    const [ isLoading, setLoading] = useState(true)
    
    useEffect(()=>{
        function fetchData(){
            setLoading(true)
            fetch(url)
            .then((response)=>response.json())
            .then((surveyData)=>{
                setData(surveyData)
                setLoading(false)})
            .catch(error => console.error('Erreur:', error))
        }
        fetchData()
    },[url])
    return {isLoading , data }
}
