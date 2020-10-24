<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { httpClient } from "utils/asyncUtils";

interface Props{}

type Data={

}

const Analystics:React.FC<Props>=({})=>{
    const [data,setData]=useState<Data>('string')
    useEffect(()=>{
        httpClient('').then(res=>setData(res))
    })
    return(
        <div></div>
=======
import React, { useEffect } from "react";
import { httpClient } from "utils/asyncUtils";

function Analystics(){

    return (
        <div>
            
        </div>
>>>>>>> d9dbf1e... Create Analystics.tsx
    )
}

export default Analystics;