module.exports = {
  root: false,
  extends: '@react-native-community',
  plugins: ["react-native", "disable"],
  plugins: ["TypeScript", "disable"],
  processor: "disable/disable",
  overrides: [
    {
      files: ["tests/**/*.test.js"],
      settings: {
        "disable/plugins": ["react-native"]
      }
    }
  ]
};
