import { createStore } from "vuex"

const initialState = {
    data: {}
}

const savedState = JSON.parse(localStorage.getItem('userStore'));

const userStore = createStore({
    state: savedState || initialState,

    mutations: {
        setUser(state, data) {
            state.data = data
        },

        logout(state) {
            state.data = {}
        }
    }
})

userStore.subscribe((mutations, state) => {
    localStorage.setItem('userStore', JSON.stringify(state))
})

export default userStore
