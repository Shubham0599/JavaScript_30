import React, { useState } from "react";
import Progress from "./ProgressBar.js"

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

    return (
    <form>
    <label>
        <input type="file" onChange={handlechg}></input>
        <span>+</span>
    </label>
        <div className="output">
            {error&&<div className="error">{error}</div>}
            {file&&<div>{file.name}</div>}
            {file&& <Progress file={file} setFile={setfile}  />}
        </div>
    </form>
    );
}
export default Uploadform;