import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({

  urlForFindRecord(id, modelName, snapshot) {
<<<<<<< HEAD
=======
  	this._super(id, modelName, snapshot);
>>>>>>> gh-pages
    return this.urlPrefix(`search?type=track&q=${id}`, this.urlPrefix());
  }
});
