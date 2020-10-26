module.exports = async function (req, res, next) {
  'user strict';

  var user = await User.findOne({
    id: req.session.passport.user
  });

  req.isAllGranted = req.isAllGranted || user.userRole == 'USER_ROLE_PUBLISHER';
  return next();
};
