import React, { useState } from 'react';

const SearchInput=()=>{
    const [text,setText]=useState("");
    const  [data,setData]=useState("");
    const fruits =[
        "Apple",
        "Banana",
        "Mango",
        "Papaya",
        "Grapes",
        "Water Melon",
        "Pineapple",
    ]
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const filter = fruits.filter((item)=>item.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    return(
        <div>
            <input type='text' placeholder='Enter Here ...' onChange={handleChange} />

            {filter.map((fruit)=>{
                return <div>{fruit}</div>
            })}
        </div>
    )
}

export default SearchInput;