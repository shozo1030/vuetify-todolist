<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/profile">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-title>{{ currentUser.name }}</v-list-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/app">
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted-triangle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-title>Todolist</v-list-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-title>Log out</v-list-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>TodoList</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
  
<script>
import axios from 'axios';
import app from '../vue/app.vue'

export default {
  components: {
    app
  },
  data: () => ({ drawer: null }),
  computed: {
    currentUser: {
      get() {
        return this.$store.state.currentUser.user;
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('currentUser/logoutUser');

    }
  },
  created() {
    if (localStorage.hasOwnProperty("blog_token")) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("blog_token");
      this.$store.dispatch('currentUser/getUser');
    } else {
      window.location.replace("/login");
    }
  }
}
</script>