/*	don't display the footer bio link on the bio */
$(document).on(':passageinit', function (ev) {
  if (ev.passage.title == "bio") {
    v.viewingBio = true;
  } else {
    v.viewingBio = false;
  }
});