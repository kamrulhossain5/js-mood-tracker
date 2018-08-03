//this auth object connects us to the authentiction 
//service in firebase
const auth = firebase.auth()
const database = firebase.firestore()
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  database.settings(settings);

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function()
{
  initializeApp()
}

function initializeApp()
{
  auth.onAuthStateChanged(function(user)
  {
    if(user)
    {
      const avatarSrc = user.photoURL
      const id = user.uid
      updateUIforSignIn(avatarSrc)
      getUsersMoodData(id)
    }else{
      updateUIforSignOut()
    }
  })
  
}



function signInWithGoogle() {
  console.log('sign in')
  auth.signInWithPopup(provider)
  //if it works, then
  .then(function(result) {
    // This gives you a Google Access Token.
    const token = result.credential.accessToken
    // The signed-in user info.
    const user = result.user
    const avatarSrc = user.photoURL
    const name = user.displayName
    const email = user.email
    const userId = user.uid
    const userInfo = {
      name: name,
      id: userId,
      photoURL: avatarSrc,
      email: email
    }
    addUserToDatabase(userInfo, userId)
    updateUIforSignIn(avatarSrc)
  })
}

function addUserToDatabase(userInfo, userId) {
  //get a reference to the collection you need
  const userCollectionRef = database.collection('users')
  //create a document in that collection
  const newUserRef = userCollectionRef.doc(userId)
  //set the info equal to what you want
  newUserRef.set(userInfo)
}

function signOutWithGoogle() {
  auth.signOut()
    .then(res => {
      console.log('signed out')
      updateUIforSignOut()
    })
    .catch(err => {
      console.log('error signing out')
    })
    
}


function submitMood() {
    var mood = feels.mood
    var intensity = feels.intensity 
    var energy = feels.energy 
    var intoxication = feels.intoxication
    var moodNote = document.querySelector('#mood-note').value

    var currentUser = firebase.auth().currentUser

    if (!currentUser) {
        alert('Log in to save your mood!')
        return
    }

    var uid = currentUser.uid
    var newMoodRef = firebase.firestore().collection('moods').doc()
    newMoodRef.set({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userId: uid,
        mood: mood,
        energy, energy,
        intoxication: intoxication,
        intensity: intensity,
        note: moodNote
    })
    .then( res => {
      console.log(res)
      console.log('success!')
      displayPlaylist(mood, energy, intoxication, intensity, moodNote)
    })
    .catch( err => console.log(err))

    document.querySelector('#mood-note').value = ''

    loadUserMoods()
}

function getUsersMoodData(uid){
  database.collection('moods')
    .where('userId', '==', uid)
    .orderBy('timestamp', 'asc')
    .get()
    .then(function(querySnapshot) {
        var resultingHTML = ''
        querySnapshot.forEach(function(doc) {
            var data = doc.data()
            let formattedDate = data.timestamp.toDate()
              .toString()
              .split(" ")
              .splice(0, 5)
              .join(" ")
            resultingHTML += `<li>${formattedDate} &nbsp &nbsp Mood: ${data.mood} &nbsp &nbsp Intensity: ${data.intensity} &nbsp &nbsp Energy: ${data.energy} &nbsp &nbsp Intoxication: ${data.intoxication} ${data.note ? '&nbsp &nbsp Note: '+data.note : ''}</li>`
        })
        document.querySelector('#history').innerHTML = resultingHTML
    })  
}

function loadUserMoods() {
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('No Current User')

        return
    }

    var uid = currentUser.uid

    firebase.firestore().collection('moods')
        .where('userId', '==', uid)
        .orderBy('timestamp')
        .get()
        .then(function(querySnapshot) {
            var resultingHTML = ''
            querySnapshot.forEach(function(doc) {
                var data = doc.data()
                resultingHTML += `<li>${data.timestamp} - ${data.mood} - ${data.note}</li>`
            })
            document.getElementById('dashboard-table').innerHTML = resultingHTML
        })
}


