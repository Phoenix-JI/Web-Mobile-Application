<template>

    <Page>
        <WebView :src="url" />
    </Page>


</template>

<script>
    export default {
        props: ["LaInfo", "LoInfo", "MallName"],
        async mounted() {
            console.log(this.LaInfo);
            console.log(this.LoInfo);
            console.log(this.MallName);
            this.url = encodeURI(
                this.Reurl +
                "center=" +
                this.LaInfo +
                "," +
                this.LoInfo +
                "&zoom=17&marker=" +
                this.MallName +
                "|" +
                this.LaInfo +
                "," +
                this.LoInfo +
                "&sensor="
            );
            console.log(this.url);
        },
        data() {
            return {
                Reurl: "https://leaflet-api.vercel.app?",

                url: ""
            };
        }
    }; //
</script>

<style>
</style>