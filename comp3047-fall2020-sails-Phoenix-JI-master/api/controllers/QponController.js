/**
 * QponController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    Home: async function (req, res) {

       
        var everyqpons = await Qpon.find(

            { sort: 'updatedAt DESC' }
        );

        if (req.wantsJSON){
            return res.json(everyqpons);
        }

        return res.view('qpon/Home', { qpons: everyqpons });
    },

    getRest: async function(req,res){

        var mallQuery = req.params.mall || "";

        var filterQpons = await Qpon.find({

            where: {

                mall: { 'contains': mallQuery },

            },

            sort: 'updatedAt DESC'
        });

        if (req.wantsJSON){
            return res.json(filterQpons);
        }
    },

    create: async function (req, res) {

        if (req.method == "GET") return res.view('qpon/create');

        var qpon = await Qpon.create(req.body).fetch();

        const numOK = 0;

        return res.status(201).view('qpon/updateOK', { passOK: numOK });
    },

    json: async function (req, res) {

        var everqpons = await Qpon.find();

        return res.json(everqpons);
    },

    list: async function (req, res) {

        var everyqpons = await Qpon.find();

        return res.view('qpon/list', { qpons: everyqpons });
    },

    detail: async function (req, res) {

        var thatQpon = await Qpon.findOne(req.params.id);

        if (!thatQpon) return res.notFound();

        if (req.session.userRole == "Member" || req.session.userRole == "SystemAdmin") {

            var user = await User.findOne(req.session.userID).populate("qponOwns");

            var userqponOwns = user.qponOwns;

            if (req.wantsJSON) {
                return res.json(thatQpon);
            }

            return res.view('qpon/detail', { qpon: thatQpon, userQponOwns: userqponOwns });

        }

        if (req.wantsJSON) {
            return res.json(thatQpon);
        }

        return res.view('qpon/detail', { qpon: thatQpon });

    },

    update: async function (req, res) {

        if (req.method == "GET") {

            var thatQpon = await Qpon.findOne(req.params.id);

            if (!thatQpon) return res.notFound();

            return res.view('qpon/update', { qpon: thatQpon });

        } else {

            var updatedQpon = await Qpon.updateOne(req.params.id).set(req.body);

            if (!updatedQpon) return res.notFound();

            const numOK = 1;

            return res.view('qpon/updateOK', { passOK: numOK });
            
        }
    },

    delete: async function (req, res) {

        var deletedQpon = await Qpon.destroyOne(req.params.id);

        if (!deletedQpon) return res.notFound();

        const numOK = 2;

        return res.view('qpon/updateOK', { passOK: numOK });;
    },

    search: async function (req, res) {

        var areaQuery = req.query.area || "";
        var MinCoins = parseInt(req.query.minCoin) || -1;
        var MaxCoins = parseInt(req.query.maxCoin) || Number.MAX_SAFE_INTEGER;
        var expiryDateQuery = req.query.expiryDate || "9999-12-31";

        if (req.wantsJSON) {
            var limit = 2; // actually control the limit of search

            var offset = Math.max(req.query.offset, 0) || 0;

            var thoseQpons = await Qpon.find({

                where: {

                    area: { 'contains': areaQuery },
                    coins: { '>=': MinCoins, '<=': MaxCoins },
                    expiryDate: { '<=': expiryDateQuery }

                },

                limit: limit,
                skip: offset,

                sort: 'updatedAt DESC'
            });


            var numOfRecords = await Qpon.count({

                where: {

                    area: { 'contains': areaQuery },
                    coins: { '>=': MinCoins, '<=': MaxCoins },
                    expiryDate: { '<=': expiryDateQuery }

                }
            });

            if ( numOfRecords == 0) return res.status(401).json("Qpon not found");

            return res.json({ qpons: thoseQpons, numOfRecords: numOfRecords });	                   // for ajax request

        } else {

            var count = Qpon.count();

            return res.view('qpon/searchPagin', { NumOfRecord: count });

        }
    },


    populate: async function (req, res) {

        var qpon = await Qpon.findOne(req.params.id).populate("masters");

        if (!qpon) return res.notFound();

        var qponMaster = qpon.masters;

        //return res.json(qpon); 

        return res.view('qpon/redeemMember', { QponMaster: qponMaster });
    },



};

