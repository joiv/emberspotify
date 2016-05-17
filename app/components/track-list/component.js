import Ember from 'ember';

export default Ember.Component.extend({
	tracks: null,
	player: Ember.inject.service('player'),
	actions: { 
		play(track) {
			this.get('player').playTrack(track);
		},
	}
});
