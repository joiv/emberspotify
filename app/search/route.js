import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
    	query: {
      		refreshModel: true
    	}
  	},

  	model({ query }) {

    	return this.store.findRecord('search', query);
  	}
});
