import JSONSerializer from '../application/serializer';
import ERM from 'ember-data/serializers/embedded-records-mixin';

export default JSONSerializer.extend(ERM, {
	
	attrs: { tracks: { embedded: 'always' }},

	normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
		return this._super(store, primaryModelClass, payload.items, id, requestType);
	},

	normalize(modelName, hash) {
		if(hash.tracks.items) {
			hash.tracks = hash.tracks.items;
		} else {
			delete hash.tracks;
		}
		return this._super(modelName, hash);
	} 
});
