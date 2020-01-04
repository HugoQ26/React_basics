import shortid from 'shortid';

// selectors
export const getCardsForResult = ({ cards, columns }, text) => {
  const filteredCards = cards.filter(card =>
    new RegExp(text, 'i').test(card.title),
  );

  return filteredCards.map(card => {
    for (const column of columns) {
      if (card.columnId == column.id) {
        return {
          ...card,
          listId: column.listId,
          columnTitle: column.title,
        };
      }
    }
  });
};

// action name creator
const reducerName = 'results';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const DISPLAY_RESULTS = createActionName('ADD_CARD');

// action creators
export const createActionDisplayResults = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: DISPLAY_RESULTS,
});

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case DISPLAY_RESULTS:
      return [...state, action.payload];
    default:
      return state;
  }
}
