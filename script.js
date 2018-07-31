$(document).ready(function(){
    $('.parallax').parallax();
  });
/*
let happy = document.querySelector('#happy')
let calm = document.querySelector('#calm')
let neutral = document.querySelector('#neutral')
let annoyed = document.querySelector('#annoyed')
let sad = document.querySelector('#sad')
let angry = document.querySelector("#angry")
let playlist = document.querySelector('#playlist')
let allface = document.querySelectorAll(".face")
let chat = document.querySelector("#chat")

// function scrollToPlaylist(){
//     document.querySelector('#playlist').scrollIntoView({ behavior: 'smooth' })  
// }
*/
console.log('connected ui.js file')

document.addEventListener('DOMContentLoaded', function() {
    let holder = document.querySelector('#auth-dropdown-holder')
    let options = {
        alignment: 'right',
        container: holder
    }
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, options);
});
/*
    

happy.addEventListener('click', e => {
    playlist.innerHTML = 
    `
    <h3 class="header text_b center">Playlist</h3>
    <p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    `
    chat.innerHTML = `<iframe src='https://minnit.chat/HappyMood?embed&dark' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/HappyMood' target='_blank'></a>`
    playlist.scrollIntoView({ behavior: 'smooth' })  
})


calm.addEventListener('click', e => {
    playlist.innerHTML = 
    `
    <h3 class="header text_b center">Playlist</h3>
    <p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX6VdMW310YC7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    `
    chat.innerHTML = `<iframe src='https://minnit.chat/CalmMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/CalmMood' target='_blank'></a>`

    playlist.scrollIntoView({ behavior: 'smooth' }) 
})

neutral.addEventListener('click', e => {
    playlist.innerHTML = 
    `
    <h3 class="header text_b center">Playlist</h3>
    <p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWY4xHQp97fN6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    `
    chat.innerHTML = `<iframe src='https://minnit.chat/NeutralMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/NeutralMood' target='_blank'></a>`
    playlist.scrollIntoView({ behavior: 'smooth' }) 
})

annoyed.addEventListener('click', e => {
    playlist.innerHTML = 
    `
    <h3 class="header text_b center">Playlist</h3>
    <p><iframe src="https://open.spotify.com/embed?uri=spotify:user:callielujan:playlist:4by4UWeEzeEx8iBPnmzQUY" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    `
    chat.innerHTML=`<iframe src='https://minnit.chat/AnnoyedMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/AnnoyedMood' target='_blank'></a>`

    playlist.scrollIntoView({ behavior: 'smooth' }) 
})

sad.addEventListener('click', e => {
    playlist.innerHTML = 
    `
    <h3 class="header text_b center">Playlist</h3>
    <p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX7gIoKXt0gmx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    `
    chat.innerHTML =`<iframe src='https://minnit.chat/SadMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/SadMood' target='_blank'></a>`

    playlist.scrollIntoView({ behavior: 'smooth' }) 
})

angry.addEventListener('click', e => {
    playlist.innerHTML = 
    `
    <h3 class="header text_b center">Playlist</h3>
    <p><iframe src="https://open.spotify.com/embed?uri=spotify:user:jewlgurl:playlist:7L08IETH8EQmm7k4r8rivb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    `
    chat.innerHTML = `<iframe src='https://minnit.chat/AngryMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/AngryMood' target='_blank'></a>`

    playlist.scrollIntoView({ behavior: 'smooth' }) 
})

*/

const signInButton = document.querySelector('#sign-in-button')
const signOutButton = document.querySelector('#sign-out-button')

signInButton.addEventListener('click', e => {
    signInWithGoogle() 
    
})
signOutButton.addEventListener('click', e => {
    signOutWithGoogle() 
    
})

const authDropdownItem = document.querySelector('#auth-dropdown-button')
        //  updateUIforSignIn
function updateUIforSignIn(avatarSrc) {
    authDropdownItem.innerHTML = `<i><img class="avatar-image" src="${avatarSrc}" /></i>`
}

function updateUIforSignOut() {
    authDropdownItem.innerHTML = `<li><a href="#signin">Account</a></li>`
}

