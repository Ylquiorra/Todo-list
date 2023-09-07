import { FC, ReactNode, memo } from "react";

import cls from './Page.module.scss'

interface PageProps {
  children: ReactNode
  dataTestid?: string
}

export const Page: FC<PageProps> = memo((props) => {
  const {children, dataTestid} = props

  return (
    <main data-testid={dataTestid} className={cls.Page} >
      {children}
    </main>
  )
})
