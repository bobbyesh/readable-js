import { SELECT_WORD } from '../actions/index';

const documents = (state = {}, action) => {
  switch (action.type) {
    case SELECT_WORD:
      const word = action.word;
      const positionRect = action.positionRect;
      return {
        word,
        positionRect,
        ...state,
      }

    default:
      return state
  }
}

export default documents;
