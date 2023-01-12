import React from "react";
import "./pagination.css";

function Pagination(props) {
  var state = [];
  var i;
 for(i=1;i<=props.pages;i++){
  state.push(i)
 }
console.log(state)
  return (
    <div className="pagination">
      <a href="#">&raquo;</a>
      {
        state.map((value,index)=><a href="#" key={index}>{value}</a>)
      }
      <a href="#">&raquo;</a>
    </div>
  );
}
export default Pagination;
