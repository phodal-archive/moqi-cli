#! /usr/bin/env node

var program = require('commander');
var version = require('./package').version;
var sys     = require('sys');
var exec    = require('child_process').exec;

program
    .version(version)
    .option('-c, --create', 'Create Freerice project', 'boolean', true)
    .usage('[command] [options] path');

program.parse(process.argv);

if (!program.args[0]) {
    program.outputHelp();
    process.exit(-1)
}

if(program.create) {
    exec("git clone git@github.com:mokcy/moqi.git " + program.args[0],
        function (error, stdout, stderr) {
            sys.puts(stderr);
        }
    );
}