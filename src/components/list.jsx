import React from 'react'

export const List = React.memo(({ children, ...rest }) => {
  return <ul {...rest}>{children}</ul>
})

export const ListItem = React.memo(({ children, ...rest }) => {
  return <li {...rest}>{children}</li>
}, isPropsEqual)

function isPropsEqual(prev, next) {
  return (
    prev.children[0].props.checked === next.children[0].props.checked
    && prev.children[1] === next.children[1]
  )
}