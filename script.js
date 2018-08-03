$(document).ready(e => {
    $('.parallax').parallax();
})

var feels = {
    'mood': 'none',
    'energy': 0,
    'intensity': 0,
    'intoxication': 0
}

/*MOODS*/

let happy = document.querySelector('.happy')
let calm = document.querySelector('.calm')
let neutral = document.querySelector('.neutral')
let annoyed = document.querySelector('.annoyed')
let sad = document.querySelector('.sad')
let angry = document.querySelector(".angry")


let playlist = document.querySelector('#playlist')
let chat = document.querySelector("#chat")

/*INTENSITY*/
let i1 = document.querySelector('.i1')

/* CREATES SCROLL FUNCTION*/
function scrollToPlaylist() {
    document.querySelector('#playlist').scrollIntoView({ behavior: 'smooth' })

}


console.log('connected script.js file')

document.addEventListener('DOMContentLoaded', function() {
    let holder = document.querySelector('#auth-dropdown-holder')
    let options = {
        alignment: 'right',
        container: holder
    }
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, options);
});

const signInButton = document.querySelector('#sign-in-button')
const signOutButton = document.querySelector('#sign-out-button')

signInButton.addEventListener('click', e => {
    signInWithGoogle()

})
signOutButton.addEventListener('click', e => {
    signOutWithGoogle()

})

const authDropdownItem = document.querySelector('#auth-dropdown-button')

function updateUIforSignIn(avatarSrc) {
    authDropdownItem.innerHTML = `<i><img class="avatar-image" src="${avatarSrc}" /></i>`
}

function updateUIforSignOut() {
    authDropdownItem.innerHTML = `<li><a href="#signin">Account</a></li>`
}

const submitButton = document.querySelector('#submit_button')

submitButton.addEventListener('click', e => {
  submitMood();
  
})

$(function() {

    var color = {};

    $('section').each(function() {
        var section = $(this).attr('class');
        var i;
        color[section] = {};
        $(this).children('a').each(function(index) {
            i = index + 1;
            color[section][i] = $(this).css('background-color');
        });

        $('p.info').append('<span class="' + section + '">' + section + ' <span class="color" style="background-color:#555;"></span> </span>');

    });

    var emoji = {
        1: 'http://s.goose.im/emoji/emoji_u1f622.png',
        2: 'http://s.goose.im/emoji/emoji_u1f614.png',
        3: 'http://s.goose.im/emoji/emoji_u1f61b.png',
        4: 'http://s.goose.im/emoji/emoji_u1f610.png',
        5: 'http://s.goose.im/emoji/emoji_u1f603.png',
        6: 'http://s.goose.im/emoji/emoji_u1f60a.png'
    };


    $('section a').click(function() {
        var section = $(this).parent('section').attr('class');
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            feels[section] = 0;
            $('p.info').children('.' + section).children('.color').css('background-color', '#555');
        }
        else {
            $(this).addClass('clicked');
            $(this).siblings('a').removeClass('clicked');
            feels[section] = $(this).text();
            $('p.info').children('.' + section).children('.color').css('background-color', color[section][$(this).text()]);
        }
    });
})



var sadPlaylist = [
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:joelsosa27:playlist:4nnQnAyu19lOjjV2zOSUDi" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:xxyujuanxx:playlist:76KYsfdKDgI2o5UUtfG60L" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:laya321:playlist:0FN4K31ox8vH59ULY42yHB" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`, 
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:gdude68:playlist:5MRS3hyuOdyX7pNpLY2gpq" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:ohgoodgawd:playlist:4ujWzcvGlozaPSKtgZYQW8" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:19rymcdermid:playlist:03PpRivNioJa9NRYRk5xsg" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:topherrojas:playlist:6N9Xc2H02K5bzMjMda7cYK" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12164031710:playlist:2rqtAYQHoUvLGxb7wW05rY" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:marktaleonnn:playlist:02xxzv9IBJbAaY8RknWxkV" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:scarlett_caroline23:playlist:0fR1reCsx4s2nbMtmgLnOH" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:chalkyboness:playlist:4slmOJp5zJRjT03bXG4VRV" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:imnataliem:playlist:13tOEiyvvqftPFLoC7XJtX" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:kileyhalsel:playlist:4LSVTsdI8CxRNAcWlUtouA" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:stainsbyfamily:playlist:2dhN6f71I71yN7c9tvk7KY" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:stainsbyfamily:playlist:2dhN6f71I71yN7c9tvk7KY" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
]

