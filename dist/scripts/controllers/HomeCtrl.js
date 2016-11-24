(function() {
	function HomeCtrl(Room, Message, $stateParams) {
		this.rooms = function() {
			return Room.rooms;
		}

    this.messages = function() {
      var rooms = Room.rooms.$getRecord($stateParams.room);
      var keys = Object.keys(rooms.messages);
      var messageArray = keys.map(function(k) {
        return rooms.messages[k]
      });

      return messageArray;
    }

		this.currentRoom = $stateParams.room || "";

	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$stateParams', HomeCtrl])
})();


