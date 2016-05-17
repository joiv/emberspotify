import ApplicationSerializer from '../application/serializer';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {

  attrs: {
    tracks: { embedded: 'always' }
  },

  normalize(modelName, hash) {
    if (hash.tracks && hash.tracks.items) {
      hash.tracks = hash.tracks.items;
    } else {
      delete hash.tracks;
    }
    return this._super(modelName, hash);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    payload.id = id;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
