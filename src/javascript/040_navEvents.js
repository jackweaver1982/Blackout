/*	get the current passage, regardless of whether saving to history or not */
$(document).on(':passageinit', function (ev) {
  v.curPassage = ev.passage;
});