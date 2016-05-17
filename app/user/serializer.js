import JSONSerializer from '../application/serializer';

export default JSONSerializer.extend({
	normalize(modelName, hash) {
		hash.avatar = hash.images[0].url;
<<<<<<< HEAD
		debugger;
=======
		hash.links = { playlists: 'playlists' };
>>>>>>> ember-spotify-joiv
		return this._super(modelName, hash);
	}
});
