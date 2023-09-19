import React, {FC, useRef, useState} from "react";

const EventExample: FC = () => {

    const [value, setValue] = useState<string>()
    const inputRef = useRef<HTMLInputElement>(null)

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)
    }

    function onCLickHandler(e: React.MouseEvent<HTMLButtonElement>){
        console.log(inputRef.current?.value)
    }

    return(
        <div>
            <input value={value} type="text" onChange={changeHandler} placeholder="Управляемый"/>
            <input type="text" placeholder="Неуправляемый" ref={inputRef}/>
            <button onClick={onCLickHandler}>Click</button>
            <div draggable style={{width: 200, height: 200, background: 'pink'}}></div>
            <div style={{width: 200, height: 200, background: 'red', marginTop: 15}}></div>
        </div>
    )
}

export default EventExample