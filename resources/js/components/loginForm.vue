<template>
    <v-app>
        <v-main>
            <v-container fill-height>
                <v-card width="400px" class="mx-auto">
                    <v-card-title>
                        <h1 class="display-1">ログイン</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field prepend-icon="mdi-account-circle" label="メールアドレス" v-model="user.email" />
                            <v-text-field prepend-icon="mdi-lock" label="パスワード" v-model="user.password"
                                v-bind:type="showPassword ? 'text' : 'password'"
                                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword" />
                            <v-card-actions>
                                <v-btn class="info" @click="login">ログイン</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>

export default {
    name: 'App',
    data: () => ({
        showPassword: false,
        user: {
            email: "",
            password: ""
        }
    }),
    methods: {

        login() {
            this.$store.dispatch('currentUser/loginUser', this.user);
        }
    }
};
</script>