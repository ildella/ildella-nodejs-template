module.exports = {
  preset: '../../jest.preset.js',
  globalSetup: './global-setup',
  setupFiles: ['./setup-files'],
  setupFilesAfterEnv: ['../slow-timeout'],
}
