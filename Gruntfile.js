/**

* Workflow Grunt for small front-end projects
* repo: https://github.com/peyuco08/grunt-workflow
* @pedroperezitu / 2016

*/

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// We set our tasks (devolop files)
		watch :{
			scripts :{
				files : ['app/js/app.js','*.md'],
				tasks : ['uglify'],
				options :{
					livereload: true,
				}
			},

			styles :{
				files : ['app/sass/layout.scss','app/sass/partials/*.scss'],
				tasks : ['sass'],
			},

		},

		sass: {
			build: {
				options:{
					style: 'expanded'
				},

				files: {
					'build/assets/css/app.css': 'app/sass/layout.scss'
				}
			}
		},

		uglify: {
			my_target: {
				files: {
					'build/assets/js/app.min.js': ['app/js/app.js']
				}
			}
		}

	});

	//Load Task
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	//Default Task
	grunt.registerTask('default', ['watch','livereload','uglify','sass']);

};
