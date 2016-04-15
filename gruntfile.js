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
				src : [
					'./bower_components/jquery/dist/jquery.min.js',
					'./bower_components/bootstrap/dist/js/bootstrap.min.js',
					'./bower_components/angular/angular.min.js',
					'./components/scripts/*.js'
					],
				dest : './builds/development/js/scripts.js'
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: './bower_components/bootstrap/dist/',
				src: ['**/*'],
				dest: './builds/development/bootstrap/'
			},
			pages: {
				expand: true,
				cwd: 'components/pages/',
				src:['**/*'],
				dest: './builds/development/'
			},
			js: {
				expand: true,
				cwd: 'components/scripts/',
				src: ['**/*'],
				dest: 'builds/development/js/'
			}
		},

		sass : {
			dist : {
				options : {
					style: 'expanded'
				},

				files : [{
					src : './components/sass/styles.scss',
					dest : './builds/development/css/style.css'
				}]
			}
		},

		cssmin : {
			target : {
				files : [{
					expand : true,
					cwd : './builds/development/css/',
					src : ['*.css', '!*.min.css'],
					dest : './builds/development/css/',
					ext : '.min.css'
				}]
			}
		},

		responsive_images: {
			myTask: {
				options: {
					sizes: [{
						height: 150,
						rename: false
					}]
				},
				files: [{
					expand: true,
					src: ['**.{jpg,gif,png}'],
					cwd: './components/images/',
					dest: './builds/development/img/'
				}]
			}
		},

		'gh-pages': {
			options: {
				base: './builds/development'
			},

			src: ['**']
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.registerTask(
		'default', [
			'bower',
			'copy',
			'concat',
			'sass',
			'responsive_images',
			'cssmin'
	]);
};