import React, {Component} from "react";

export class Slider extends Component{
   render(){
       return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner h-50">
    <div className="carousel-item active">
      <img className="d-block w-100 h-50" src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-50" src="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-50" src="https://wallpaperaccess.com/full/2246313.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
       );
       }
}