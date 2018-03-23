/*
  Responsive images at https://www.npmjs.com/package/grunt-responsive-images
  Run "grunt responsive_images" to re-process the images
*/
module.exports = function (grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 1200,
            suffix: '_xlg',
            quality: 75
          },{
          	width: 800,
            suffix: '_lg',
            quality: 75
          },{
          	width: 600,
            suffix: '_md',
            quality: 75
          },{
            width: 400,
            suffix: '_sm',
            quality: 75
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');

};