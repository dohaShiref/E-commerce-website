import React, { useEffect, useState } from "react";
import { Cardd } from "./Card";
import axios from "axios";
export  function Posts(){
// var posts=[];
let [posts,setPosts]=useState([]);
let getAllposts=()=>{

    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setPosts(response.data);
    
        console.log(posts);
    
    })
    .catch((error)  => {
        console.log(error);
    });
}
    useEffect(()=> {
getAllposts();
    },[]);
    return(
        <>
        <div className="alert alert-info  p-3 w-40 container">
            <div className="row">
            {
                posts&&
                posts.map((post,index)=> {
                    return (
                    <Cardd 
                    btnTitle={post.id}
                    key= {index}
                    discreaption={post.body}
                    title={post.title}
                    
                    />
                );
            })}

</div>
        </div>
        </>
    );
}