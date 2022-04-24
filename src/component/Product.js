import React,{useState} from "react";
export default function Product() {
    let [arrproduct,setarrproduct]=useState([
        {id:1,title:"TOSHIBA",imagrUrl:"tv1.jpg",price:500,quantity:2,category:"TV"},
        {id:2,title:"LG",imagrUrl:"tv2.jpg",price:300,quantity:1,category:"TV"},
        {id:3,title:"SHARP",imagrUrl:"tv3.jpg",price:500,quantity:9,category:"TV"},
        {id:1,title:"OPPO",imagrUrl:"phone1.jpg",price:5000,quantity:3,category:"phone"},
        {id:2,title:"SHONY",imagrUrl:"phone2.jpg",price:1500,quantity:5,category:"phone"},
        {id:3,title:"HAWAWE",imagrUrl:"phone3.jpg",price:2500,quantity:2,category:"phone"},
        {id:1,title:"APPLE",imagrUrl:"watch1.jpg",price:5000,quantity:3,category:"watch"},
        {id:2,title:"SAMSUNG",imagrUrl:"watch2.jpg",price:1500,quantity:5,category:"watch"},
        {id:3,title:"HAWAWE",imagrUrl:"watch3.jpg",price:2500,quantity:2,category:"watch"},
    ]);

   
  const mystyle = {
    border:' 2px solid black',
    padding: '5',
    color: 'black',
    backgroundColor:'#444444'
    
  };
  let DisplayTv=()=>{
   setarrproduct([
    {id:1,title:"TOSHIBA",imagrUrl:"tv1.jpg",price:500,quantity:2,category:"TV"},
    {id:2,title:"LG",imagrUrl:"tv2.jpg",price:300,quantity:1,category:"TV"},
    {id:3,title:"SHARP",imagrUrl:"tv3.jpg",price:500,quantity:9,category:"TV"},
   ]);
  }
  let Displayphone=()=>{
    setarrproduct([
      {id:1,title:"OPPO",imagrUrl:"phone1.jpg",price:5000,quantity:3,category:"phone"},
      {id:2,title:"SHONY",imagrUrl:"phone2.jpg",price:1500,quantity:5,category:"phone"},
      {id:3,title:"HAWAWE",imagrUrl:"phone3.jpg",price:2500,quantity:2,category:"phone"},
    ]);
  }
  let DisplayWatch=()=>{
    setarrproduct([
      {id:1,title:"APPLE",imagrUrl:"watch1.jpg",price:5000,quantity:3,category:"watch"},
      {id:2,title:"SAMSUNG",imagrUrl:"watch2.jpg",price:1500,quantity:5,category:"watch"},
      {id:3,title:"HAWAWE",imagrUrl:"watch3.jpg",price:2500,quantity:2,category:"watch"},
    ]);
  }
  return (
      <>
      <div className="container p-5 mt-4" style={{display:'flex',justifyContent:'space-around',backgroundColor:'#100'}}>
    <div className="column">
        <button  style={mystyle} onClick={DisplayTv}>TV</button>
        <button style={mystyle} onClick={Displayphone}>Phones</button>
        <button style={mystyle} onClick={DisplayWatch}>Smart Watch</button>
    </div>
    <div className="column">
        <label   style={{display: 'block',color:'white'}}>Max price</label>
        <input type="number" ></input>
        <label  style={{display: 'block',color:'white'}}>Min price</label>
        <input type="number" ></input>
        <button >Filter</button>
    </div>
</div>
    <div className="container m-5">
      <p className="text-center text-suceess fs-1">Our Products</p>
      <table className="table ">
        <thead className="text-center">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Required Qunatity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody className="text-center ">
          {arrproduct &&
            arrproduct.map((product, index) => {
              return (
                <>
                  <tr className="mt-4">
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>
                      <img
                        appBox
                        mouseenterr="blue"
                        mouseoutt="gray"
                        src={product.imagrUrl}
                      />
                    </td>
                    <td>{product.quantity}</td>
                    <td>
                      {" "}
                      <input
                        className="mt-4 border-light rounded"
                        type="number"
                        placeholder="enter quantity"
                      ></input>
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <button className="btn btn-primary mt-4">Buy </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <p className="fs-4">
        Your total is : <span className="text-danger"></span>
      </p>
    </div>
    </>
  );
}
