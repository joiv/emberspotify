import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	playlists: DS.hasMany('playlist', { inverse: 'user' }),
	displayName: DS.attr('string'),
	avatar: DS.attr('string'),
});
