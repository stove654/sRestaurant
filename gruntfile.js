module.exports = function(grunt) {

  grunt.initConfig({
    nwjs: {
      options: {
        version: '0.12.3',
        buildDir: './build', // Where the build version of my NW.js app is saved
        credits: './www/index.html',
        platforms: ['osx32', 'win32'] // These are the platforms that we want to build
      },
      src: './www/**/*' // Your NW.js app
    },
  });

  grunt.loadNpmTasks('grunt-nw-builder');
  grunt.registerTask('buildapp', ['nwjs']);

};