import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  rating: DS.attr(),
  product: DS.belongsTo('product', { async: true }),
});
