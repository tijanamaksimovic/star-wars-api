import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    species: [],
    planets: [],
    people: [],
  },
  getters: {
    getSpeciesNames: state => state.species.map(specie => specie.name),
    getPlanetNames: state => state.planets.map(planet => planet.name),
    getPeopleNames: state => state.people.map(character => character.name),
    getPlotPlanet: state => name => state.planets.find(planet => planet.name === name),
    getPlotCharacter: state => name => state.people.find(character => character.name === name),
    getPlotSpecie: state => name => state.species.find(specie => specie.name === name),
  },
  mutations: {
    updateSpecies(state, species) {
      state.species = species;
    },
    updatePlanets(state, planets) {
      state.planets = planets;
    },
    updatePeople(state, people) {
      state.people = people;
    },
  },
  actions: {
    getSpecies({ commit }, payload = '') {
      axios.get(`api/species/?search=${payload}`)
        .then(result => commit('updateSpecies', result.data.results))
        .catch(console.error);
    },
    getPlanets({ commit }, payload = '') {
      axios.get(`api/planets/?search=${payload}`)
        .then(result => commit('updatePlanets', result.data.results))
        .catch(console.error);
    },
    getPeople({ commit }, payload = '') {
      axios.get(`api/people/?search=${payload}`)
        .then(result => commit('updatePeople', result.data.results))
        .catch(console.error);
    },
  },
});
