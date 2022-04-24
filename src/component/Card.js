import React, {Component} from "react";
import { ColorsContext } from "./ThemeContext";
export class Cardd extends Component{
    
   render(){
    let{title ,discreaption,btnTitle}=this.props
       return(
       <ColorsContext.Consumer>
       {(value)=>{
         return(
          <div className="card p-3 m-5 col" style={{width: "28rem",backgroundColor: value.colors.Cardbg}}>
          <img className="card-img-top" src={value.colors.cardImage} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text" >{discreaption}</p>
            <button className="btn" style={{backgroundColor: value.colors.btnCardColor,color:"white"}}>{btnTitle}</button>
          </div>
        </div>
         )
       }}
       </ColorsContext.Consumer>
       );
       }
}