
alert("hey")
  function setup() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD02yGmWbdjT0iFfw_oY-rl3w0vRlUesmc",
      authDomain: "marketplace-masters.firebaseapp.com",
      databaseURL: "https://marketplace-masters.firebaseio.com",
      projectId: "marketplace-masters",
      storageBucket: "marketplace-masters.appspot.com",
      messagingSenderId: "702992178409"
    };
    firebase.initializeApp(config);
    console.log(firebase);
    database = firebase.database();
    var ref;

    ref = database.ref('0');
    ref.on('value', getData, errData);
  }

function getData(data) {
  // var car0 = data.val();
  // var keys = Object.keys(car0);
  // console.log(keys);
  // for (var i = 0; i < keys.length; i++) {
  //   var k = keys[i];
  //
  // }
}

function errData(err) {
  console.log('Error');
  console.log(err);
} <
</script>
