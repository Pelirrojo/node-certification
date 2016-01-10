// Based on: https://www.npmjs.com/package/node-menu

'use strict';

var menu = require('node-menu');
var utils = require('./utils');

var pointers = [];

menu
    .addDelimiter('-', 40, 'SCND Node Certified Program')

    // 01-What_is_Node // ----------------------------------------------------------------------
    .addItem(
        'What is Node.js? - Colorful Hello World',
        function() { pointers = utils.runScript('src/01-What_is_Node/hello-world.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'What is Node.js? - Hello World Async',
        function() { pointers = utils.runScript('src/01-What_is_Node/hello-world-async.js', pointers, utils.cleanCallback); }
    )

    // 02-Working_with_npm_and_modules // ------------------------------------------------------
    .addItem(
        'Working with NPM and modules? - Modules Exercise',
        function() { pointers = utils.runScript('src/02-Working_with_npm_and_modules/module_2/index.js', pointers, utils.cleanCallback); }
    )

    // 03-Node_Concepts // ---------------------------------------------------------------------
    .addItem(
        'Node Concepts - Buffer Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/buffers.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Closures Easy Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/closures/closures.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Closures Complex Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/closures/closure-factory-consumer.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Events Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/events.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Stream Readable Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/streams/streams-readable.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Stream Writable Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/streams/streams-writable.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Stream Duplex Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/streams/streams-duplex.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Stream Transform Exercise',
        function() { pointers = utils.runScript('src/03-Node_Concepts/streams/streams-transform.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Node Concepts - Stream Exercise - (Readable + Writable + Transform + Duplex)',
        function() { pointers = utils.runScript('src/03-Node_Concepts/streams-all.js', pointers, utils.cleanCallback); }
    )

    // 04-Working_with_Express // --------------------------------------------------------------
    .addItem(
        'Working with Express - Express Exercise',
        function() { pointers = utils.runScript('src/04-Working_with_Express/express.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Working with Express - Express with domain Exercise',
        function() { pointers = utils.runScript('src/04-Working_with_Express/express-domain.js', pointers, utils.cleanCallback); }
    )

    // 05-Working_with_the_Process_API // ------------------------------------------------------
    .addItem(
        'Working with the process API - Process Exercise',
        function() { pointers = utils.runScript('src/05-Working_with_the_Process_API/process.js', pointers, utils.cleanCallback); }
    )

    // 06-Error_Handling // --------------------------------------------------------------------
    .addItem(
        'Error Handling - Domain Exercise',
        function() { pointers = utils.runScript('src/06-Error_Handling/domain.js', pointers, utils.cleanCallback); }
    )

    .addItem(
        'Error Handling - Error Exercise',
        function() { pointers = utils.runScript('src/06-Error_Handling/errors.js', pointers, utils.cleanCallback); }
    )

    // 07-Sockets // ---------------------------------------------------------------------------
    .addItem(
        'Sockets - WebSockets Exercise',
        function() { pointers = utils.runScript('src/07-Sockets/websocket.js', pointers, utils.cleanCallback); }
    )

    // 08-Clustering_and_Multi-Process // ------------------------------------------------------
    .addItem(
        'Clustering and Multi-Process - Exercise',
        function() { pointers = utils.runScript('src/08-Clustering_and_Multi-Process/cluster.js', pointers, utils.cleanCallback); }
    )
    .addItem(
        'Clustering and Multi-Process - Cluster Domain Exercise',
        function() { pointers = utils.runScript('src/08-Clustering_and_Multi-Process/cluster-domain.js', pointers, utils.cleanCallback); }
    )

    // 09-Deployment // ------------------------------------------------------------------------

    // 10-Troubleshooting // -------------------------------------------------------------------
    .addItem(
        'Troubleshooting - REPL Server',
        function() {
            pointers = utils.runScript('src/10-Troubleshooting/repl.js', pointers, utils.cleanCallback);
            utils.opener("http://localhost:1337");
        }
    )

    .customHeader(function() {
        process.stdout.write("███████╗ ██████╗███╗   ██╗██████╗\n" +
                             "██╔════╝██╔════╝████╗  ██║██╔══██╗\n" +
                             "███████╗██║     ██╔██╗ ██║██║  ██║\n" +
                             "╚════██║██║     ██║╚██╗██║██║  ██║\n" +
                             "███████║╚██████╗██║ ╚████║██████╔╝\n" +
                             "╚══════╝ ╚═════╝╚═╝  ╚═══╝╚═════╝\n\n");
        process.stdout.write("Strongloop Certification Node Certification - Exam work out\n\n");
    })

    .addDelimiter('-', 40)
    .start();
