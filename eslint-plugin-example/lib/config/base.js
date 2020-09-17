// Copyright (c) 2020, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'plugin:decorator-position/ember',
  ],

  rules: {
    'camelcase': ['error', { 'properties': 'never' }],
  },
};
