/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```


  sails.bcrypt = require('bcryptjs');
  var salt = await sails.bcrypt.genSalt(10);

  if (await Person.count() > 0) {
    return generateUsers();
  }

  await Person.createEach([
    { name: "Martin Choy", age: 23 },
    { name: "Kenny Cheng", age: 22 },
    // etc.
  ]);

  return generateUsers();

  async function generateUsers() {

    if (await User.count() > 0) {
      return;
    }

    var hash = await sails.bcrypt.hash('123456', salt);

    await User.createEach([
      { username: "admin", password: hash },
      { username: "boss", password: hash }
      // etc.
    ]);

    const martin = await Person.findOne({ name: "Martin Choy" });
    const kenny = await Person.findOne({ name: "Kenny Cheng" });
    const admin = await User.findOne({ username: "admin" });
    const boss = await User.findOne({ username: "boss" });

    await User.addToCollection(admin.id, 'clients').members(kenny.id);
    await User.addToCollection(boss.id, 'clients').members([martin.id, kenny.id]);

    // await User.createEach([
    // { username: "admin", password: '123456' },
    // { username: "boss", password: '123456' },
    // etc.
    //]);
  }
}