<template>
    <Page>

        <ListView for="rest in Rest" @itemTap="onDeIfoTap">
            <v-template>
                <FlexboxLayout flexDirection="row">

                    <Label :text="rest.restaurant" />
                </FlexboxLayout>
            </v-template>
        </ListView>

    </Page>
</template>

<script>
    import DetailInfo from "./DetailInfo";

    export default {
        props: ["tappedMall", "qponPass"],

        async mounted() {
            this.Rest = this.qponPass.filter(
                function(p) {
                    return p.mall == this.tappedMall;
                }.bind(this)
            );
            //console.log(this.tappedMall + "**");
        },

        methods: {
            onDeIfoTap: function(args) {
                this.$navigateTo(DetailInfo, {
                    transition: {},
                    props: {
                        restInfo: this.Rest,
                        tappedRestIndex: args.index
                    }
                });
            }
        },
        data() {
            return {
                Qpons: [],

                Rest: []
            };
        }
    };
</script>

<style>
</style>