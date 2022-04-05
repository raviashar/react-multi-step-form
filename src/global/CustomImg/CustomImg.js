import React from "react";

function CustomImg(props) {
    return(
        <img src={`/images/${props.src}`} alt={props.alt} width={props.width} height={props.height} className={props.className}  />
    )
}

export default CustomImg;