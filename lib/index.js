/*
 * feathers-cluster
 *
 * Copyright (c) 2014 Glavin Wiechert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(config) {
    return function() {
        var app = this;
        var services = {};

        // Enable the Plugin
        app.enable('feathers cluster');

        // Check for configuration
        if (config) {
            // Apply configuration
        }

        // Optional: Register this plugin as a Feathers provider
        app.providers.push(function(path, service) {
            services[path] = service;
        });

    };
};