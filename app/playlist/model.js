import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	user: DS.belongsTo('user', { inverse: 'playlists' }),
	owner: DS.belongsTo('user', { inverse: null }),
	name: DS.attr('string'),
	tracks: DS.hasMany(),
});
