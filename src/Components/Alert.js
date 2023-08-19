import React from 'react'

function Alert(props) {
    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height:"50px"}}>
    {props.Alert && <div><div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
    <strong>{Capitalize(props.Alert.type)}</strong> {props.Alert.msg}

  </div></div>}
  </div>
  )
}

export default Alert