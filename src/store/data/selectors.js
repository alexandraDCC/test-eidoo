import { compose, prop } from 'lodash/fp';

const root = (state) => state.breedStore;

export const getImageDisplay = compose(prop('imageDisplayStatus'), root);

export const getBreed = compose(prop('breeds'), root);
export const getBreedImage = compose(prop('breedImage'), root);
export const getSearchedBreeds = compose(prop('searchedBreeds'), root);
export const getInputValue = compose(prop('inputValue'), root);

