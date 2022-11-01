const Example = require('../models/exampleModel');
const { createErr } = require('../utils/utils');
const ExampleType = require('../Types/example')



const exampleController: ExampleType = {
  create: async (req, res, next) => {
    try {
      //fields to deconstruct from req.body
      Example.create(req.body)
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Posting did not work'
      })
    }
  },
  read: async (req, res, next) => {
    try {
      //getting the id
      //then example.find(id)
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Read did not work'
      })
    }
  },
  update: async (req, res, next) => {
    try {
      //getting the id
      //then example.findOneAndUpdate(id) 
      //make sure to update using req.body
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Update did not work'
      })
    }
  },
  delete: async (req, res, next) => {
    try {
      //getting the id
      //then example.findOneAndDelete(id) 
    } catch {
      return next({
        log: null,
        status: 401,
        message: 'Update did not work'
      })
    }
  }
};


module.exports = exampleController;
