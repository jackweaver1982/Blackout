# Change Log

## Version 2.0

* deleted superfluous `lastEdited` variable
* changed "game" to "story" in RNG splash screen
* changed "help" to "info" in header and save popup
* edited message web page for alpha testers
* inserted correct link to beta feedback form
* changed wording of "beta version" on title screen
* deleted old beta form placeholder file
* edited README
* deleted old index.md and index.html
* noticed that version checking in the save system has been broken since v1.11; renamed `version.js` to `_version.js`, so it would load into Tweego before `bookmark.js` (the latter uses the former)
* added comments to JS files indicating which other files they require; renamed files so they process in the correct order

## Version 1.12

* added an html version of the change log
* added a preface to the GM Guide containing a link to the change log
* rewrote the code related to character sheet notifications so it's more like an object oriented approach
* added comments to JavaScript files
* when getting arrested at the house, the cops now take all your belongings in the same passage where they take your knife, so as to minimize character sheet notifications
* made several edits so that the bio would change after you learn that you're the bum

## Version 1.11

* reorganized JavaScript files

## Version 1.10

* changed cheat code to help-help-bio-help-bio-help-help
* edit cheat code description in GM info section of repository
* in bio, moved "return to story" link to footer and changed text to "exit character sheet"
* changed links inside a yellow line of text to be orange instead of blue

## Version 1.9

* fixed error where visiting help from character sheet would result in no link back to character sheet
* changed cheat code to help-help-bio-help-bio-help, to avoid two consecutive bio clicks
* fixed a bug where if you discovered the wallet in the house, then when you saw it in the warehouse and clicked on it, the description would appear one paragraph lower than it should

## Version 1.8

* split `eqSet()` into two functions, one of which checks for subset
* corrected `you lost one or more items` notification to not check for size of inventory, but for actually missing items (using the new subset function)
* moved the updating of the bio view into a JS function
* removed "view Character Sheet" link from the Character Sheet
* added an initialization of the `bioLastViewed` object
* moved checking for bio view differences to a JS function
* moved setting the style of bio diffs to a JS function

## Version 1.7

* added `ss` as a JS shortcut for `settings`
* added a setting to turn on and off Character Sheet notifications
* edited `setup.eqSet()` for readability
* split JS function file into multiple files

## Version 1.6

* implemented a system to notify the player of changes to the Character Sheet

## Version 1.5

* changed "bio" link to "view Character Sheet" and moved to footer
* redesigned character sheet
* added "Bonuses" to character sheet to reflect when PC has leveled up
* added an RNG warning and info about Character Sheet in a forced message at the beginning of the game

## Version 1.4

* reorganized JavaScript files
* created a temporary URL for a fillable feedback form to be developed later
* in beta mode, added a link to temp URL on title screen
* in beta mode, added a link to temp URL on every ending
* in beta mode, added a link to temp URL on acknowledgments
* updated acknowledgments
* "THE END" is no longer a link; added a separate link to view acknowledgments
* noun descriptions are now yellow
* clicking on a noun description now makes all other noun descriptions disappear

## Version 1.3

* edited detective's dialog for character consistency
* edited Russian's dialog for character consistency
* edited woman's dialog for character and narrative consistency
* extended the intro to include the PC's name and where he works
* changed help screen headings from yellow to lime
* added work shirt and name reference when entering bathroom
* added work shirt on victim to end flashback
* fixed narrative error in end flashback: victim cannot take a selfie after leaving his phone on the counter
* in end flashback, victim's friend now says, "it's your turn"
* in end flashback, you now explicitly take the victim's phone
* added a secret happy ending

## Version 1.2

* if the PC goes to the warehouse directly from the house and had one or more things taken from his inventory, the narration now explicitly says your things were taken
* improved explanation of how you remove your handcuffs
* when jumping off the platform, narrative has been edited for clarity and logical consistency
* added headings on help screen for improved readability
* changed the description of the medicine cabinet so the player no longer looks in the mirror
* added a link to acknowledgments to every ending
* added a beta mode boolean toggle to settings, defaulting to true
* in beta mode, added a version number to title screen
* removed version number and date last edited from help screen
* changed internal version number to integer (e.g. 102 corresponds to 1.2, 120 corresponds to 1.20, etc.)
* new saves will now record the version number
* blocked the loading of saves from old versions (loading old versions still allowed in debug mode)

## Version 1.1

* fixed minor typos
* changed woman's name to from Natasha to Kira

## Version 1.0

This was the original version released for alpha testing.
