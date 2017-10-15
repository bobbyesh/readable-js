export const SELECT_WORD = 'SELECT_WORD';

export const selectWord = (word, positionRect) => {
  return {
    type: 'SELECT_WORD',
    word,
    positionRect,
  }
}
