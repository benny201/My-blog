module.exports = {
  checkLogin: function(req, res, next) {
    if (!req.session.user) {
      req.flash('error', '请登录!');
      return res.redirect('/login');
    }
    next();
  },

  checkNotLogin: function(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录！');
      return res.redirect('back');
    }
    next();

  }

};
