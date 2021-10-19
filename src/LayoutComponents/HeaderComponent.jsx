import React from 'react';
import { black, warmGray } from '@carbon/colors';
 
function HeaderComponent(props) {
  return (
    <div className='bx--row' style={{margin: '0', background: black}}>
      <div className='bx--col-max'>
        <h1 style={{color: warmGray[10]}}>{props.text}</h1>
      </div>
    </div>
  )
}
 

 
export default HeaderComponent;