import React,{createContext,useState} from "react";
export let ColorsContext=createContext();
export default function ThemeContext(props){
    let [lightMood,setLightMood]=useState(true);
    let [colors,setColors]=useState({
        bgColor:"lightgray",
        tColor:"black",
        cardImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaCc_8uO5cLVDXcAy3d1fBkRnIBQMuPXzYw&usqp=CAU",
        Cardbg:"white",
        btnCardColor:"crimson"
    });
    
    let ToggleTheme=()=>{
        if(lightMood){
            setColors({
                bgColor:"black",
                tColor:"white",
                cardImage:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
                Cardbg:"moccasin",
                btnCardColor:"black"
            })
            setLightMood(!lightMood);
        }
        else{
            setColors({
                bgColor:"lightgray",
                tColor:"black",
                cardImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaCc_8uO5cLVDXcAy3d1fBkRnIBQMuPXzYw&usqp=CAU",
                Cardbg:"white",
                btnCardColor:"crimson"
            })
            setLightMood(!lightMood);
        }
    }
    return(
        <ColorsContext.Provider value={{colors,ToggleTheme}}>
            {props.children}
        </ColorsContext.Provider>
    );
}