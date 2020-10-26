module.exports = async function (req, res, next) {
  'user strict';

  if (req.isAllGranted) {
    return next();
  } else {
    res.redirect('/admin/dashboard');
  }
};
