import { FC } from 'react'
import CategoryColumn from './CategoryColumn'

interface IBoardProps {
  categoryIds: number[] | string[]
}

const Board: FC<IBoardProps> = ({ categoryIds }) => (
  <div className="grid grid-cols-6 gap-2 min-w-[150vh] min-h-[97vh] h-full">
    {categoryIds.map(( id ) => <CategoryColumn categoryId={id} key={`category-${id}`} />)}
  </div>
)

export default Board
