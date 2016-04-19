module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

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
					'./bower_components/jquery/dist/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./bower_components/angular/angular.js',
					'./components/scripts/*.js'
					],
				dest : './builds/development/js/scripts.js'
			}
		},

		uglify: {
			my_target: {
				files: {
					'./builds/development/js/scripts.min.js': [
						'./builds/development/js/scripts.js'
					]
				}
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
		},

		watch: {
			css: {
				files: ['./components/sass/*.scss'],
				task: ['sass']
			},

			html: {
				files: ['./components/pages/*.*'],
				task: ['copy:pages']
			},

			script: {
				files: ['./components/scripts/*.*'],
				task: ['concat', 'uglify']
			}
		}
	});

	grunt.registerTask(
		'default', [
			'copy',
			'concat',
			'uglify',
			'sass',
			// 'responsive_images',
			'cssmin'
	]);
};