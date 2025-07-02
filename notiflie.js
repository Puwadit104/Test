import "./OneSignalSDKWorker.js"

window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "2cb78d9a-4207-468d-88e1-ae0041a46dbd",
    });
  });
