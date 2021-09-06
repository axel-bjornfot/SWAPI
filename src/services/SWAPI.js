import axios from "axios";
import li from "li";

axios.defaults.baseURL = "https://swapi.dev/api/";

const get = async (endpoint) => {
	const response = await axios.get(endpoint);
	return {
		results: response.data,
	};
};

/**
 * Get characters
 *
 * @returns Promise
 */
export const getCharacters = async (page = null) => {
	return get(`/people/?page=${page}`);
};

/**
 * Get planets
 *
 * @returns Promise
 */
export const getPlanets = async (page = null) => {
	return get(`/planets/?page=${page}`);
};

/**
 * Get Films
 *
 * @returns Promise
 */
export const getFilms = async (page = null) => {
	return get(`/films/?page=${page}`);
};

/**
 * Get starships
 *
 * @returns Promise
 */
export const getStarships = async (page = null) => {
	return get(`/starships/?page=${page}`);
};

/**
 * Get Species
 *
 * @returns Promise
 */
export const getSpecies = async (page = null) => {
	return get(`/species/?page=${page}`);
};

export default {
	getCharacters,
	getPlanets,
	getFilms,
	getStarships,
	getSpecies,
};
