import $ from 'jquery'
import Backbone from 'backbone'
import settings from '../settings'

const Contact = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    username: ''
  },
  urlRoot: `https://bass.kinvey.com/appdata/${settings.appKey}/contacts`,
})
