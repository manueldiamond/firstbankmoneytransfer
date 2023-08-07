import React from 'react'

const Button = ({url, style, onClick, className="",children, primary, disabled, text ,flat, bordered, sm}) => {

    const flatStyle= primary?"border-primary text-primary":"border-secondary text-secondary"
    const normalStyle= primary?"text-white bg-primary":"text-primary bg-secondary"
    const buttonStyleClasses = (flat||bordered)?flatStyle:normalStyle
    

  return (
    <a onClick={onClick} href={url} style={{...style}} className={`${disabled?"opacity-50":"button-hover"} cursor-pointer text-center block px-6 ${sm?"py-3":"py-4"} rounded-full ${buttonStyleClasses} ${bordered?"border-2 border-solid":""} ${className}`}>
      {text?text:""}
      {children}
    </a>
  )
}

export default Button