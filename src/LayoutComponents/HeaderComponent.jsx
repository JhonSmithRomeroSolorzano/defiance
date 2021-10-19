import React from 'react';
 
function HeaderComponent(props) {
  return (

    <div>
      <h1 style={{'width': '100%', 'background':'black', 'color': 'white', 'padding': '3rem 0rem 0rem 2rem'}}>{props.text}</h1>
    </div>
  )
}
 

 
export default HeaderComponent;