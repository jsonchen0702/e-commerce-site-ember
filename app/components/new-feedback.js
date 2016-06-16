import Ember from 'ember';
import moment from 'moment';

var clearStars = function() {
  $('.star-rating-selection').removeClass('selected-rating');
}

export default Ember.Component.extend({
  actions: {
    saveFeedback() {
      var params = {
        username: this.get('username'),
        rating: 0,
        comment: this.get('comment'),
        time: moment().format('LL'),
        item: this.get('item'),
      };
      this.sendAction('saveFeedback', params);
      this.set('username', "");
      this.set('rating', "");
      this.set('comment', "");
      clearStars();
    },
    rateOneStar() {
      clearStars();
      this.set('rating', 1);
      $('#rateOneStar').addClass('selected-rating');
    },
    rateTwoStar() {
      clearStars();
      this.set('rating', 2);
      $('#rateTwoStar').addClass('selected-rating');
    },
    rateThreeStar() {
      clearStars();
      this.set('rating', 3);
      $('#rateThreeStar').addClass('selected-rating');
    },
    rateFourStar() {
      clearStars();
      this.set('rating', 4);
      $('#rateFourStar').addClass('selected-rating');
    },
    rateFiveStar() {
      clearStars();
      this.set('rating', 5);
      $('#rateFiveStar').addClass('selected-rating');
    },
  }
});
