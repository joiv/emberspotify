import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
	urlForQueryRecord() {
		let baseUrl = this.buildURL();
		return `${baseUrl}/me`;
	}
});
