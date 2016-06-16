import Ember from 'ember';

export default Ember.Component.extend({

  displayStarRating: Ember.computed('feedback.rating', function() {
    if (this.get('feedback.rating') === 1) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('feedback.rating') === 2) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('feedback.rating') === 3) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('feedback.rating') === 4) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('feedback.rating') === 5) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>'
      );
    } else {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    }
  }),

});
