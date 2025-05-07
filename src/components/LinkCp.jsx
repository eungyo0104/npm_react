import React from "react";
function LinkCp(props){
  console.log('전달받은 속성값들 : ', props);
  return(
    <a href={props.hrefPr}>{props.textPr}</a>
  );
}

export default LinkCp;