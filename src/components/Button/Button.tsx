import React from 'react'
import '../Button/Button.css'

type ButtonProps = {
  className?: string
  innerValue: React.ReactNode | string
}

export default function Button({ className, innerValue }: ButtonProps) {
  return <button className={className ? className : ''}>{innerValue}</button>
}
