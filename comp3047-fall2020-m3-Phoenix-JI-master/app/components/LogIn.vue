<template>
    <Page>
        <StackLayout class="m-10" orientation="vertical" height="180">

            <TextField v-model="nameValue" hint="Enter user name..."
                height="50" />

            <TextField keyboardType="phone" v-model="passwordValue"
                hint="Enter password..." height="50" />

            <Button class="h2 -primary -rounded-lg" text="LogIn" height="50"
                @tap="PassLogIN" />

        </StackLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            PassLogIN: async function(args) {
                var response = await fetch(global.baseUrl +
                "/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: this.nameValue,
                        password: this.passwordValue
                    })
                });

                if (response.ok) {
                    var user = response.json();
                    console.log(response.statusText);
                    await alert("Welcome back, " + this.nameValue);
                    global.username = this.nameValue;
                    this.$navigateBack();
                } else {
                    var info = await response.json();
                    await alert(info);
                }
            }
        },

        data() {
            return {};
        }
    };
</script>

<style>
</style>