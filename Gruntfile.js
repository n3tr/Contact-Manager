module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'public/main.css': [
            'app/css/*.css',
            'vendor/bootstrap/dist/css/bootstrap.css',
            'node_modules/sweetalert/dist/sweetalert.css'
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'app/img/',
            src: '**',
            dest: 'public/',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'vendor/bootstrap/fonts/',
            src: '**',
            dest: 'public/fonts/',
            filter: 'isFile'
          }
        ]
      }
    },
    watch: {
      options: {
        atBegin: true
      },
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
