Router.configure({
  layoutTemplate: "main_layout_template"
});

Router.route('/', function () {
  this.render('page_home');
  this.layout("main_layout_template");
  document.title = "Home";
});

Router.route('/contact_us', function () {
  this.render('page_contact_us');
  this.layout("main_layout_template");
  document.title = "Contact Us";
});
