import axios from "axios";

const state = {
    user: {},
    message:""
};
const getters = {};
const actions = {
    getUser({commit}) {
        axios.get("api/user/current")
        .then( response => {
            commit('setUser',response.data);
        });
    },
    loginUser( {commit} , user) {
        axios
        .post("api/user/login",{
            email: user.email,
            password: user.password
        })
        .then(response => {
            if(response.data.access_token) {
                //save token
                localStorage.setItem(
                    "blog_token",
                    response.data.access_token
                )

                window.location.replace("/home")
            }else {
                commit('setMessage',response.data['message']);
            }
        })
    },
    logoutUser() {

        localStorage.removeItem('blog_token');
        window.location.replace("/login");

    },
    showMessage({commit},msg) {
        commit('setMessage',msg);
    }
};
const mutations = {
    setUser( state, data ) {
        //console.log(data);
        state.user = data;
    },
    setMessage(state,data) {
        state.message = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}