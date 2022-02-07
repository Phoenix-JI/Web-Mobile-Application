/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    login: async function (req, res) {

        console.log("login");

        if (req.method == "GET") return res.view('user/login');

        if (!req.body.username || !req.body.password) return res.badRequest();
        //return res.badRequest();

        var user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(401).json("User not found");

        var match = await sails.bcrypt.compare(req.body.password, user.password);

        if (!match) return res.status(401).json("Wrong Password");

        // Reuse existing session 
        if (!req.session.username) {
            req.session.username = user.username;
            req.session.userID = user.id;
            req.session.userRole = user.role;
         
            return res.json(user);
         
        }

        // Start a new session for the new login user
        req.session.regenerate(function (err) {

            if (err) return res.serverError(err);

            req.session.username = user.username;
            req.session.userID = user.id;
            req.session.userRole = user.role;
         
            return res.json(user);

        
        });
    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);

            if (req.wantsJSON) {
                return res.json("You have logged off");
            }

            return res.redirect("/");

        });


    },


    populate: async function (req, res) {

        if(!req.session.userID) return res.status(409).json("Cannot see the redeemed coupons. Please login first");

       // var user = await User.findOne(req.params.id).populate("qponOwns");

       var user = await User.findOne(req.session.userID).populate("qponOwns");

        if (!user) return res.notFound();

        var userQponGet = await user.qponOwns;
        var balance= await user.coin;

        if (req.wantsJSON) {
            return res.json(userQponGet);
        }


      //  return res.json(user);
        return res.view('user/redeemQpon', { UserQponGet: userQponGet, CurrBalance: balance});
    },

    add: async function (req, res) {

       if(!req.session.userID) return res.status(409).json("Cannot redeem coupons. Please login first");

        var thatQpon = await Qpon.findOne(req.params.fk).populate("masters", { id: req.session.userID });

        var user = await User.findOne(req.session.userID);

        if(thatQpon.masters.length>0)
            return res.status(409).json("Already redeemed. Cannot redeem again");

        if (thatQpon.coins > user.coin) return res.status(409).json("Coins not enough to redeem");

        if(thatQpon.quota < 1) return res.status(409).json("No quota for this qpon");

        
        //Redeem the Qpon

        await User.addToCollection(req.session.userID, "qponOwns").members(req.params.fk);

    
        var currentCoin = await user.coin - thatQpon.coins;

        await User.update({ coin: user.coin }).set({ coin: currentCoin }); // Update user's coins

        var currentQuota= await thatQpon.quota - 1;

        await Qpon.update({ quota: thatQpon.quota }).set({ quota: currentQuota }); // Update qpon's quota

        //console.log("Redeem successfully");

        if (req.wantsJSON) {
            return res.json("Qpon Redeemed Successfully");
        }

        return res.redirect("/");
    },



}