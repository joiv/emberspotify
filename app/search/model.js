import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  tracks: DS.hasMany({ inverse: null }),
});
