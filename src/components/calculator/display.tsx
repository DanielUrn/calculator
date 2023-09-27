export default function Display({content}:{content?:string}){
    return(
        <div className="min-h-[35px] max-w-max">{content ? content : '0'}</div>
    )
}