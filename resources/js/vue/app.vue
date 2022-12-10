<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <add-item-form v-on:reloadlist="getList()" :editItem="editItem" /> 
        </v-col>   
      </v-row>
      <v-row>
        <v-col cols="12">
          <list-view :items="items" v-on:reloadlist="getList()" @custom-click="edit" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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