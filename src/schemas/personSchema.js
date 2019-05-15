const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: [true, 'is required field'],
    unique: true,
  },
  number: {
    type: String,
    minlength: 8,
    required: [true, 'is required field'],
  },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: returnedObject._id,
    name: returnedObject.name,
    number: returnedObject.number,
  }),
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
