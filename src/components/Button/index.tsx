import React from 'react'

import '../../sass/_main.scss'

type buttonProps = {
  title: string
}
const Button = ({ title }: buttonProps) => {
  return <button className="button">{title}</button>
}

export default Button
