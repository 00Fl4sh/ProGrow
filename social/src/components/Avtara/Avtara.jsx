import React from 'react'

const Avtara = ({children,color,padding,py,px,backgroundColor,cursor,textAlign,borderRadius,textDecoration }) => {
  const style ={
  backgroundColor,
  color:color || 'black',
  padding:padding||`${py} ${px}`,
  cursor:cursor || null,
  textAlign:textAlign || "center",
  borderRadius:borderRadius || "10px",
  textDecoration:textDecoration || "none",

}

  return (
    <div style={style}>
      {children}
      
    </div>
  )
}

export default Avtara

