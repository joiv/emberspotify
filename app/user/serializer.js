import JSONSerializer from '../application/serializer';

export default JSONSerializer.extend({
	normalize(modelName, hash) {
		hash.avatar = hash.images[0].url;
<<<<<<< HEAD
<<<<<<< HEAD
		debugger;
=======
		hash.links = { playlists: 'playlists' };
>>>>>>> ember-spotify-joiv
=======
		hash.links = { playlists: 'playlists' };

>>>>>>> gh-pages
		return this._super(modelName, hash);
	}
});
