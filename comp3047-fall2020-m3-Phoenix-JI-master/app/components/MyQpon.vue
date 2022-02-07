<template>
    <Page>

        <ListView for="qpon in MyQpons" @itemTap="onDetailTap">
            <v-template>
                <FlexboxLayout flexDirection="row">

                    <Label :text="qpon.restaurant" />
                </FlexboxLayout>
            </v-template>
        </ListView>

    </Page>
</template>

<script>
    import DetailInfo from "./DetailInfo";

    export default {
        props: ["qponPass"],
        async mounted() {
            this.MyQpons = this.qponPass;
        },

        methods: {

            onDetailTap: function(args) {
                this.$navigateTo(DetailInfo, {
                    transition: {},
                    props: {
                        tappedMyRestIndex: args.index,
                        myQponPass: this.MyQpons
                    }
                });
            },

        },
        data() {
            return {
                MyQpons: []
            };
        }
    };
</script>

<style>
</style>