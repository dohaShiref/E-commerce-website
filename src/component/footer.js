import React, {Component} from "react";
import { ColorsContext } from "./ThemeContext";
export class Footer extends Component{
   render(){
       return(
       <ColorsContext.Consumer>
       {(value)=>{
         return(
          <div className="text-center text-lg-start" style={{backgroundColor: value.colors.bgColor}}>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{color:value.colors.tColor}}>Links</h5>
        
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 1</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 2</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 3</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 4</a>
                  </li>
                </ul>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0" style={{color:value.colors.tColor}}>Links</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 1</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 2</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 3</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 4</a>
                  </li>
                </ul>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{color:value.colors.tColor}}>Links</h5>
        
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 1</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 2</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 3</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 4</a>
                  </li>
                </ul>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0" style={{color:value.colors.tColor}}>Links</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 1</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 2</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 3</a>
                  </li>
                  <li>
                    <a href="#!" style={{color:value.colors.tColor}}>Link 4</a>
                  </li>
                </ul>
              </div>
             
            </div>
        
          </div>
          
          <div className="text-center p-3" style={{backgroundColor: "gray"}}>
            © 2020 Copyright:
            <a style={{color:value.colors.tColor}} href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
         
        </div>
      
         )

       }

       }
       </ColorsContext.Consumer>
       )
       }
}