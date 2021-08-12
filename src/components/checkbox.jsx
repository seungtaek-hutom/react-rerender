import React from 'react'

const Checkbox = ({ ...rest }) => {
  return <input type="checkbox" {...rest}></input>
}

export default React.memo(Checkbox);