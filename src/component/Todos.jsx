import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Cardd } from "./Card";

import todosAction from "../Redux/actions/postsActions";

// import { useNavigate } from "react-router-dom";
function Todos(props) {
  // let navigate = useNavigate();
  let { todos, getTodosList } = props;

  useEffect(() => {
    getTodosList();
  }, []);

  let goToHomePage = () => {
    // navigate("/home");
  };
  return (
    // <div className="alert alert-info p-5">
    //   <h1 className="text-ceter">posts List</h1>
    //   {todos &&
    //     todos.map((item, index) => {
    //       return (
    //         <div className="bg-light mb-3 p-3" key={index}>
    //           <h2>{item.id}</h2>
    //           <p>{item.title}</p>
    //         </div>
    //       );
    //     })}
    // </div>
     <div className="alert alert-info  p-3 w-40">
     {
         todos&&
         todos.map((post,index)=> {
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
  );
}

let mapStateToProps = (state) => {
  return {
    todos: state.todosList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getTodosList: () => dispatch(todosAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
