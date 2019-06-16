module.exports = function(grunt) {

  grunt.initConfig({
    paths: {
        source: 'src',
        dist: 'dist',
        assets: 'dist/assets'
    },
    banner: '/*! <%= pkg.title || pkg.name %> by <%= pkg.author %> on <%= grunt.template.today("dd/mm/yyyy hh:MM:ss TT") %> - v<%= pkg.version %> */\n',
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    jekyll: {
        options: {
            config: '_config.yml,_config.build.yml',
            src: '<%= paths.source %>'
        },
        dist: {
            options: {
                dest: '<%= paths.dist %>/',
            }
        },
        server: {
            options: {
                config: '_config.yml',
                dest: '.jekyll/'
            }
        }
    },
    stylus: {
        compile: {
            banner: '<%= banner %>',
            files: {
                '<%= paths.assets %>/css/main.css' : '<%= paths.source %>/_assets/stylus/main.styl'
            }
        }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'jekyll']);

};