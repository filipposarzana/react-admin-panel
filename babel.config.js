module.exports = {
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-jsx-remove-data-test-id',
          {
            attributes: 'data-test-id',
          },
        ],
      ],
    },
  },
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        displayName: false,
        pure: true,
        ssr: true,
      },
    ],
  ],
}
