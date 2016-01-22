"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buster: {
            default: {}
        },
        jshint: {
            jshintrc: true,
            files: {
                src: ['src/**/*.js', 'test/**/*.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['buster']);
};