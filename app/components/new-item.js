import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: parseFloat(this.get('price')),
        image: this.get('image'),
      };
      this.sendAction('saveItem', params);
      this.set('name', "");
      this.set('description', "");
      this.set('price', "");
      this.set('image', "");
    }
  }
});
