/**
 * @author Rodrigo.Martinez
 * created on 08.10.2017
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.theme')
        .filter('teamsPicture', teamsPicture);
  
    /** @ngInject */
    function teamsPicture(layoutPaths) {
      return function(input, ext) {
        ext = ext || 'png';
        return layoutPaths.images.teams + input + '.' + ext;
      };
    }
  
  })();
  