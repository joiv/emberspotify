import Ember from 'ember';

export default Ember.Route.extend({
	model({ owner_id, playlist_id }) {
		return this.store.findRecord('playlist', playlist_id, { adapterOptions: { owner_id }});
	}
});
