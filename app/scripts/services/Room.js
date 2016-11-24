(function() {
	function Room($firebaseArray) {

    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com/rooms');
		ref.set ({
			room1: {
				title: "Room 1",
				messages: {m1: "Hello", m2: "random", m3: "blah"}
			}, 
			room2: {
				title: "Room 2",
				messages: {m1: "hi again", m2: "testing", m3: "blah balh"}
			}, 
			room3: {
				title: "Room 3",
				messages: {m1: "blah blah balh", m2: "test 3", m3: "tetsing testing"}
			}
		});
		var obj = $firebaseArray(ref);

		this.rooms = obj
		return this;

	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
