const fs = require('fs');
const persons = require('./persons.json');
const personValidation = require('./personValidation');

const updateFile = (jsonString) => {
  fs.writeFileSync('./persons.json', jsonString, (err) => {
    if (err) {
      console.error('Error while writing to file:', err);
    } else {
      console.log('Successfully wrote to file.');
    }
  });
};

exports.findAll = () => {
  try {
    return persons;
  } catch (e) {
    const message = `Failed to get persons: ${e}`;
    console.error(message);
    return {
      type: 'Error',
      status: 500,
      message,
    };
  }
};

exports.findOne = (personId) => {
  try {
    const person = persons.find(currentPerson => currentPerson.id === personId);
    if (person) {
      return person;
    }

    return {
      type: 'Error',
      status: 404,
      message: `Could not find person with an id: ${personId}`,
    };
  } catch (e) {
    const message = `Failed to get person with an id: ${personId}, ${e}`;
    console.error(message);
    return {
      type: 'Error',
      status: 500,
      message,
    };
  }
};

exports.create = (newPersonData) => {
  const validation = personValidation.validate(newPersonData, persons);
  console.log(validation.validations);
  if (!validation.isValid) {
    return {
      type: 'Error',
      status: '400',
      message: validation.validations.map(current => current.message).join(', '),
    };
  }

  const id = persons.length;
  const newPerson = { ...newPersonData, id: id + 1 };

  try {
    persons.push(newPerson);
    const jsonString = JSON.stringify(persons, null, 2);
    updateFile(jsonString);
    return newPerson;
  } catch (e) {
    const message = `Failed to create new person: ${e}`;
    console.error(message);
    return {
      type: 'Error',
      status: 500,
      message,
    };
  }
};

exports.remove = (personId) => {
  try {
    const person = persons.find(currentPerson => currentPerson.id === personId);
    if (person) {
      const updatedPersons = persons.filter(currentPerson => currentPerson.id !== personId);
      const jsonString = JSON.stringify(updatedPersons, null, 2);
      updateFile(jsonString);
      return {};
    }
    return {
      type: 'Error',
      status: 404,
      message: `Could not find person with an id: ${personId}`,
    };
  } catch (e) {
    const message = `Failed to update person: ${e}`;
    return {
      type: 'Error',
      status: 500,
      message,
    };
  }
};
