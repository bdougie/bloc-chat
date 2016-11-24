(function() {
  function Message($firebaseArray, $stateParams) {
    this.roomID = $stateParams.room;
    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com/rooms/' + this.roomID + '/messages');
    var messagesObj = $firebaseArray(ref);
    this.messages = messagesObj
    return this;

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', "$stateParams", Message]);

})();
