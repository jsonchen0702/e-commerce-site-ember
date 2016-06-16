import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('foods');
  this.route('item', {path: '/item/:item_id'});
  this.route('cart');
  this.route('drinks');
});

export default Router;
