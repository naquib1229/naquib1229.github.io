navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  document.getElementById("map").innerHTML = '<iframe width="100vw" height="100vh" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
  console.log(latitude);
});

