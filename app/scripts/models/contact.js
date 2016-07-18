import $ from 'jquery'
import Backbone from 'backbone'
import settings from '../settings'

const Contact = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts`,
})

export default Contact
