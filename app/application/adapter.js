import RESTAdapter from 'ember-data/adapters/rest';
import Ember from 'ember';

export default RESTAdapter.extend({
	token: Ember.inject.service(),
	host: 'https://api.spotify.com',
  	namespace: 'v1',
	headers: Ember.computed('token', function() {
    	return {
      		"Authorization": `Bearer ${this.get('token').retreive()}`
    	};
  	}).volatile()

});
