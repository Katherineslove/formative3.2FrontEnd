module.exports = function (grunt) {

grunt.initConfig({

    jshint: {
        files: ['js/script.js'],
        options: {
          esversion: 6,
            globals:{
                jQuery: true
            }
        }
    }
  }

grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('checkJS', ['jshint']);

};
