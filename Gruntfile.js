module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    // Project configuration.

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {

            dist: {

                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },

                files: {
                    'build/css/email.css': 'build/scss/base.scss'
                }

            }

        },

        uncss: {

            dist: {

                files: {
                    'build/css/email-tidy.css': [
                        'build/index.html'
                    ]
                }

            }

        },

        processhtml: {

            dist: {

                files: {
                    'dist/index.html': [
                        'build/index.html'
                    ]
                }

            }

        },

        premailer: {
            main: {
                options: {
                    verbose: true
                },
                files: {
                    'dist/index.html': [
                        'dist/index.html'
                    ]
                }
            }
        },

        watch: {

            scripts: {

                files: [
                    'build/scss/**/*'
                ],

                tasks: [
                    'sass'
                ],
                
                options: {
                    spawn: false,
                },

            },

        },


    });

    grunt.registerTask('default', [
        'sass',
        'uncss',
        'processhtml',
        'premailer'
    ]);

};

