import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	name: DS.attr(),
	duration: DS.attr(),
	popularity: DS.attr(),
	previewUrl: DS.attr(),
	artists: DS.attr(),
	album: DS.belongsTo(),
});
