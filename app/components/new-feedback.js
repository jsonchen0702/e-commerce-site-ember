import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveFeedback() {
      var params = {
        username: this.get('username'),
        rating: parseInt(this.get('rating')),
        comment: this.get('comment'),
        time: moment().format('LL'),
        item: this.get('item'),
      };
      this.sendAction('saveFeedback', params);
      this.set('username', "");
      this.set('rating', "");
      this.set('comment', "");
    },
  }
});
