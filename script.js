var screenVW = window.matchMedia("(orientation: portrait)")
// var screenVH = window.matchMedia("(orientation: landscape)")

window.addEventListener('resize', horScreen);

function horScreen(p1) {

  if (document.getElementById('tbody1') != undefined) {

    if (p1.matches) {
      // console.log(p1.matches);

      data[0].games.forEach(element => {
        let tr = document.createElement("tr");
        tr.innerHTML =
          `<td style="width: 80px;">${element.day}</td>
        <td>${element.vsName} <br> <a href="${element.location.linkGM}">${element.location.name}</a></td>
        <td style="width: 80px;">${element.times}</td>`;
        document.getElementById("tbody1").appendChild(tr);
      });


      data[1].games.forEach(element => {
        let tr = document.createElement("tr");
        tr.innerHTML =
          `<td style="width: 80px;">${element.day}</td>
        <td>${element.vsName} <br> <a href="${element.location.linkGM}">${element.location.name}</a></td>
        <td style="width: 80px;">${element.times}</td>`;
        document.getElementById("tbody2").appendChild(tr);
      });

    } else {
      // console.log(p1.matches);

      document.getElementById("ulH").innerHTML = ' ';
      document.getElementById("ulH2").innerHTML = ' ';


      data[0].games.forEach(function (element) {
        // console.log(index)
        let ilH = document.createElement("button");
        ilH.classList.add('bar');

        ilH.innerHTML = `${element.vsName}`

        document.getElementById("ulH").appendChild(ilH);

      })

      let ulH = document.createElement("div");
      ulH.innerHTML = `<div class="infoT">
                    <div class="d-flex flex-column justify-content-center">
                        <p>Day:</p>
                        <p style="color: orange;">${data[0].games[1].day}</p>
                    </div>
                    <div>
                        <p>Times:</p>
                        <p style="color: orange;">${data[0].games[1].times}</p>
                    </div>
                    <div>
                        <p>Location:</p>
                        <p style="color: orange;">${data[0].games[1].location.name}</p>
                    </div>
                </div>
    
                <div class="d-flex justify-content-center">
                    <iframe class="Imap" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        src="${data[0].games[1].location.Iframe}">
                    </iframe>
                </div>`
      document.getElementById('infoH').appendChild(ulH);
      ulH.classList.add('acomodo');

      let ulH2 = document.createElement("div");
      ulH2.innerHTML = `<div class="infoT">
                    <div class="d-flex flex-column justify-content-center">
                        <p>Day:</p>
                        <p style="color: orange;">${data[1].games[1].day}</p>
                    </div>
                    <div>
                        <p>Times:</p>
                        <p style="color: orange;">${data[1].games[1].times}</p>
                    </div>
                    <div>
                        <p>Location:</p>
                        <p style="color: orange;">${data[1].games[1].location.name}</p>
                    </div>
                </div>
    
                <div class="d-flex justify-content-center">
                    <iframe class="Imap" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        src="${data[1].games[1].location.Iframe}">
                    </iframe>
                </div>`
      document.getElementById('infoH2').appendChild(ulH2);
      ulH2.classList.add('acomodo');

      document.getElementById('ulH').addEventListener("click", function (e) {
        const seleccionado = [...this.children]
          .filter(el => el.className.indexOf('bar') > -1)
          .indexOf(e.target);


        if (seleccionado > -1) {
          // seleccionado.style.backgroundColor = "red";

          console.log(`position index: ${seleccionado}`);

          document.getElementById('infoH').innerHTML = ' ';

          function createInfo(s) {
            let ulH = document.createElement("div");
            ulH.innerHTML = `<div class="infoT">
                    <div class="d-flex flex-column justify-content-center">
                        <p>Day:</p>
                        <p style="color: orange;">${data[0].games[s].day}</p>
                    </div>
                    <div>
                        <p>Times:</p>
                        <p style="color: orange;">${data[0].games[s].times}</p>
                    </div>
                    <div>
                        <p>Location:</p>
                        <p style="color: orange;">${data[0].games[s].location.name}</p>
                    </div>
                </div>
    
                <div class="d-flex justify-content-center">
                    <iframe class="Imap" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        src="${data[0].games[s].location.Iframe}">
                    </iframe>
                </div>`
            document.getElementById('infoH').appendChild(ulH);
            ulH.classList.add('acomodo');
          }
          createInfo(seleccionado);

        } else {

          console.log("Nada");

        }
      });

      data[1].games.forEach(function (element) {
        // console.log(index)
        let ilH = document.createElement("button");
        ilH.classList.add('bar');

        ilH.innerHTML = `${element.vsName}`

        document.getElementById("ulH2").appendChild(ilH);

      })

      document.getElementById('ulH2').addEventListener("click", function (e) {
        const seleccionado = [...this.children]
          .filter(el => el.className.indexOf('bar') > -1)
          .indexOf(e.target);


        if (seleccionado > -1) {

          console.log(`position index: ${seleccionado}`);

          document.getElementById('infoH2').innerHTML = ' ';

          function createInfo(s) {
            let ulH2 = document.createElement("div");
            ulH2.innerHTML = `<div class="infoT">
                    <div class="d-flex flex-column justify-content-center">
                        <p>Day:</p>
                        <p style="color: orange;">${data[1].games[s].day}</p>
                    </div>
                    <div>
                        <p>Times:</p>
                        <p style="color: orange;">${data[1].games[s].times}</p>
                    </div>
                    <div>
                        <p>Location:</p>
                        <p style="color: orange;">${data[1].games[s].location.name}</p>
                    </div>
                </div>
    
                <div class="d-flex justify-content-center">
                    <iframe class="Imap" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        src="${data[1].games[s].location.Iframe}">
                    </iframe>
                </div>`
            document.getElementById('infoH2').appendChild(ulH2);
            ulH2.classList.add('acomodo');
          }
          createInfo(seleccionado);

        } else {

          console.log("Nada");

        }
      });

    }
  }
}
horScreen(screenVW)


