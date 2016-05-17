import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
	urlForFindRecord(id, modelName, snapshot) {
		let baseUrl = this.buildURL();
		return `${baseUrl}/users/${snapshot.adapterOptions.owner_id}/playlists/${id}`;
	}
});
