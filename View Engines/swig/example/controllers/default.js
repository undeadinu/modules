exports.install = function(framework) {
	framework.route('/', view_homepage);
};

function view_homepage() {
	var self = this;
	self.view('index', { pagename: 'awesome people', authors: ['Paul', 'Jim', 'Jane'] });
}