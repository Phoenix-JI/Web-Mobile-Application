/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // action - create ; each block called action
    create: async function (req, res) {

        if (req.method == "GET") return res.view('person/create');

        var person = await Person.create(req.body).fetch(); // fetch to return the result

        return res.status(201).json({ id: person.id });
    },

    // json function
    json: async function (req, res) {

        var everyones = await Person.find(); // Person: db object

        return res.json(everyones);
    },

    // action - list
    list: async function (req, res) {

        var everyones = await Person.find();

        return res.view('person/list', { persons: everyones });
    },

    // action - read
    read: async function (req, res) {

        var thatPerson = await Person.findOne(req.params.id);

        if (!thatPerson) return res.notFound();

        return res.view('person/read', { person: thatPerson });
    },

    // action - delete 
    delete: async function (req, res) {

        var deletedPerson = await Person.destroyOne(req.params.id);

        if (!deletedPerson) return res.notFound();

        // return res.ok();
        if (req.wantsJSON) {
            return res.status(204).send();	    // for ajax request
        } else {
            return res.redirect('/');			// for normal request
        }

        // return res.redirect("/");
    },

    // action - update
    update: async function (req, res) {

        if (req.method == "GET") {

            var thatPerson = await Person.findOne(req.params.id);

            if (!thatPerson) return res.notFound();

            return res.view('person/update', { person: thatPerson });

        } else {

            var updatedPerson = await Person.updateOne(req.params.id).set(req.body);

            if (!updatedPerson) return res.notFound();

            return res.ok();
        }
    },

    // search function
    search: async function (req, res) {

        var whereClause = {};

        if (req.query.name) whereClause.name = { contains: req.query.name };

        var parsedAge = parseInt(req.query.age);
        if (!isNaN(parsedAge)) whereClause.age = parsedAge;

        var thosePersons = await Person.find({
            where: whereClause, // where: {name:'Kenny', age:12},
            sort: 'name'
        });

        return res.view('person/list', { persons: thosePersons });
    },

    // action - paginate
    paginate: async function (req, res) {

        var limit = Math.max(req.query.limit, 2) || 2;
        var offset = Math.max(req.query.offset, 0) || 0;

        var somePersons = await Person.find({
            limit: limit,
            skip: offset
        });

        var count = await Person.count();

        return res.view('person/paginate', { persons: somePersons, numOfRecords: count });
    },

    aginate: async function (req, res) {


        if (req.wantsJSON) {

            var limit = Math.max(req.query.limit, 2) || 2;
            var offset = Math.max(req.query.offset, 0) || 0;

            var somePersons = await Person.find({
                limit: limit,
                skip: offset
            });

            return res.json(somePersons);	                   // for ajax request

        } else {

            var count = await Person.count();
            return res.view('person/aginate', { numOfRecords: count });			// for normal request
        }

    },

    // action - vaginate
    vaginate: async function (req, res) {

        if (req.wantsJSON) {

            var limit = Math.max(req.query.limit, 2) || 2;
            var offset = Math.max(req.query.offset, 0) || 0;

            var somePersons = await Person.find({
                limit: limit,
                skip: offset
            });

            return res.json(somePersons);

        } else {

            var count = await Person.count();
            return res.view('person/vaginate', { numOfRecords: count });
        }
    },

    populate: async function (req, res) {

        var person = await Person.findOne(req.params.id).populate("consultants");

        if (!person) return res.notFound();

        return res.json(person); //Testing Testing
    },

};

