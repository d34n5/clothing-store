import Ember from 'ember';

export default Ember.Component.extend({
  addedToCart: false,

  description: Ember.computed('product.name', 'product.cost', function() {
    return this.get('product.name') + ' for $' + this.get('product.cost');
  }),

  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
      this.set('addedToCart', true);
    },
  }
});
