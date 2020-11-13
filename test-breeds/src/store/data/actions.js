import { createAction } from 'redux-actions';
import {BREED_IMAGE_ENDPOINT, BREEDS_ENDPOINT} from '../../config';
import {SET_BREED,
	SET_IMAGE_DISPLAY_STATUS,
	SET_BREED_IMAGE,
	CHANGE_INPUT_VALUE,
	SET_SEARCHED_BREEDS,
} from "./types";

export const setBreed = createAction(SET_BREED, (data) => data);
export const setSearchedBreeds = createAction(SET_SEARCHED_BREEDS, (data) => data);
export const setBreedImageUrl = createAction(SET_BREED_IMAGE, (data) => data);
export const setImageDisplayStatus = createAction(SET_IMAGE_DISPLAY_STATUS, (data) => data);
export const setInputValue = createAction(CHANGE_INPUT_VALUE, (data) => data);

export const searchProcess = (data) => async (dispatch) => {
	await dispatch(setInputValue(data.target.value));
	dispatch(getSearchResults())
};
export const clearSearch = () => async (dispatch) => {
	await dispatch(setInputValue(''));
	dispatch(getSearchResults())
};

export const getBreeds = () => async (dispatch) => {
	
	try {
		fetch(BREEDS_ENDPOINT)
			.then(res => res.json())
			.then(
				(result) => {
					let breeds = [];
					Object.keys(result.message).forEach((item) => {
						if(result.message[item].length !== 0) {
							result.message[item].forEach((subItem) => {
								breeds.push(`${item}/${subItem}`);
							});
						} else {
							breeds.push(item);
							return;
						}
						return;
					});
					dispatch(setBreed(breeds));
				},
				(error) => {
					console.log(error);
					dispatch(setBreed([]));
				}
			)
	} catch(e) {
		console.log(e);
		dispatch(setBreed([]));
	}
};
export const setBreedImage = (breed) => async (dispatch) => {
	const breedUrl = BREED_IMAGE_ENDPOINT + breed + '/images/random';
	try {
		fetch(breedUrl)
			.then(res => res.json())
			.then((result) => {
					dispatch(setBreedImageUrl(result.message));
				},
				(error) => {
					console.log(error);
				})
	} catch (e) {
		console.log(e);
	}
	dispatch(setBreedImageUrl(breedUrl));
};

export const getSearchResults = () => async (dispatch, getState) => {
	let state = getState(),
	    searchString = state.breedStore.inputValue,
			breeds = state.breedStore.breeds;
	const searchedBreeds = breeds.filter((item) => {
		return item.includes(searchString);
	});
	dispatch(setSearchedBreeds(searchedBreeds));
};
