module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cwd: process.cwd(),

        exec: {
            initDb: {
                command: 'mongod --dbpath C:\Users\Ionut\Desktop\ActivityManagerWorkspace\activity-manager\database & mongo'
            },
            startApp: {
                command: 'npm start'
            }
        }

    });

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['exec:startApp']);


};