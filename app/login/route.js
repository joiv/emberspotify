import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		if(this.get('session.isAuthenticated')) {
			this.transitionTo('player');
		}
	},
	actions: {
		signIn() {
			this.get('session').open('application').then(() => {
				this.transitionTo('player');
			});
		}
	}
});
