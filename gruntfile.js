module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: [
          'src/js/vendor/jquery-2.2.4.min.js',
          'src/js/vendor/jquery.numpad.js',
          'src/js/main.js',
        ],
        dest: 'js/script.js',
      },
    },
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      files: {
        'js/script.min.js': ['js/script.js'],
      },
    }
  },
  watch: {
    scripts: {
      files: ['src/**/*.js'],
      tasks: ['default']
    }
  }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register task(s).
  grunt.registerTask('default', ['concat:build', 'uglify:build']);

};