var angryPlaylist= [
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:thetreedweller:playlist:3UWaYVovsP1R44MeZzS4Rh" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:j0r6feg65so3fqo73drm3chc8:playlist:550kEG9fU3VRwmMC3bLhOq" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:cllarity:playlist:4PSFtFbxSbW5HUZf0QTARE" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:cllarity:playlist:4PSFtFbxSbW5HUZf0QTARE" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:h2oswim31:playlist:0SyU1bmaOTmDvQmM43u5nk" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:sarahebulin:playlist:4ug087XqgUJzTCp4Mn2WOE" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:erinmae099:playlist:1qRnkoNymcwlxlfUZh5awR" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:mannie404:playlist:6ntglBeTfnWP9iOyLVXy6U" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:sunlitsage:playlist:5lwo8EzRL9IEl6mHpdWZHL" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:dekaans:playlist:4QUNlh17SkjMlcZ9Z9Z9IK" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:aidraorlando:playlist:3HR77ZTkkKTfMjOeJo8Boi" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:popsugarsmart:playlist:0KPEhXA3O9jHFtpd1Ix5OB" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:riley.potts:playlist:7tZ0OrvbHPmCQU4AyUbzkh" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:mary-222:playlist:6hkQhl3IXuKKXX9mS1qZWL" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12142440909:playlist:4vfvyrIJkBe6aGWVu62RNu" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:reluketi21:playlist:1gDEEQNINd6YfDCAfKjrKs" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  ]
  
var neutralPlaylist= [
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:quemasucabeza:playlist:0WZhqgHqNINX3irqykosUQ" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:1155821255:playlist:6Q509tLOi1lPIhTN6gwFpW" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:1173392839:playlist:72DDcRI25lYMXhc485zNoJ" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:1231610031:playlist:5haOucc4AoOa9DjaFoonsX" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:eu7u6olvnsl13k0jxgubvybro:playlist:4q2VR6lCaBeoseWbczgIO1" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:behlulozel:playlist:2WoH1EP7istUlvbBYG70Yo" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12129994705:playlist:5vOnSE9hCQa60HUfBExkv8" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:leogirl956-us:playlist:5BxXGyspcWh1uloU9WbSxJ" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12161311436:playlist:4cOvsyev4oel7EtcQAJA5h" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:ilivefordubstep:playlist:6UK6QuzSxgZhtIf7YTbhrq" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:22tegepg5fqdorgxfph64drki:playlist:6HdFN6wEBIrWKlIMwmW4OR" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12150522571:playlist:7rivQWrGmxnN4DDWf3GifF" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:11162283264:playlist:5m9Gt5MU1jWwUTjg3t4cdb" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:bryanescalier:playlist:6elrqXGfrqNlAqalQWn3lA" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:sweetedheart:playlist:4saktDH4a0slGzOEt8O4BL" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
]
  

var annoyedPlaylist = [
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:8905cjobe:playlist:4RxYuBWDE5pReFQaUyuSVJ" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:callielujan:playlist:4by4UWeEzeEx8iBPnmzQUY" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12155953641:playlist:0gAocXJtm3lMS1qRwIP0k1" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:maddielin13:playlist:5U9123Pc7nEtlusJzjlbRz" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:gh_cl:playlist:0Eh3D7eaVLGyXupmIfeflU" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:1117609909:playlist:3lTcYmxHxsnRQr0vZsJ0jh" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:littleprincesskloee:playlist:4B7SwFognFNNy8lvvPslHP" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:12131827101:playlist:5tLX2u4G69Xp4Nz1iTAGF2" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:ireneadler709:playlist:6WQkd9pd48g4HuRX8Nc1Kl" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:gracedunstan:playlist:7czteibprO1Ef2AC3GnyRI" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:valeriegonzalez29:playlist:1QjPPvDJsRT9kKVs8PVsqW" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:kaneirae:playlist:3LgR1uLDGz1dotJ34Azsqy" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:valeriegonzalez29:playlist:1QjPPvDJsRT9kKVs8PVsqW" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:unlesstheylistentonickelback:playlist:45C1YHZB9XFo5ieSmETMIe" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
]