function submitMood() {
    var moodSelect = document.getElementById('mood-select').value
    var moodNote = document.getElementById('mood-note').value
    
    var currentUser = firebase.auth().currentUser
    
    if (!currentUser) {
        alert('No Current User')
        //chat.classList.add('invisible')
        return
    }else{
        chat.classList.remove('invisible')
    }
    
    var uid = currentUser.uid
    var newMoodRef = firebase.firestore().collections('moods').doc()
    newMoodRef.set({
        timestamp: new Date(),
        userId: uid,
        mood: moodSelect,
        note: moodNote
    })
    
    document.getElementById('mood-select').value = 'none'
    document.getElementById('mood-note').value = ''
    
    loadUserMoods()
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

$(function(){
  
  // if things don't work, go to console and do localStorage.clear() to clear previous codepen localstorage
  
  var feels = {
    'mood'  : 0,
    'energy': 0,
    'pain'  : 0,
    'intoxication'   : 0
  };
  
  var color = {};
  
  $('section').each(function(){
    var section = $(this).attr('class');
    var i;
    color[section] = {};
    $(this).children('a').each(function(index){
      i = index + 1;
      color[section][i] = $(this).css('background-color');
    });
    
    $('p.info').append('<span class="' + section + '">' + section + ' <span class="color" style="background-color:#555;"></span> </span>');
    
  });
  
  var emoji = {
    1:'http://s.goose.im/emoji/emoji_u1f622.png',
    2:'http://s.goose.im/emoji/emoji_u1f614.png',
    3:'http://s.goose.im/emoji/emoji_u1f61b.png',
    4:'http://s.goose.im/emoji/emoji_u1f610.png',
    5:'http://s.goose.im/emoji/emoji_u1f603.png',
    6:'http://s.goose.im/emoji/emoji_u1f60a.png'
  };
  
  
//   function refresh() {
//     if (window.localStorage) {
//         if (window.localStorage.length) {
//           for (var i = 0; i < window.localStorage.length; i++) {
//               if ( /^tracker/.test(window.localStorage.key(i))) {
//                  var local = $.parseJSON(window.localStorage.getItem(window.localStorage.key(i)));

//                  console.log(window.localStorage.getItem(window.localStorage.key(i)));

//                  var time = local['time'];
//                  var date = new Date(time);
//                  var minutes = ((date.getMinutes() < 10) ? '0' : '') + date.getMinutes();
//                  var pain = local['feels']['pain'];  
//                  var mood = local['feels']['mood'];  
//                  var energy = local['feels']['energy'];  
//                  var fog = local['feels']['fog'];

//                  var process = '<span class="entry"><span class="date">' +
//                               date.getHours() + ':' + minutes + '&nbsp;&nbsp;&nbsp;&nbsp;' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() +
//                               '</span>pain ' + pain + ' <span class="color" style="background-color:' + color['pain'][pain] + '"></span>' +
//                               'mood ' + mood + '<img src="' + emoji[mood] + '"> <span class="color" style="background-color:' + color['mood'][mood] + '"></span>' +
//                               'energy ' + energy + ' <span class="color" style="background-color:' + color['energy'][energy] + '"></span>' +
//                               'fog ' + fog + ' <span class="color" style="background-color:' + color['fog'][fog] + '"></span>' +
//                               '<span class="notes">' + local['notes'] + '</span></span>';

//                  $('article').prepend(process);
//               }
//           }
//         } else {
//           // 
//         }
//     }
    
//     console.log(JSON.stringify(color));
    
//   }
  
//   refresh();
  
  
  $('section a').click(function(){
    var section = $(this).parent('section').attr('class');
    if ($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      feels[section] = 0;
      $('p.info').children('.' + section).children('.color').css('background-color','#555');
    } else {
      $(this).addClass('clicked');
      $(this).siblings('a').removeClass('clicked');
      feels[section] = $(this).text();
      $('p.info').children('.' + section).children('.color').css('background-color',color[section][$(this).text()]);
    }
  });
  
   
//   $('a.submit').click(function(){
//     if (feels['pain'] == 0 || feels['mood'] == 0 || feels['energy'] == 0 || feels['fog'] == 0) {
//       $('.alert').show();
//       event.preventDefault();
//     } else {
//       var timestamp = Date.now();
//       var note = $('input.note').val();
//       var data = {
//         'feels':feels,
//         'notes':note,
//         'time': timestamp
//       };

//       localStorage.setItem('tracker-'+timestamp, JSON.stringify(data));
//       $('article').html('');
//       refresh();
//       event.preventDefault();
//     }
//   });
  
//   $('.alert a.button').click(function(){
//     $('.alert').hide();
//     event.preventDefault();
//   });
  
  
})