/* eslint-disable */
export default {
  displayName: 'wheel-of-fortune',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^(?!.*\\.(js|jsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/wheel-of-fortune',
};
