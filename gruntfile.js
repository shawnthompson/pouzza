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
			}
		},

		// bower_concat : {
		// 	all : {
		// 		dest : 'builds/development/js/bower.js',
		// 		cssDest : 'builds/development/css/bower.css'
		// 	}
		// },

// spreadsheet_to_json: {
// 	options: {
// 		keyfile: './components/scripts/sheetsAPI.json'
// 	},

// 	data: {
// 		options: {
// 			spreadsheetId: '15CQjePyGMVarcr5cyYo_kUjZaJ0jiKGUmMW4Yu93qbA',
// 			ignoreColumns: ['annotations'] // optional
// 		},

// 		dest: './components/scripts/new-data.json'
// 	}
// },

		sass : {
			dist : {
				options : {
					style: 'expanded'
				},

				files : [{
					src : './components/sass/custom.scss',
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

		// connect : {
		// 	server : {
		// 		options : {
		// 			hostname : 'localhost',
		// 			port : '8080',
		// 			base : 'builds/development/'
		// 		}
		// 	}
		// },

		// watch : {
		// 	js : {
		// 		files : ['components/scripts/**/*.js'],
		// 		tasks : ['concat'],
		// 		options : {
		// 			spawn : false
		// 		},
		// 	},
		// 	css : {
		// 		files : ['components/sass/**/*.scss'],
		// 		tasks : ['sass', 'cssmin'],
		// 		options : {
		// 			spawn : false
		// 		},
		// 	}
		// }
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-spreadsheet-to-json');
	// grunt.loadNpmTasks('grunt-bower-concat');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask(
		'default', [
			'bower',
			'copy',
			'concat',
			// 'spreadsheet_to_json',
			// 'bower_concat',
			'sass',
			'cssmin'
			// 'connect',
			// 'watch'
	]);
};