var happyPlaylist = [
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:11124238808:playlist:2rqgtYvyGF3pxjfRv5jG79" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:philwagg:playlist:6OrjWLbT0ANpetmhrjxflp" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX4qDBKVkVBgN" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:sanik007:playlist:4AnAUkQNrLKlJCInZGSXRO" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:filtrjapan:playlist:6WcYAkrjpmQC3x7MonVzE1" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:ivarz123:playlist:0kWycnqEfYA31P87pJBtA8" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:1172856429:playlist:2TZTHN5PEkHR3noId355PD" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:redmusiccompany:playlist:0deORnapZgrxFY4nsKr9JA" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX1H4LbvY4OJi" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:filtr.br:playlist:5JvTdDQRNcEoFvkPeRJKjj" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWT9NTMXOEmdE" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXc0iyNwZI144" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWWqNJmH2i89D" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:kateyarnell:playlist:22zy9P9kROBoqpgYVUO7o6" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
]
  
var calmPlaylist = [
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:lacktus:playlist:7kZPepEfZRS8QDWUyoevOE" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:aofd3:playlist:6S0eWfvBCCdxLgkKd9VHGO" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:martinditzel:playlist:3Q9Mu89D1TSi0lYfgMm1gI" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:ryanbattles:playlist:0DOYw5K9vybLVN1lOUO9b5" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:8d14s5bvvj17qduc33vwewtfz:playlist:4TvIpIF43c3fed62ccf1nG" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX5CdVP4rz81C" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXbIGqYf7WDxP" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX8Uebhn9wzrS" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWSNmwgf7Nv11" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:chillhopmusic:playlist:0CFuMybe6s77w6QQrJjW7d" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX2UgsUIg75Vg" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX9GRpeH4CL0S" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX2vYju3i0lNX" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWZ0OzPeadl0h" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
  `<iframe src="https://open.spotify.com/embed?uri=spotify:user:allchillnations:playlist:2X5BPknxexv0e7DdDKUj0C" width="300" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
]


function displayPlaylist(mood, energy, intoxication, intensity, note) {
      console.log('display')
    
  if (mood === "sad") {
      var sadRandom = sadPlaylist[Math.floor(sadPlaylist.length * Math.random())];
      playlist.innerHTML = sadRandom
      chat.innerHTML =`<iframe src='https://minnit.chat/SadMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/SadMood' target='_blank'></a>`
      playlist.scrollIntoView({ behavior: 'smooth' }) 
  }
  
  if (mood == "angry") {
      var angryRandom = angryPlaylist[Math.floor(angryPlaylist.length * Math.random())];
      playlist.innerHTML = angryRandom
      chat.innerHTML = `<iframe src='https://minnit.chat/AngryMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/AngryMood' target='_blank'></a>`
      playlist.scrollIntoView({ behavior: 'smooth' })
  }
  
  if (mood == "neutral") {
      var neutralRandom = neutralPlaylist[Math.floor(neutralPlaylist.length * Math.random())];
      playlist.innerHTML = neutralRandom
      chat.innerHTML = `<iframe src='https://minnit.chat/NeutralMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/NeutralMood' target='_blank'></a>`
      playlist.scrollIntoView({ behavior: 'smooth' }) 
      
  }
  
  if (mood == "annoyed") {
      var annoyedRandom = annoyedPlaylist[Math.floor(annoyedPlaylist.length * Math.random())];
      playlist.innerHTML = annoyedRandom
      chat.innerHTML=`<iframe src='https://minnit.chat/AnnoyedMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/AnnoyedMood' target='_blank'></a>`
      playlist.scrollIntoView({ behavior: 'smooth' })
  }
  
  if (mood == "happy") {
      var happyRandom = happyPlaylist[Math.floor(happyPlaylist.length * Math.random())];
      playlist.innerHTML = happyRandom
      chat.innerHTML = `<iframe src='https://minnit.chat/HappyMood?embed&dark' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/HappyMood' target='_blank'></a>`
      playlist.scrollIntoView({ behavior: 'smooth' })
  }
  
  if (mood == "calm") {
      var calmRandom = calmPlaylist[Math.floor(calmPlaylist.length * Math.random())];
      playlist.innerHTML = calmRandom
      chat.innerHTML = `<iframe src='https://minnit.chat/CalmMood?embed&' width='500' height='500' style='border:none;' allowTransparency='true'></iframe><br><a href='https://minnit.chat/CalmMood' target='_blank'></a>`
      playlist.scrollIntoView({ behavior: 'smooth' })
      
  }

}
