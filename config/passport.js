var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  bcrypt = require("bcrypt");

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    let user = await User.findOne({ id });

    if (!user) {
      return cb(new Error("That user doesnt exist."));
    }
    cb(null, user);
  } catch (e) {
    cb(e);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passportField: "password",
    },
    async function (email, password, cb) {
      let user;

      try {
        user = await User.findOne({
          email: email,
        });

        if (!user) {
          return cb(null, false, {
            message: "No user by that email",
          });
        }
      } catch (e) {
        return cb(e);
      }

      let hashedPasswordCompare = bcrypt.compareSync(password, user.password);

      if (hashedPasswordCompare) {
        return cb(null, user, {
          message: "Login Succesful",
        });
      } else {
        return cb(null, false, {
          message: "Invalid Password",
        });
      }
    }
  )
);
