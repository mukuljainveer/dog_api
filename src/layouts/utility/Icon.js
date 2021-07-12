import React from "react";
import clsx from "clsx";

const Icon=(props)=>{
    return(
        <div className={clsx({'nav-icon-selected':props.text==props.isSelected})}>
            <div style={{fontSize: '36px',width:'100%'}}>{props.children}
            </div>
            <span className="icon-text">{props.text}</span>
        </div>
    );
}

export default Icon;