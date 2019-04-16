

const unique = (name, persons) => {
  const person = persons.find(currentPerson => currentPerson.name === name);
  if (person) return false;
  return true;
};


exports.validate = (person, persons) => {
  const validation = {
    isValid: true,
    validations: [],
  };

  if (!person.name) {
    validation.isValid = false;
    validation.validations.push({
      type: 'name-required',
      message: 'Name is required',
    });
  }
  if (!person.number) {
    validation.isValid = false;
    validation.validations.push({
      type: 'number-required',
      message: 'Number is required',
    });
  }
  if (!unique(person.name, persons)) {
    validation.isValid = false;
    validation.validations.push({
      type: 'name-unique',
      message: 'Name must be unique',
    });
  }
  return validation;
};
