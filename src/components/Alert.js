import React from 'react'

function Alert(props) {
    const textCapitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{textCapitalize(props.alert.type)} :</strong> {props.alert.msg}
        </div>
  )
}

export default Alert