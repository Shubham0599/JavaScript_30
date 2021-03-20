import React from 'react';

function Modal({selectedImg,setselectedImg }){
    function handleClick(e){
        if(e.target.classList.contains('backdrop'))
        setselectedImg(null);
    }
    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged_image" />
        </div>
    );
}
export default Modal;