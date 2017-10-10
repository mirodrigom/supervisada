/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.picture = {
      0: {
        name: 'up',
      },
      1: {
        name: 'down',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.notifications = [
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Has ganador 2000 puntos en el evento de Futbol: Boca Juniors vs Lanus',
        time: 'hace 1 minuto'
      }
    ];

    $scope.messages = [
      {
        picture: 0,
        text: 'Nueva funcionalidad: Apuestas por deportes',
        time: 'hace 1 minuto'
      },
      {
        picture: 1,
        text: 'Nuevos Premios: Fravega, compumundo, miralos.',
        time: 'Hace 2 horas'
      }
    ];


    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.picId || msg.picId === 0) {
        text = text.replace('&name', '<strong>' + $scope.picture[msg.picId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();