<<<<<<< HEAD
import Model from 'ember-data/model';
<<<<<<< HEAD
import attr from 'ember-data/attr';

export default Model.extend({
	displayName: attr('string'),
	avatar: attr('string'),
=======
import DS from 'ember-data';

export default Model.extend({
	playlists: DS.hasMany('playlist', { inverse: 'user' }),
	displayName: DS.attr('string'),
	avatar: DS.attr('string'),
>>>>>>> ember-spotify-joiv
=======
import DS from 'ember-data';

export default DS.Model.extend({
	playlists: DS.hasMany('playlist', { inverse: 'user' }),
	displayName: DS.attr('string'),
	avatar: DS.attr('string'),
>>>>>>> gh-pages
});
