module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      options: {
          parserOptions: {
            ecmaVersion: 2018
          }
      },
      src: ['./src/**/*.js', './dist/**/*.js']
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n/************************/\n'
      },
      dist: {
        // the files to concatenate
        src: ['./src/**/*.js'],
        // the location of the resulting JS file
        dest: './dist/js/all.js' // './dist/<%= pkg.name %>.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass','concat','eslint']);

};