<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
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
  
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  </template>
  
  <script>
import axios from 'axios';

    export default {
      data: () => ({ drawer: null }),
      methods: {
        logout() {
            axios.post('/logout')
            .then( response => {
                window.location.href = "login"
            })
        }
      }
    }
  </script>