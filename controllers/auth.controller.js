exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
  });
};

exports.getSignIn = (req, res, next) => {
  res.render("auth/sign-in", {
    pageTitle: "Sign In",
  });
};
