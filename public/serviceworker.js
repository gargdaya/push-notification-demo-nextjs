function askPermission() {
	return new Promise(function (resolve, reject) {
	  const permissionResult = Notification.requestPermission(function (result) {
		resolve(result);
	  });
  
	  if (permissionResult) {
		permissionResult.then(resolve, reject);
	  }
	}).then(function (permissionResult) {
	  if (permissionResult !== 'granted') {
		throw new Error("We weren't granted permission.");
	  }
	});
  }

  self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: "Push notification from section.io", //the body of the push notification
            image: "https://pixabay.com/vectors/bell-notification-communication-1096280/",
            icon: "https://pixabay.com/vectors/bell-notification-communication-1096280/" // icon 
        }
    );
});