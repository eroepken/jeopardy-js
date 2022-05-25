export type Clue = {
  id: number
  answer: string
  question: string
  value: number
  airdate: string
  categoryId: number
  gameId?: number
  invalidCount?: number
}

export type Category = {
  id: number
  title: string
  cluesCount: number
  clues: Clue[]
}