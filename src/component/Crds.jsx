import React from "react";
export  function Cards(props){
    let {title,btnTitle,desc}=props;
    return(
        <div className="bg-light  p-3 mb-3">
            <h1>{title}</h1>
            <p>
               {desc}
            </p>
            <button className="btn btn-danger">Link {btnTitle}</button>

        </div>
    );
}