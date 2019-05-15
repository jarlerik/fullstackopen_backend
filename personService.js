const mongoose = require('mongoose');
const Person = require('./schemas/personSchema');
const AppError = require('./error');

const password = process.env.MONGO_DB_URI;

const url = `mongodb+srv://fullstackopen:${password}@cluster0-0dslf.mongodb.net/people-app?retryWrites=true`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false,
});


const findAll = async () => {
  try {
    const data = await Person.find();

    const response = {
      data,
      status: 200,
    };
    return response;
  } catch (error) {
    throw new AppError({
      name: 'ServerError',
      fileName: __filename,
      lineNumber: 23,
      message: error.message,
      status: 500,
    });
  }
};

const findOne = async (personId) => {
  try {
    const data = await Person.findById(personId);
    if (data === null) {
      throw new AppError({
        name: 'NotFound',
        fileName: __filename,
        lineNumber: 37,
        message: `Person with id:${personId} not found`,
        status: 404,
      });
    }
    return {
      data,
      status: 200,
    };
  } catch (error) {
    // 404 error create up above, just throw it.
    if (error.status === 404) throw error;
    // id was malformatted.
    if (error.name === 'CastError') {
      throw new AppError({
        name: 'BadRequest',
        fileName: __filename,
        lineNumber: 51,
        message: 'Malformadded id',
        status: 400,
      });
    }
    // something else happened.
    throw new AppError({
      name: 'ServerError',
      fileName: __filename,
      lineNumber: 60,
      message: error.message,
      status: 500,
    });
  }
};

const create = async ({ name, number }) => {
  try {
    const person = new Person({ name, number });

    const data = await person.save();
    return {
      data,
      status: 200,
    };
  } catch (error) {
    if (error.message.indexOf('duplicate key error') !== -1) {
      throw new AppError({
        name: 'BadRequest',
        fileName: __filename,
        lineNumber: 82,
        message: 'Name is already taken.',
        status: 400,
      });
    }

    if (error.name === 'ValidationError') {
      throw new AppError({
        name: 'BadRequest',
        fileName: __filename,
        lineNumber: 82,
        message: error.message,
        status: 400,
      });
    }
    throw new AppError({
      name: 'ServerError',
      fileName: __filename,
      lineNumber: 80,
      message: error.message,
      status: 500,
    });
  }
};

const update = async ({ id, name, number }) => {
  try {
    const data = await Person.findByIdAndUpdate(id, { name, number }, { new: true, omitUndefined: true });
    return {
      data,
      status: 200,
    };
  } catch (error) {
    if (error.message.indexOf('duplicate key error') !== -1) {
      throw new AppError({
        name: 'BadRequest',
        fileName: __filename,
        lineNumber: 82,
        message: 'Name is already taken.',
        status: 400,
      });
    }
    throw new AppError({
      name: 'ServerError',
      fileName: __filename,
      lineNumber: 80,
      message: error.message,
      status: 500,
    });
  }
};

const remove = async (personId) => {
  try {
    const data = await Person.findOneAndDelete({ _id: personId });
    if (data === null) {
      throw new AppError({
        name: 'NotFound',
        message: `Person with id:${personId} not found`,
        status: 404,
      });
    }
    return {
      data,
      status: 200,
    };
  } catch (error) {
    if (error.status === 404) throw error;
    if (error.name === 'CastError') {
      throw new AppError({
        name: 'BadRequest',
        fileName: __filename,
        lineNumber: 123,
        message: 'Malformadded id',
        status: 400,
      });
    }

    throw new AppError({
      name: error.name,
      fileName: __filename,
      lineNumber: 131,
      message: error.message,
      status: 500,
    });
  }
};

const count = async () => {
  try {
    const personCount = await Person.count();

    return personCount;
  } catch (error) {
    throw new AppError({
      name: 'ServerError',
      fileName: __filename,
      lineNumber: 151,
      message: error.message,
      status: 500,
    });
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
  count,
};
