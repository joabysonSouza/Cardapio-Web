import axios from 'axios'
import React, { useEffect } from 'react'

export default function Api() {
    useEffect(()=>{
        const response = axios.get('http://localhost:3000/dados')
        return console.log("ola")
    },[])
  return (
    <div>
      
    </div>
  )
}
