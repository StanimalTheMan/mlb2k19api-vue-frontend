import axios from 'axios';
import router from '../../router'

const state = {
    players: []
};

const getters = {
    getPlayerStats: (state) => state.players
};

const actions = {
    async fetchBatter({ commit }, data) {
        let firstName = data.formValues.firstName.replace(/\s/g, "").toLowerCase();
        let lastName = data.formValues.lastName.replace(/\s/g, "").toLowerCase();

        axios.get('http://localhost:5000/batting/player',
        {
            params: {
                first: firstName.charAt(0).toUpperCase() + firstName.slice(1),
                last: lastName.charAt(0).toUpperCase() + lastName.slice(1),
            },
        }).then(function (response) {
            commit('setPlayers', response.data);
            router.push({ path: 'batting/player', query: { first: firstName, last: lastName}});
        }).catch((error) => {
            console.log(error);
        })
    },
    async fetchPitcher({ commit }, data) {
        let firstName = data.formValues.firstName.replace(/\s/g, "").toLowerCase();
        let lastName = data.formValues.lastName.replace(/\s/g, "").toLowerCase();
        axios.get('http://localhost:5000/pitching/player',
        {
            params: {
                first: firstName.charAt(0).toUpperCase() + firstName.slice(1),
                last: lastName.charAt(0).toUpperCase() + lastName.slice(1),
            }
        }).then(function (response) {
            commit('setPlayers', response.data);
            router.push({ path: 'pitching/player', query: { first: firstName, last: lastName}});
        }).catch((error) => {
            console.log(error);
        })
    }
};

const mutations = {
    setPlayers: (state, players) => (state.players = players)
};


export default {
    state,
    getters,
    actions,
    mutations
};