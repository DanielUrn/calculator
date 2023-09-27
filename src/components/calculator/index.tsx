'use client'
import { useEffect, useState } from "react";
import Calculate from "./calculate";
import Display from "./display";

export default function Calculator (){
    const [content, setContent] = useState('')
    
    return(
        <div className="">
            <Display content={content}></Display>
            <Calculate content={content} setContent={setContent}></Calculate>
        </div>
    )
}