import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('player', {path:'/'}, function() { 
      this.route('playlist', { path: '/playlists/:owner_id/:playlist_id', resetNamespace: true });
      this.route('album', { path: '/albums/:album_id', resetNamespace: true });
      this.route('search', { resetNamespace: true }); //, { path: '/search/:'});
  });
  this.route('login');
  // this.route('search');
});

export default Router;
