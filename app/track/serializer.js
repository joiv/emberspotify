import JSONSerializer from '../application/serializer';
import ERM from 'ember-data/serializers/embedded-records-mixin';

export default JSONSerializer.extend(ERM, {
	attrs: { 
		album: { embedded: 'always' },
		duration: { key: 'duration_ms' }
	},

	normalize(modelName, hash) {
		hash = hash.track || hash;
		return this._super(modelName, hash);
	} 
});
