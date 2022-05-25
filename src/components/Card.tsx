import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface ICardProps {
  className?: string
}

const Card: FC<PropsWithChildren<ICardProps>> = ({ className, children }) => (
  <div className={classNames(
    'rounded bg-card font-card uppercase text-shadow-default text-center p-4 center',
    className
  )}>
    {children}
  </div>
)

export default Card
