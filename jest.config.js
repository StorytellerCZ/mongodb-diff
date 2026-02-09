module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/spec/**/*[sS]pec.js'],
  transform: {
    '^.+\\.js$': [
      'babel-jest',
      {
        babelrc: false,
        configFile: './babel.config.js',
      },
    ],
  },
};
