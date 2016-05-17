import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	displayName: attr('string'),
	avatar: attr('string'),
});
