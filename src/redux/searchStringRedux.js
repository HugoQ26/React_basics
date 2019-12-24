// selectors
export const countAllCards = ({ cards }) => cards.length;

export const countVisibleCards = ({ cards, searchString }) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const getSearchString = ({ searchString }) => searchString;

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
