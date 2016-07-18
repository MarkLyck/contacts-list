import Backbone from 'backbone'
import Contact from '../models/contact'
import settings from '../settings'


let Contacts = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts`,
  model: Contact
});

let contactCollection = new Contacts()

export default contactCollection
