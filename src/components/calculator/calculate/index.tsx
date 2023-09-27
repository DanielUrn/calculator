import { numberKeys, operatorKeys } from "@/lib/calculator-keys";
import Key from "./button";

export default function Calculate({content, setContent}:{content:string, setContent:Function}){
    function toggleContent(value:string){
        setContent(content+value)
    }
    const topSideOperations = operatorKeys.slice(3)
    const rightSideOperations = operatorKeys.slice(0,3)
    return(
        
        <div className="flex max-w-md">
            <div className="flex flex-wrap flex-row-reverse gap-1 justify-evenly">
                {
                    topSideOperations.map((operationKey)=>{
                        return(
                            <span onClick={()=>{toggleContent(operationKey.symbol)}} key={operationKey.type} className=" basis-[30%]"><Key content={operationKey.symbol}></Key></span>
                        )
                    })
                }
                {   
                    numberKeys.map((numberKey)=>{
                        
                        if(numberKey.number === '0'){
                            return (
                                <span onClick={()=>{toggleContent(numberKey.number)}} key={numberKey.writtenNumber} className=" basis-[63%]"><Key content={numberKey.number}></Key></span>
                            )
                        }
                        return(
                            <span onClick={()=>{toggleContent(numberKey.number)}} key={numberKey.writtenNumber} className=" basis-[30%]"><Key content={numberKey.number}></Key></span>
                        )
                    })
                }
            </div>
            <div className="flex flex-col-reverse justify-end gap-1">
                {
                    rightSideOperations.map((operationKey,i)=>{
                        return(
                            <span className={i < 2 ? 'basis-2/3':''} key={operationKey.type}> <Key content={operationKey.symbol}></Key> </span>
                        )
                    })
                }
            </div>
        </div>
    )
}