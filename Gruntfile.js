module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'public/main.css': ['app/css/*.css', 'vendor/bootstrap/dist/css/bootstrap.css']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'app/img/',
        src: '**',
        dest: 'public/',
        filter: 'isFile'
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin', 'copy']);

};
