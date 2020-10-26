module.exports = async function (req, res, next) {
  'user strict';

  console.log(req.session.passport.user);

  var user = await User.findOne({
    id: req.session.passport.user
  });

  req.isAllGranted = req.isAllGranted || user.userRole == 'USER_ROLE_SUPER_ADMIN';
  return next();
};
