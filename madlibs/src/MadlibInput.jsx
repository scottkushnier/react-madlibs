
import React from "react";
import { useState } from "react";

function MadlibInput({placeholder, changeFn}) {
    const [val, setVal] = useState('');
    const handleChange = (e) => {
        setVal(e.target.value);
        changeFn(e.target.value);
    };
    return <div> <input type="text" placeholder={placeholder} value={val} onChange={handleChange}/> </div>
}

export default MadlibInput