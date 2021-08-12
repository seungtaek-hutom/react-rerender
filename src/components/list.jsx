import React from 'react'

export const List = React.memo(({ children, ...rest }) => {
  return <ul {...rest}>{children}</ul>
})

export const ListItem = React.memo(({ children, ...rest }) => {
  return <li {...rest}>{children}</li>
})