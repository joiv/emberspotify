import Ember from 'ember';

const TOKEN_KEY = 'ember-spotify-token';

export default Ember.Service.extend({
	clear() {
 	   	localStorage.removeItem(TOKEN_KEY);
 	},

  	retreive() {
    	return localStorage[TOKEN_KEY];
  	},

  	store(token) {
    	localStorage.setItem(TOKEN_KEY, token);
  	}
});
