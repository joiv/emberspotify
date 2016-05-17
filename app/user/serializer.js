import JSONSerializer from '../application/serializer';

export default JSONSerializer.extend({
	normalize(modelName, hash) {
		hash.avatar = hash.images[0].url;
		hash.links = { playlists: 'playlists' };
		return this._super(modelName, hash);
	}
});
