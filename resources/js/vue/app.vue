<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
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
      <div class="todoListContainer">
        <div class="heading">
          <h2 id="title">TodoList</h2>
          <add-item-form v-on:reloadlist="getList()" :editItem="editItem" />
        </div>
        <list-view :items="items" v-on:reloadlist="getList()" @custom-click="edit" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import addItemForm from "./addItemForm.vue";
import listView from "./listView.vue";

export default {
  components: {
    addItemForm,
    listView,
  },
  data: function () {
    return {
      items: [],
      editItem: null,
      drawer: null
    };
  },
  methods: {
    getList() {
      axios
        .get("api/items")
        .then((response) => {
          this.items = response.data;
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    edit(edit) {
      this.editItem = this.items.find(i => i.name === edit);
    },
    logout() {
      axios.post('/logout')
        .then(response => {
          window.location.href = "login"
        })
    }
  },
  created() {
    this.getList();
    console.log("create success!");
  },
};
</script>

<style scoped>
.todoListContainer {
  width: 350px;
  margin: auto;
}

.heading {
  background: #e6e6e6;
  padding: 10px;
}

#title {
  text-align: center;
}
</style>