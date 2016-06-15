import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: parseFloat(this.get('price')),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.sendAction('saveItem', params);
      this.set('name', "");
      this.set('description', "");
      this.set('price', "");
      this.set('image', "");
      this.set('category', "");
    },
    selectCategory(category) {
      this.set('category', category);
    }
  }
});
