<template>
    <Page>
        <StackLayout orientation="vertical">

            <StackLayout>
                <Image :src="RestInfo.imageLink" height="300"
                    stretch="aspectFill" />
            </StackLayout>

            <StackLayout>
                <Label :text="RestInfo.restaurant" class="h2" />
                <Label :text="RestInfo.tittle" class="h3" />
            </StackLayout>

            <StackLayout orientation="horizontal">
                <Label text="Mall: " class="h3" />
                <Label :text="RestInfo.mall" class="h3" />
            </StackLayout>
            <StackLayout orientation="horizontal">
                <Label text="Coins: " class="h3" />
                <Label :text="RestInfo.coins" class="h3" />
            </StackLayout>

            <StackLayout orientation="horizontal">
                <Label text="ExpoiryDate: " class="h3" />
                <Label :text="RestInfo.expiryDate" class="h3" />
            </StackLayout>


            <StackLayout orientation="horizontal" height="100">

                <Button class="h2 -primary -rounded-lg" text="Redeem"
                    @tap="onRedeemTap" width="180" />
                <Button class="h2 -primary -rounded-lg" text="Address"
                    @tap="onMapTap" width="180" />
            </StackLayout>

        </StackLayout>


    </Page>




</template>

<script>
    import Map from "./Map";
    export default {
        props: [
            "restInfo",
            "tappedRestIndex",
            "qponPass",
            "tappedRestID",
            "coinsRestInfo",
            "tappedCoinsIndex",
            "tappedMyRestIndex",
            "myQponPass"
        ],
        async mounted() {
            if (this.restInfo) this.RestInfo = this.restInfo[this
                .tappedRestIndex];
            if (this.qponPass) this.RestInfo = this.qponPass[this
                .tappedRestID];
            if (this.coinsRestInfo)
                this.RestInfo = this.coinsRestInfo[this.tappedCoinsIndex];
            if (this.myQponPass)
                this.RestInfo = this.myQponPass[this.tappedMyRestIndex];
        },
        methods: {
            onMapTap: function(args) {
                this.MapMalls = global.Malls;

                this.LMall = this.MapMalls.filter(
                    function(p) {
                        return p.name == this.RestInfo.mall;
                    }.bind(this)
                );

                this.$navigateTo(Map, {
                    transition: {},
                    props: {
                        LaInfo: this.LMall[0].latitude,
                        LoInfo: this.LMall[0].longitude,
                        MallName: this.RestInfo.mall
                    }
                });

                console.log("TO MAP");
            },

            onRedeemTap: async function() {
                var result = await confirm({
                    title: "Confirm to redeem this coupon?",

                    okButtonText: "Yes",
                    cancelButtonText: "Cancel"
                });
                if (result) {
                    var response = await fetch(
                        global.baseUrl + "/user/qponOwns/" + this
                        .RestInfo.id, {
                            method: "POST"
                        }
                    );

                    if (response.ok) {
                        var info = await response.json();
                        await alert(info);
                    } else {
                        var info = await response.json();
                        await alert(info);
                    }
                }
            }
        },
        data() {
            return {
                RestInfo: {},
                MapMalls: [],
                LMall: []
            };
        }
    };
</script>

<style>
</style>