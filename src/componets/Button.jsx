

function Button({ text,handleClick}){
return (
<>
<button onClick={handleClick} className="border border-black rounded-md p-1 bg-blue-500">{text}</button>


</>
)
    
}

export default Button