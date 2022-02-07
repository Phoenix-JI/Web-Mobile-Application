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

  if (await Qpon.count() > 0) {
    return generateUsers();
  }

  await Qpon.createEach([

    { tittle: "1000% discount", restaurant: "TeaWood", quota: 0, coins: 1000, expiryDate: "2020-10-29", area: "Kowloon", mall: "Elements", detail: "Taiwan Food Sweet", imageLink: "https://cdn.asiatatler.com/asiatatler/i/hk/2020/02/12125015-louise-hong-kong-instagrammable-restaurants-2020-hong-kong-tatler_cover_1800x1200.jpg" },
    { tittle: "20% discount", restaurant: "LUX", quota: 1, coins: 100, expiryDate: "2019-12-31", area: "Kowloon", mall: "Elements", detail: "Chinese Food Taste", imageLink: "https://assets.feedmeguru.com/article/e7d3647db94a0f814a4cf66799adb14a.jpg" },
    { tittle: "30% discount", restaurant: "CUH", quota: 3, coins: 200, expiryDate: "2020-09-30", area: "Kowloon", mall: "Harbour City", detail: "Hong Kong Food Taste ", imageLink: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb" },
    { tittle: "30% discount", restaurant: "HKU", quota: 60, coins: 300, expiryDate: "2020-10-30", area: "Kowloon", mall: "APM", detail: "Thailand Food Taste ", imageLink: "https://www.hongkong.grand.hyattrestaurants.com/wp-content/uploads/2018/08/Grissini-dinner-menu.png" },
    { tittle: "40% discount", restaurant: "UST", quota: 100, coins: 400, expiryDate: "2020-10-31", area: "Kowloon", mall: "Festival Walk", detail: "Vietnam Food Taste ", imageLink: "https://www.therestaurant.be/wp-content/uploads/2019/01/The_restaurant_097.jpg" },
    { tittle: "45% discount", restaurant: "POLU", quota: 150, coins: 500, expiryDate: "2020-11-10", area: "Kowloon", mall: "MegaBox", detail: "Singapore Food Taste ", imageLink: "https://spice-restaurant.hk/wp-content/uploads/2019/01/IMG_9491.jpg" },
    { tittle: "50% discount", restaurant: "RRS", quota: 200, coins: 600, expiryDate: "2020-11-15", area: "New_Territories", mall: "New Town Plaza", detail: "Japanese Food Taste ", imageLink: "https://media-cdn.tripadvisor.com/media/photo-s/18/5e/17/62/restaurant.jpg" },
    { tittle: "55% discount", restaurant: "AAB", quota: 250, coins: 700, expiryDate: "2020-11-20", area: "New_Territories", mall: "New Town Plaza", detail: "Korean Food Taste ", imageLink: "https://static.wixstatic.com/media/711a3e_9e7ae5f829ee4aadbcac4903d322c2a7~mv2.jpg/v1/fill/w_646,h_458,al_c,q_80,usm_0.66_1.00_0.01/50s_environment2.webp" },
    { tittle: "60% discount", restaurant: "WLB", quota: 300, coins: 800, expiryDate: "2020-11-25", area: "New_Territories", mall: "Tsuen Wan Plaza", detail: "Britaish Food Taste ", imageLink: "https://eshop.harbourgrand.com/hongkong/wp-content/uploads/2020/02/le-188-restaurant-lounge_d.jpg" },
    { tittle: "65% discount", restaurant: "DLB", quota: 350, coins: 900, expiryDate: "2020-11-30", area: "New_Territories", mall: "Tsuen Wan Plaza", detail: "French Food Taste ", imageLink: "https://cdn.asiatatler.com/asiatatler/i/hk/2020/07/24122453-o-17july20-1_cover_2000x1500.jpg" },
    { tittle: "70% discount", restaurant: "HGC", quota: 400, coins: 1000, expiryDate: "2020-12-01", area: "HK_Island", mall: "IFC Mall", detail: "German Food Taste ", imageLink: "https://res.cloudinary.com/hio22hxcn/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_534,q_auto,w_800/v1565620291/s3cstvj2b397nnsozcdj" },
    { tittle: "75% discount", restaurant: "HALL", quota: 600, coins: 1100, expiryDate: "2020-12-11", area: "HK_Island", mall: "Pacific Place", detail: "Italian Food Taste", imageLink: "https://restaurantengine.com/wp-content/uploads/2019/01/Great-Small-Restaurant-Interior-Designs-660x440.jpg" },
    { tittle: "80% discount", restaurant: "CVA", quota: 700, coins: 1200, expiryDate: "2020-12-21", area: "HK_Island", mall: "Pacific Place", detail: "Fast Food Taste ", imageLink: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=6&m=1018141890&s=612x612&w=0&h=_OmlYECOxfO-VHY3eIzuJSPRXUXiFbeHHp3RUZGQoSQ=" },
    { tittle: "85% discount", restaurant: "LT1", quota: 800, coins: 1300, expiryDate: "2020-12-31", area: "HK_Island", mall: "Times Square", detail: "Canada Food Taste ", imageLink: "https://vistapointe.net/images/restaurant-3.jpg" },

    { tittle: "90% discount", restaurant: "FSC", quota: 900, coins: 1500, expiryDate: "2021-01-01", area: "Kowloon", mall: "APM", detail: "American Food Taste ", imageLink: "https://member.hkjc.com/member/common/images/beas-river-country-club/restaurants-and-bars/2020-old-clubhouse-restaurant-and-bar-02.jpg" },
    { tittle: "95% discount", restaurant: "OEE", quota: 1000, coins: 2000, expiryDate: "2021-01-11", area: "New_Territories", mall: "Tsuen Wan Plaza", detail: "European Food Taste ", imageLink: "https://2c6disor5j62kph211fg7v42-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Impossible-Burger-Ruby-Tuesday-Restaurant-Hong-Kong.jpg" },
    { tittle: "99% discount", restaurant: "OEM", quota: 1100, coins: 2100, expiryDate: "2021-01-21 ", area: "HK_Island", mall: "Times Square", detail: "Pacific Food Taste ", imageLink: "https://rubytuesday.com.hk/wp-content/uploads/2019/07/Web_Loaded-Nachos.jpg" }

    // etc.
  ]);

  return generateUsers();

  async function generateUsers() {

    if (await User.count() > 0) {
      return;
    }

    var hash0 = await sails.bcrypt.hash('123456', salt);
    var hash1 = await sails.bcrypt.hash('654321', salt);
  

    await User.createEach([
      { username: "John", password: hash0, role: "SystemAdmin" },
      { username: "Kevin", password: hash0, role: "SystemAdmin" },
      { username: "Felix", password: hash1, role: "Member", coin:20000 },
      { username: "Phoenix", password: hash1, role: "Member", coin:5000 },
     // { username: "Eric", role: "Non-member" },
     // { username: "Louis", },
      // etc.
    ]);
  }


};
