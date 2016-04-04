module.exports = function(grunt) {
	grunt.initConfig({

		bower : {
			install : {}
		},

		concat : {
			options : {
				seperator: '\n\n//--------------------------------\n',
				banner: '\n\n//--------------------------------\n'
			},
			dist : {
				src : ['components/scripts/*.js'],
				dest : 'builds/development/js/scripts.js'
			}
		},

		bower_concat : {
			all : {
				dest : 'builds/development/js/bower.js',
				cssDest : 'builds/development/css/bower.css'
			}
		},

		sass : {
			dist : {
				options : {
					style: 'expanded'
				},

				files : [{
					src : 'components/sass/custom.scss',
					dest : 'builds/development/css/style.css'
				}]
			}
		},

		cssmin : {
			target : {
				files : [{
					expand : true,
					cwd : 'builds/development/css/',
					src : ['*.css', '!*.min.css'],
					dest : 'builds/development/css/',
					ext : '.min.css'
				}]
			}
		},

		connect : {
			server : {
				options : {
					hostname : 'localhost',
					port : '8080',
					base : 'builds/development/'
				}		
			}
		},

		watch : {
			js : {
				files : ['components/scripts/**/*.js'],
				tasks : ['concat'],
				options : {
					spawn : false
				},
			},
			css : {
				files : ['components/sass/**/*.scss'],
				tasks : ['sass', 'cssmin'],
				options : {
					spawn : false
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask(
		'default', [
			'bower',
			'concat',
			'bower_concat',
			'sass',
			'cssmin',
			'connect',
			'watch'
	]);
};