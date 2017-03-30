module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc2md: {
      withOptions: {
        options: {
          'no-gfm': true
        },
        files: [
          { src: 'lib/Parser.js', dest: 'docs/parser.md' },
          { src: 'lib/DictionaryManager.js', dest: 'docs/dictionary.md' },
          { src: 'lib/ClassifierManager.js', dest: 'docs/classifier.md' },
          { src: 'lib/AccountManager.js', dest: 'docs/account.md' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task(s).
  grunt.registerTask('default', ['jsdoc2md']);

};