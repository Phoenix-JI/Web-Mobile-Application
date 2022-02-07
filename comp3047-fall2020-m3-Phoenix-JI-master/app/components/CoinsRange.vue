<template>
    <Page>

        <ListView for="cq in CoinQpons" @itemTap="onDetailTap">
            <v-template>
                <FlexboxLayout flexDirection="row">

                    <Label :text="cq.restaurant" />
                </FlexboxLayout>
            </v-template>
        </ListView>

    </Page>
</template>

<script>
    import DetailInfo from "./DetailInfo";

    export default {
        props: ["tappedCoinsIndex", "qponPass"],

        async mounted() {
            if (this.tappedCoinsIndex == 0) {
                this.CoinQpons = this.qponPass.filter(
                    function(p) {
                        return p.coins <= 500;
                    }.bind(this)
                );
            } else if (this.tappedCoinsIndex == 1) {
                this.CoinQpons = this.qponPass.filter(
                    function(p) {
                        return p.coins > 500 && p.coins < 1000;
                    }.bind(this)
                );
            } else if (this.tappedCoinsIndex == 2) {
                this.CoinQpons = this.qponPass.filter(
                    function(p) {
                        return p.coins >= 1000;
                    }.bind(this)
                );
            }
        },
        methods: {
            onDetailTap: function(args) {
                this.$navigateTo(DetailInfo, {
                    transition: {},
                    props: {
                        coinsRestInfo: this.CoinQpons,
                        tappedCoinsIndex: args.index
                    }
                });
            }
        },
        data() {
            return {
                CoinQpons: [],
                Rest: []
            };
        }
    };
</script>

<style>
</style>