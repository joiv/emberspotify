import JSONSerializer from '../application/serializer';

export default JSONSerializer.extend({
	normalize(modelName, hash) {
		hash.avatar = hash.images[0].url;
		debugger;
		return this._super(modelName, hash);
	}
});
