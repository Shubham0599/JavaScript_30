import React from 'react';
import useFirestore from '../hooks/useFirestore';

function ImageGrid({setselectedImg}){
    const {docs}=useFirestore('images');
    console.log(docs);
    return(
        <div class="img-grid" >
           {docs&& docs.map(doc=>(
               <div className="img-wrap" key={doc.id}
               onClick={()=>setselectedImg(doc.url)}>
               <img src={doc.url} alt="pic"></img>
               </div>
           ))}
        </div>
    );
}
export default ImageGrid;