const iconMenu = document.querySelector('#iconmenu'),
  menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  const rutaAct = e.target.getAttribute('src');

  if (rutaAct == './img/open-menu.png') {
    e.target.setAttribute('src', './img/close-menu2.png');
  } else {
    e.target.setAttribute('src', './img/open-menu.png')
  }
});



const bdark = document.querySelector('#bdark')
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
  body.classList.toggle('darkmode');
  store(body.classList.contains('darkmode'));
})

function load() {
  const dm = localStorage.getItem('darkmode');

  if (!dm) {
    store('false');
  } else if (dm == 'true') {
    body.classList.add('darkmode');
  }
}

function store(value) {
  localStorage.setItem('darkmode', value)
}

function moreInfo() {
  var plus = document.querySelector('.moreInfo');
  plus.classList.toggle("moreInfoshow")
}

function moreInfo2() {
  var plus = document.querySelector('.moreInfo2');
  // var plustxt = document.getElementById("plustxt")
  plus.classList.toggle("moreInfoshow")
}

function moreInfo3() {
  var plus = document.querySelector('.moreInfo3');
  plus.classList.toggle("moreInfoshow")
}

var cargarPagina = (id) => {
  document.getElementById("homePage").style.display = "none"
  document.getElementById("aboutPage").style.display = "none"
  document.getElementById("formPage").style.display = "none"
  document.getElementById("infoPage").style.display = "none"
  document.getElementById("rulesPage").style.display = "none"
  document.getElementById("contactPage").style.display = "none"
  document.getElementById("loginPage").style.display = "none"
  document.getElementById("regiuserPage").style.display = "none"
  document.getElementById("showDataNYSL").style.display = "none"
  document.getElementById(id).style.display = "block"
}
cargarPagina("homePage")

'use strict';


