import React, { useState } from "react";

function Uploadform(){

    const [file,setfile]=useState(null);
    const [error,seterror]=useState(null)
    const type=['image/png','image/jpeg' ,'image/jpg'];
    function handlechg(e){
        const selected=e.target.files[0];
        if(selected&& type.includes(selected.type)){
            setfile(selected);
            seterror('');
        }
        else{
            setfile(null);
            seterror("Invalid file Selected");
        }
        }

    return <form>
    <label>
        <input type="file" onChange={handlechg}></input>
        <span>+</span>
    </label>
        <div className="output">
            {error&&<div>{error}</div>}
            {file&&<div>{file.name}</div>}
        </div>
    </form>
}
export default Uploadform;