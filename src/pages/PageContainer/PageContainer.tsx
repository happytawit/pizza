import React, { PropsWithChildren, ReactElement } from 'react'

import './PageContainer.css'
import Header from '../../components/Header/Header'

type Props = {
  children: React.ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="wrapper">
      <div className="pageContainer">
        <Header />
        <div className="pageContainer__content">{children}</div>
      </div>
    </div>
  )
}
