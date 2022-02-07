// isAdmin.js
module.exports = async function (req, res, proceed) {

    //const isUserAdmin = true;

    if (req.session.userRole == 'SystemAdmin') {
        return proceed();   //proceed to the next policy,
    }

    //--•
    // Otherwise, this request did not come from a logged-in user.
    return res.forbidden();
};