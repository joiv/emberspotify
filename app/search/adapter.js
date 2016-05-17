import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({

  urlForFindRecord(id, modelName, snapshot) {
    return this.urlPrefix(`search?type=track&q=${id}`, this.urlPrefix());
  }
});
