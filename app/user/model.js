import DS from 'ember-data';

export default DS.Model.extend({
	playlists: DS.hasMany('playlist', { inverse: 'user' }),
	displayName: DS.attr('string'),
	avatar: DS.attr('string'),
});
