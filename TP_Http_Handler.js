/*\
title: $:/plugins/sbruce/trainingpeaks/TP_Http_Handler.js
type: application/javascript
module-type: utils
\*/

(function(){
  "use strict";

  var TP_Http_Handler = function(wiki) {
    this.wiki = wiki;
    this.logger = new $tw.utils.Logger("TP_Http_Handler");

  }


  TP_Http_Handler.prototype.getWorkouts = function(callback) {
    var self = this;

    /* This doesn't work. Try POST below */
    $tw.utils.httpRequest({
      url: "http://www.trainingpeaks.com/tpwebservices/service.asmx/GetWorkoutsForAthlete",
      data: {username: "shaunbruce", password: "password", startDate: "04/01/2015", endDate:"04/15/2015"},
      type: "POST",
      callback: processList
    });



    function processList(err, data) {
      if(err) {
        self.logger.log("Error retrieving data from TrainingPeaks", err);
      } else {
        self.logger.log("Data received from TrainingPeaks:", data);
      }
    }
  }
  exports.TP_Http_Handler = TP_Http_Handler;

})();
