import Ember from 'ember';

export default Ember.Controller.extend({
	player: Ember.inject.service('player'),
	query: '',
	actions: {
		toggle() {
			let player = this.get('player');
			if(player.get('track')) {
				if(player.get('isPlaying')) {
					player.pause();
				} else {
					player.play();
				}
			}
		},
		search() {
			let query = this.get('query');
			this.transitionToRoute('search', { queryParams: { query }});
			// debugger;
		}
	}
});
