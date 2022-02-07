<template>
    <Page @loaded="refresh">
        <ActionBar title="Home" />

        <StackLayout>
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Malls"></Label>
                        <Image src="res://favorites"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Coins"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="User"></Label>
                        <Image src="res://browse"></Image>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>

                    <ListView for="qpon in Qpons" @itemTap="onDetailTap">
                        <v-template>
                            <StackLayout>

                                <StackLayout>
                                    <Image :src="qpon.imageLink" height="300"
                                        stretch="aspectFill" />
                                </StackLayout>
                                
                                <StackLayout>
                                    <Label :text="qpon.restaurant"
                                        class="h2" />
                                    <Label :text="qpon.detail" class="h3" />
                                </StackLayout>

                                <StackLayout orientation="horizontal">
                                    <Label text="Coins: " class="h3" />
                                    <Label :text="qpon.coins" class="h3" />
                                </StackLayout>

                            </StackLayout>
                        </v-template>
                    </ListView>

                </TabContentItem>
                <TabContentItem>

                    <ListView for="mall in Malls" @itemTap="onItemTap">
                        <v-template>
                            <FlexboxLayout flexDirection="row">

                                <Label :text="mall.name" class="t-12" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>

                </TabContentItem>
                <TabContentItem>
                    <ListView for="coin in Coins" @itemTap="onCoinsTap">
                        <v-template>
                            <FlexboxLayout flexDirection="row">

                                <Label :text="coin" class="t-12" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>

                    <StackLayout>
                        <Label width="50" height="50" />
                        <StackLayout orientation="horizontal">

                            <Image :src="ImageSrc" width="300" height="150" />
                            <Label :text="GlobalUN" textAlignment="left"
                                width="150" height="150" fontSize="30" />
                        </StackLayout>
                        <Label width="100" height="100" />

                        <Button class="h2 -primary -rounded-lg"
                            text="Login / Logoff" @tap="logInTap" />
                        <Button class="h2 -primary -rounded-lg"
                            text="My Redeemed Coupons" @tap="myQponTap" />

                    </StackLayout>

                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import Restaurant from "./Restaurant";
    import CoinsRange from "./CoinsRange";
    import DetailInfo from "./DetailInfo";
    import LogIn from "./LogIn";
    import MyQpon from "./MyQpon";

    export default {
        async mounted() {
            this.GlobalUN = global.username;
            this.Malls = global.Malls;
            this.ImageSrc = "";
            var response = await fetch(global.baseUrl);
            if (response.ok) {
                this.Qpons = await response.json();
            } else {}
        },
        methods: {
            refresh: function() {
                this.GlobalUN = global.username;

                if (!global.username == "") {
                    this.ImageSrc =
                        "https://i0.hdslb.com/bfs/archive/bb2cba8f4f74604ce4726f10fcbb65c997ef41e7.jpg";
                }
            },
            onItemTap: function(args) {
                this.$navigateTo(Restaurant, {
                    transition: {},
                    props: {
                        tappedMall: args.item.name,
                        qponPass: this.Qpons
                    }
                });
            },
            onDetailTap: function(args) {
                this.$navigateTo(DetailInfo, {
                    transition: {},
                    props: {
                        tappedRestID: args.index,
                        qponPass: this.Qpons
                    }
                });
            },
            onCoinsTap: function(args) {
                this.$navigateTo(CoinsRange, {
                    transition: {},
                    props: {
                        tappedCoinsIndex: args.index,
                        qponPass: this.Qpons
                    }
                });
            },
            logInTap: async function(args) {
                if (global.username == "") {
                    this.$navigateTo(LogIn, {
                        transition: {},
                        props: {}
                    });
                } else {
                    var result = await confirm({
                        title: "Confirm to logoff?",
                        okButtonText: "Yes",
                        cancelButtonText: "Cancel"
                    });

                    if (result) {
                        var response = await fetch(
                            global.baseUrl + "/user/logout", {
                                method: "POST"
                            }
                        );
                        global.username = "";
                        this.ImageSrc = "";
                        this.GlobalUN = "";
                        if (response.ok) {
                            var info = await response.json();
                            await alert(info);
                        }
                    }
                }
            },

            myQponTap: async function(args) {
                var response = await fetch(global.baseUrl +
                    "/user/qponOwns");
                if (response.ok) {
                    this.MyQpon = await response.json();

                    this.$navigateTo(MyQpon, {
                        transition: {},
                        props: {
                            qponPass: this.MyQpon
                        }
                    });
                } else {
                    var info = await response.json();
                    await alert(info);
                }
            }
        },
        data() {
            return {
                Coins: ["Coins <=500 ", "500 < Coins < 1000 ",
                    "Coins >= 1000 "
                ],

                Malls: [],

                Qpons: [],

                MyQpon: [],

                GlobalUN: "",

                ImageSrc: "https://i0.hdslb.com/bfs/archive/bb2cba8f4f74604ce4726f10fcbb65c997ef41e7.jpg"
            };
        }
    };
</script>



<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>