---
title: Bathroom
---

[<< Blackout GM Guide](../start.html)

# Bathroom

**Contents:**

<!-- MDTOC maxdepth:6 firsth1:0 numbering:1 flatten:0 bullets:0 updateOnSave:0 -->

1. [(done) Describe](#done-describe)   
2. [(done) Actions](#done-actions)   
&emsp;2.1. [(done) remove loose tiles](#done-remove-loose-tiles)   
&emsp;2.2. [(done) take cocaine](#done-take-cocaine)   
&emsp;2.3. [(done) search memory](#done-search-memory)   
&emsp;2.4. [(done) search cabinet](#done-search-cabinet)   
&emsp;2.5. [(done) hide in shower](#done-hide-in-shower)   
&emsp;2.6. [(done) block door with construction materials](#done-block-door-with-construction-materials)   
&emsp;2.7. [(done) climb out window](#done-climb-out-window)   
&emsp;2.8. [(done) go to bedroom](#done-go-to-bedroom)   
3. [(done) Rules](#done-rules)   
&emsp;3.1. [(done) low roll rule](#done-low-roll-rule)   
&emsp;3.2. [(done) fail rule](#done-fail-rule)   
&emsp;3.3. [(done) alley rule](#done-alley-rule)   

<!-- /MDTOC -->

*Through the window, you see a black Mustang pull into the alley out back. There are heavy construction materials under the window. You could climb on them to get out the window. Stinky bum stuff is in the shower*

## (done) Describe

~~medicine cabinet with blood stain~~  
~~shower~~  
~~window~~  
~~construction materials~~  
~~Mustang~~  
~~loose tiles (if loose tiles visible)~~  
~~cocaine (if cocaine visible)~~  
~~sports jerseys~~  
~~bum stuff~~  
~~if first time in bathroom~~:
> ~~add bum stuff to facts~~

## (done) Actions

### (done) remove loose tiles

**~~check~~:**  
~~hide if loose tiles hidden or (detective not in porch and construction materials not blocking door)~~

**~~carry out~~:**  
~~move loose tiles~~  
~~unhide cocaine~~  
~~show [take cocaine action](#take-cocaine)~~  
*~~You find bags of cocaine under the tiles~~*  
~~describe outcome~~  
~~hide this action~~

### (done) take cocaine

**~~check~~:**  
~~hide if cocaine hidden or (detective not in porch and construction materials not blocking door)~~

**~~carry out~~:**  
~~remove cocaine from room~~  
~~add cocaine to inventory~~  
~~mark XP~~  
~~describe outcome~~  
~~hide this action~~

### (done) search memory

**~~check~~:**  
~~hide if searched memory or detective not in porch~~

**~~carry out~~:**  
~~follow [remember tattoo rule](general-rules.html#remember-tattoo-rule) in [General rules](general-rules.html)~~  
~~roll+INT~~  
~~if 6-~~:
> ~~follow [low roll rule](#low-roll-rule)~~

~~else~~:
> ~~if 10+~~:
> > ~~follow [remember Mustang rule](general-rules.html#remember-mustang-rule) in [General rules](general-rules.html)~~

~~hide this action~~

### (done) search cabinet

**~~check~~:**  
~~hide if cabinet searched or (detective not in porch and construction materials not blocking door)~~

**~~carry out:~~**  
~~mark phone as discovered~~  
~~add phone to inventory~~  
*~~You find your phone~~*  
~~describe outcome~~  
~~unless woman is known:~~
>  ~~add woman to knowledge~~  
*~~You see photos of yourself playing pool with a woman~~*

~~if detective on porch:~~
> ~~roll+WIS~~  
~~if 6-~~:
> > ~~follow [low roll rule](#low-roll-rule)~~
>
> ~~else if 10+~~:
> > ~~add Russian to knowledge~~  
~~add loose tiles to room~~  
~~show [remove loose tiles action](#remove-loose-tiles)~~  
*~~Your phone has photos and videos of a Russian man watching you and a woman. You see loose tiles in the corner, reflected in the mirror~~*  
~~describe outcome~~

~~hide this action~~

### (done) hide in shower

**~~check~~:**  
~~hide if detective not in hallway and shelf not down~~

**~~carry out~~:**  
*~~You hide and hold your breath~~*  
~~describe outcome~~  
~~offer futile choices~~:
* ~~peek out~~
* ~~take a breath~~
* ~~keep holding breath~~

~~put player in cop car  ~~
*~~The detective finds you and arrests you~~*  
~~describe outcome~~  
~~goto [Streets](../warehouse/streets.html)~~

### (done) block door with construction materials

**~~check~~:**  
~~hide if door blocked or (detective not in hallway and shelf not down)~~

**carry out:**  
~~roll+STR+1, without fail option~~  
~~if mixed outcome:~~
> ~~add broken toe to injuries~~  
~~mark 1 dmg~~

~~construction materials blocking door~~  
~~recheck actions~~  
~~describe outcome~~  
~~hide this action~~

### (done) climb out window

**~~check~~:**  
~~none~~

**~~carry out~~:**  
~~if detective in porch~~:
> ~~if no rolls yet and never climbed out window~~:
> > *~~You think twice about leaving so soon~~*  
~~describe outcome~~
>
> ~~else if no rolls yet~~:
> > *~~You regret leaving so soon~~*  
~~describe outcome~~  
~~follow [alley rule](#alley-rule)~~
>
> ~~else~~:
> > ~~follow [alley rule](#alley-rule)~~

~~else~~:
> ~~roll+DEX~~  
~~if 6-~~:
> > ~~add concussion to injuries~~  
~~mark 1 dmg~~  
~~take knife from inventory~~  
~~put player in cop car~~  
*~~You're not fast enough. Cops burst in, tackle you, bang your head on floor, cuff you, and take you away~~*  
~~describe outcome~~  
~~goto [Streets](../warehouse/streets.html)~~
>
> ~~else~~:
> > ~~if 7-9 and phone in inventory~~:
> > > ~~remove phone from inventory~~  
> ~~put phone in bathroom~~
> >
> > ~~else if 7-9 and knife in inventory~~:
> > > ~~remove knife from inventory~~  
> ~~put knife in bathroom~~
> >
> > *~~It's a tight squeeze. You may have dropped something, but you make it out~~*  
~~describe outcome~~  
~~goto [Alley](alley.html)~~


### (done) go to bedroom

**~~check~~:**  
~~hide unless detective pounding on door~~

**~~carry out~~:**  
~~goto [Bedroom](010bedroom.html)~~

## (done) Rules

### (done) low roll rule

~~mark XP~~  
~~if no rolls yet and detective pounding on door~~:  
> ~~hide [go to bedroom action](#go-to-bedroom)~~  
~~follow [soft fail rule](general-rules.html#soft-fail-rule) in [General rules](general-rules.html)~~

~~else~~:
> ~~follow [fail rule](#fail-rule)~~


### (done) fail rule

~~detective not pounding on door~~  
~~detective not using crowbar~~  
~~put detective in hallway~~  
~~recheck actions~~  
*~~You hear the cops bust into the house~~*  
~~describe outcome~~

### (done) alley rule

*~~The woman in the Mustang beckons to you.~~*  
~~describe outcome~~  
~~offer futile choices~~:
* ~~approach~~
* ~~ask who she is~~
* ~~run away~~

~~add concussion to injuries~~  
~~mark 1 dmg~~  
~~goto [Warehouse](../warehouse/warehouse.html)~~