// Shortcuts to DOM Elements.
var messageForm = document.getElementById('message-form');
var messageInput = document.getElementById('new-post-message');
var titleInput = document.getElementById('new-post-title');
var signInButton = document.getElementById('sign-in-button');
var signInButtonFB = document.getElementById('sign-in-button-FB');
var signInButtonMAIL = document.getElementById('sign-in-button-MAIL');
var email = document.getElementById('usernameNYSL');
var password = document.getElementById('passwordNYSL');
var signOutButton = document.getElementById('sign-out-button');
var splashPage = document.getElementById('page-splash');
var addPost = document.getElementById('add-post');
var addButton = document.getElementById('add');
var recentPostsSection = document.getElementById('recent-posts-list');
var userPostsSection = document.getElementById('user-posts-list');
var topUserPostsSection = document.getElementById('top-user-posts-list');
var recentMenuButton = document.getElementById('menu-recent');
var myPostsMenuButton = document.getElementById('menu-my-posts');
var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
var listeningFirebaseRefs = [];

/**
 * Saves a new post to the Firebase DB.
 */

function writeNewPost(uid, username, picture, title, body) {
  var gameSelected = document.getElementById('gameselect').value
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
    game: gameSelected
  };


  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

/**
 * Star/unstar post.
 */
function toggleStar(postRef, uid) {
  postRef.transaction(function (post) {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}

/**
 * Creates a post element.
 */
function createPostElement(postId, title, text, author, authorId, authorPic) {
  var uid = firebase.auth().currentUser.uid;

  var html =
    '<div class="post post-' + postId + ' mdl-cell mdl-cell--12-col ' +
    'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
    '<div class="mdl-card mdl-shadow--2dp">' +
    '<div class="mdl-card__title mdl-color--light-green-600 mdl-color-text--white">' +
    '<h4 class="mdl-card__title-text"></h4>' +
    '</div>' +
    '<div class="header">' +
    '<div>' +
    '<div class="avatar"></div>' +
    '<div class="username mdl-color-text--black"></div>' +
    '</div>' +
    '</div>' +
    '<span class="star">' +
    '<div class="not-starred material-icons">star_border</div>' +
    '<div class="starred material-icons">star</div>' +
    '<div class="star-count">0</div>' +
    '</span>' +
    '<div class="text"></div>' +
    '<div class="comments-container"></div>' +
    '<form class="add-comment" action="#">' +
    '<div class="mdl-textfield mdl-js-textfield">' +
    '<input class="mdl-textfield__input new-comment" type="text">' +
    '<label class="mdl-textfield__label">Comment...</label>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>';

  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  
  var postElement = div.firstChild; 
  if (componentHandler) {
    componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
  }

  var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
  var commentInput = postElement.getElementsByClassName('new-comment')[0];
  var star = postElement.getElementsByClassName('starred')[0];
  var unStar = postElement.getElementsByClassName('not-starred')[0];

  // Set values.
  postElement.getElementsByClassName('text')[0].innerText = text;
  postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
  postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
  postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
    (authorPic || './silhouette.jpg') + '")';

  // Listen for comments.
  var commentsRef = firebase.database().ref('post-comments/' + postId);
  commentsRef.on('child_added', function (data) {
    addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_changed', function (data) {
    setCommentValues(postElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_removed', function (data) {
    deleteComment(postElement, data.key);
  });

  // Listen for likes counts.
  var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
  starCountRef.on('value', function (snapshot) {
    updateStarCount(postElement, snapshot.val());
  });

  // Listen for the starred status.
  var starredStatusRef = firebase.database().ref('posts/' + postId + '/stars/' + uid);
  starredStatusRef.on('value', function (snapshot) {
    updateStarredByCurrentUser(postElement, snapshot.val());
  });

  // Keep track of all Firebase reference on which we are listening.
  listeningFirebaseRefs.push(commentsRef);
  listeningFirebaseRefs.push(starCountRef);
  listeningFirebaseRefs.push(starredStatusRef);

  // Create new comment.
  addCommentForm.onsubmit = function (e) {
    e.preventDefault();
    createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
    commentInput.value = '';
    commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
  };

  // Bind starring action.
  var onStarClicked = function () {
    var globalPostRef = firebase.database().ref('/posts/' + postId);
    var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
    toggleStar(globalPostRef, uid);
    toggleStar(userPostRef, uid);
  };
  unStar.onclick = onStarClicked;
  star.onclick = onStarClicked;

  return postElement;
}

/**
 * Writes a new comment for the given post.
 */
function createNewComment(postId, username, uid, text) {
  firebase.database().ref('post-comments/' + postId).push({
    text: text,
    author: username,
    uid: uid
  });
}

/**
 * Updates the starred status of the post.
 */
function updateStarredByCurrentUser(postElement, starred) {
  if (starred) {
    postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
    postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
  } else {
    postElement.getElementsByClassName('starred')[0].style.display = 'none';
    postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
  }
}

/**
 * Updates the number of stars displayed for a post.
 */
function updateStarCount(postElement, nbStart) {
  postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
}

/**
 * Creates a comment element and adds it to the given postElement.
 */
function addCommentElement(postElement, id, text, author) {
  var comment = document.createElement('div');
  comment.classList.add('comment-' + id);
  comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
  comment.getElementsByClassName('comment')[0].innerText = text;
  comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';

  var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
  commentsContainer.appendChild(comment);
}

/**
 * Sets the comment's values in the given postElement.
 */
function setCommentValues(postElement, id, text, author) {
  var comment = postElement.getElementsByClassName('comment-' + id)[0];
  comment.getElementsByClassName('comment')[0].innerText = text;
  comment.getElementsByClassName('fp-username')[0].innerText = author;
}

/**
 * Deletes the comment of the given ID in the given postElement.
 */
function deleteComment(postElement, id) {
  var comment = postElement.getElementsByClassName('comment-' + id)[0];
  comment.parentElement.removeChild(comment);
}

/**
 * Starts listening for new posts and populates posts lists.
 */
var selec = document.getElementById('gameselect')

selec.addEventListener("change",()=>{
  startDatabaseQueries();
  // console.log(selec)
})

function startDatabaseQueries() {

  var gameSelected = document.getElementById('gameselect').value
  var myUserId = firebase.auth().currentUser.uid;
  // var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
  var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
  var userPostsRef = firebase.database().ref('user-posts/' + myUserId);
  // var gamesPostRef = firebase.database().ref('posts').orderByChild('game').equalTo(gameSelected);

  
  var fetchPosts = function (postsRef, sectionElement) {
    
    cleanupUi()
    postsRef.on('child_added', function (data) {
      
      if (data.val().game == gameSelected) {
      var author = data.val().author || 'Anonymous';
      var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      containerElement.insertBefore(
        createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
        containerElement.firstChild);
      }
    });
    postsRef.on('child_changed', function (data) {
      if (data.val().game == gameSelected) {
      var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      var postElement = containerElement.getElementsByClassName('post-' + data.key)[0];
      postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.val().title;
      postElement.getElementsByClassName('username')[0].innerText = data.val().author;
      postElement.getElementsByClassName('text')[0].innerText = data.val().body;
      postElement.getElementsByClassName('star-count')[0].innerText = data.val().starCount;
      }
    });
    postsRef.on('child_removed', function (data) {
      if (data.val().game == gameSelected) {
      var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      var post = containerElement.getElementsByClassName('post-' + data.key)[0];
      post.parentElement.removeChild(post);
      }
    });
  };

  // Fetching and displaying all posts of each sections.
  //  fetchPosts(topUserPostsRef, topUserPostsSection);
  fetchPosts(recentPostsRef, recentPostsSection);
  fetchPosts(userPostsRef, userPostsSection);
  // fetchPosts(gamesPostRef, recentPostsSection);
  // fetchPosts(gamesPostRef, userPostsSection);


  // Keep track of all Firebase refs we are listening to.
  // listeningFirebaseRefs.push(topUserPostsRef);
  listeningFirebaseRefs.push(recentPostsRef);
  listeningFirebaseRefs.push(userPostsRef);
}

/**
 * Writes the user's data to the database.
 */
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

/**
 * Cleanups the UI and removes all Firebase listeners.
 */
function cleanupUi() {
  // Remove all previously displayed posts.
  //  topUserPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
  recentPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
  userPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';

  // Stop all currently listening Firebase listeners.
  listeningFirebaseRefs.forEach(function (ref) {
    ref.off();
  });
  listeningFirebaseRefs = [];
}

/**
 * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
 * programmatic token refresh but not a User status change.
 */
var currentUID;

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {
  // We ignore token refresh events.
  if (user && currentUID === user.uid) {
    return;
  }

  cleanupUi();
  if (user) {
    currentUID = user.uid;
    splashPage.style.display = 'none';
    signOutButton.style.display = "block";
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    startDatabaseQueries();
  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    splashPage.style.display = '';
    signOutButton.style.display = "none";
    
  }
}


// if (splashPage.style.display = 'none'){

// }
/**
 * Creates a new post for the current user.
 */
function newPostForCurrentUser(title, text) {
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    return writeNewPost(firebase.auth().currentUser.uid, username,
      firebase.auth().currentUser.photoURL,
      title, text);
  });
}

/**
 * Displays the given section element and changes styling of the given button.
 */
function showSection(sectionElement, buttonElement) {
  recentPostsSection.style.display = 'none';
  userPostsSection.style.display = 'none';
  //  topUserPostsSection.style.display = 'none';
  addPost.style.display = 'none';
  recentMenuButton.classList.remove('is-active');
  myPostsMenuButton.classList.remove('is-active');
  //  myTopPostsMenuButton.classList.remove('is-active');

  if (sectionElement) {
    sectionElement.style.display = 'block';
  }
  if (buttonElement) {
    buttonElement.classList.add('is-active');
  }
}

// Bindings on load.
window.addEventListener('load', function () {
  // Bind Sign in button.
  signInButton.addEventListener('click', function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });

  signInButtonFB.addEventListener('click', function () {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });



  // Bind Sign out button.
  signOutButton.addEventListener('click', function () {
    firebase.auth().signOut();
  });

  // Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  // Saves message on form submit.
  messageForm.onsubmit = function (e) {
    e.preventDefault();
    var text = messageInput.value;
    var title = titleInput.value;
    if (text && title) {
      newPostForCurrentUser(title, text).then(function () {
        myPostsMenuButton.click();
      });
      messageInput.value = '';
      titleInput.value = '';
    }
  };

  // Bind menu buttons.
  recentMenuButton.onclick = function () {
    showSection(recentPostsSection, recentMenuButton);
  };
  myPostsMenuButton.onclick = function () {
    showSection(userPostsSection, myPostsMenuButton);
  };
  addButton.onclick = function () {
    showSection(addPost);
    messageInput.value = '';
    titleInput.value = '';
  };
  recentMenuButton.onclick();
}, false);

// console.log(document.getElementById('usernameNYSL').value)

function signUpWithEmailPassword() {
  var email = document.getElementById('usernameNYSL').value;
  var password = document.getElementById('passwordNYSL').value;
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
}

var gamesID = document.querySelector('gameselection')

data[0].games.forEach(game => {
  let option = document.createElement("option");
  option.innerHTML = `${game.vsName}`
  option.value = `${game.vsName}`
  document.getElementById("gameselect").appendChild(option);
})

data[1].games.forEach(game => {
  let option = document.createElement("option");
  option.innerHTML = `${game.vsName}`
  option.value = `${game.vsName}`
  document.getElementById("gameselect").appendChild(option);
})

