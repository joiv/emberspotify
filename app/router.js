import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('player', {path:'/'});
  this.route('login');
});

export default Router;
