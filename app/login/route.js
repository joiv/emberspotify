import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		signIn() {
			this.get('session').open('application').then(() => {
				this.transitionTo('player');
			});
		}
	}
});
