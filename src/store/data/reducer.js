import {
	CHANGE_INPUT_VALUE,
	SET_BREED, SET_BREED_IMAGE,
	SET_IMAGE_DISPLAY_STATUS,
	SET_SEARCHED_BREEDS,
} from './types';
// import {example1, obj, obj2, example2, example3, example4} from '../../assets/input';

const initialState = {
	breeds: [],
	searchedBreeds: [],
	breedImage: '',
	imageDisplayStatus: false,
	inputValue: '',
};

export default function breedsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_BREED_IMAGE:
			return {
				...state,
				breedImage: action.payload,
			};
		case SET_BREED:
			return {
				...state,
				breeds: action.payload,
				searchedBreeds: action.payload,
			};
		case SET_SEARCHED_BREEDS:
			return {
				...state,
				searchedBreeds: action.payload,
			};
		case SET_IMAGE_DISPLAY_STATUS:
			return {
				...state,
				imageDisplayStatus: action.payload,
			};
		case CHANGE_INPUT_VALUE:
			return {
				...state,
				inputValue: action.payload,
			};
		default:
			return state;
	}
}
