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
    watch: {
      scripts: {
        files: ['app/css/*.css'],
        tasks: ['cssmin', 'copy'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin', 'copy']);


};