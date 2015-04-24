/*\
title: $:/plugins/sbruce/trainingpeaks/trainingpeaks.js
type: application/javascript
module-type: startup

Fetch the workout list

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";


exports.name = "trainingpeaks";
exports.platforms = ["browser"];
exports.after = ["startup"];

exports.startup = function() {
  $tw.TP_Http_Handler = new $tw.utils.TP_Http_Handler($tw.wiki);
  $tw.rootWidget.addEventListener("tp-get-workouts", function(event) {
    $tw.TP_Http_Handler.getWorkouts(event.param);
  });

};




})();
