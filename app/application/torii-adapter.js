
import Ember from 'ember';

const { inject } = Ember;

export default Ember.Object.extend({

  store: inject.service(),
  token: inject.service(),

  open({ authorizationToken }) {
    this.get('token').store(authorizationToken.access_token);
    return this.fetch();
  },

  fetch() {
    return this.get('store').queryRecord('user', {}).then((currentUser) => ({ currentUser }));
  }
});