// examine

/*  replaces the HTML element with the given `id` (default is "end") by
    `objDescription` */
s.examine = function(objDescription, id) {
  let txt = jQuery("#" + (id || "end")).html();
  jQuery(".description").empty()
  jQuery("#" + (id || "end")).wiki(objDescription);
  if (txt == jQuery("#" + (id || "end")).html()) {
    jQuery("#" + (id || "end")).empty();
  }
  return;
}
