import { sample } from 'lodash'
import { FC, useCallback, useEffect, useState, useMemo } from 'react'

import { getData } from '../api'
import { Category, Clue } from '../types'
import Card from './Card'

interface ICategoryColumnProps {
  categoryId: string | number
}

const CategoryColumn: FC<ICategoryColumnProps> = ({ categoryId }) => {
  const [ category, setCategory ] = useState<Category>()

  const memoizedParams = useMemo(() => {
    const params = new URLSearchParams()
    params.set( 'id', `${categoryId}` )
    return params
  }, [ categoryId ])

  const getDataCallback = useCallback(() => {
    if ( !memoizedParams ) return
    getData( 'category', memoizedParams, ( data: Category ) => setCategory( data ))
  }, [ memoizedParams ])

  useEffect(() => {
    getDataCallback()
  }, [])

  if ( !category ) return <></>

  // console.log(category.clues.length)

  // const getRandomClue = ( value: number ) => sample(category.clues.filter(( clue: Clue ) => clue.value === value ))

  // console.log(getRandomClue(200))

  return (
    <div className="grid grid-flow-col grid-rows-6 gap-2">
      <Card className="text-category-title text-white">
        {category.title}
      </Card>
      <Card className="text-card-value-lg text-j-yellow">
        $200
      </Card>
      <Card className="text-card-value-lg text-j-yellow">
        $400
      </Card>
      <Card className="text-card-value-lg text-j-yellow">
        $600
      </Card>
      <Card className="text-card-value-lg text-j-yellow">
        $800
      </Card>
      <Card className="text-card-value-md text-j-yellow">
        $1000
      </Card>
    </div>
  )
}

export default CategoryColumn
