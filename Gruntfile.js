'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      output: ['build/*']
    },

    jshint: {
      options:{

      },
      files: ['./app/*.js']
    },

    uglify: {
      development: {
        files: [{
          expand: true,
          cwd: './app',
          src: '**/*.js',
          dest: './build/app/'
        }]
      },
      options: {
        compress: {
          drop_console: true,

        },
        beautify: false
      }
    },

    htmlhint:{
      templates: {
        options: {

        },
        src: ['./app/**/*.html']
      }
    },
    htmlmin:{
      dev: {
        options: {
          removeEmptyAttributes: true,
          removeEmptyElements: true,
          removeRedundantAttributes: true,
          removeComments: true,
          removeOptionalTags: true,
          collapseWhitespace: true,
        },
        files: [{
          expand: true,
          cwd: './app/',
          dest: './build/',
          src: ['**/*.html'],
          ext: '.html',
          extDot: 'last'

        }]
      }
    },

    csslint: {
      strict: {
        options: {

        },
        src: ['./app/css/*.css']
      },
      laxed: {
        options: {

        },
        src: ['']
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: './app/',
        src: ['css/**/*.css'],
        dest: './build/app/',
        ext: '.css',
        extDot: 'last'
      },
      concat: {
        options: {

        },
        files: {
          './build/app/css/styles.min.css': ['./build/app/css/**/*.css']
        }
      }
    }    
  });

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-htmlhint');  
  grunt.loadNpmTasks('grunt-contrib-htmlmin');  


  grunt.loadNpmTasks('grunt-contrib-csslint');  
  grunt.loadNpmTasks('grunt-contrib-cssmin');  

  // Default task(s).
  grunt.registerTask('default', [
    'clean', 'jshint', 'uglify', 
    'htmlhint', 'htmlmin',
    'csslint:strict', 'cssmin'
  ]);

};