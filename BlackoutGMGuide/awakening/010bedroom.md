---
title: Bedroom
---

[<< Blackout GM Guide](../start.html)

# Bedroom

**Contents:**

<!-- MDTOC maxdepth:6 firsth1:0 numbering:1 flatten:0 bullets:0 updateOnSave:0 -->

1. [(done) Describe](#done-describe)   
2. [(done) Actions](#done-actions)   
&emsp;2.1. [(done) take knife](#done-take-knife)   
&emsp;2.2. [(done) search body](#done-search-body)   
&emsp;2.3. [(done) take wallet](#done-take-wallet)   
&emsp;2.4. [(done) search memory](#done-search-memory)   
&emsp;2.5. [(done) go to hallway](#done-go-to-hallway)   
&emsp;2.6. [(done) go to bathroom](#done-go-to-bathroom)   
3. [(done) Rules](#done-rules)   
&emsp;3.1. [(done) fail rule](#done-fail-rule)   

<!-- /MDTOC -->

*~~You wake in an unknown bedroom, the victim of an alcoholic blackout. Your clothes are bloody and an unfamiliar man lies dead on the floor, a knife stuck in him. Someone's pounding on the front door.~~*

## (done) Describe

~~player (add headache to injuries)~~  
~~clothes (add to inventory)~~  
~~bedroom door~~  
~~bathroom door~~  
~~pounding sound (if detective pounding on door)~~  
~~body~~  
~~knife (if in room)~~

## (done) Actions

### (done) take knife

**~~check~~:**  
~~hide unless knife in room~~  

**~~carry out~~:**  
~~remove knife from room~~  
~~add knife to inventory~~  
~~describe outcome~~  
~~hide this action~~  

### (done) search body

**~~check~~:**  
~~hide if searched body~~

**~~carry out~~:**  
~~roll+WIS~~  
~~if 6-~~:  
> ~~follow the [fail rule](#fail-rule)~~

~~else~~:  
> ~~add cat involved to knowledge~~  
*~~The body has scratches and cat fur on it.~~*  
~~describe outcome~~  
~~if 10+:~~  
> > ~~add police at door to knowledge~~  
~~add wallet to room~~  
~~add same last name to knowledge~~  
~~show [take wallet action](#take-wallet)~~  
*~~You hear police radios outside. The victim's wallet has his ID. He has the same last name as you.~~*  
~~describe outcome~~

~~hide this action~~

### (done) take wallet

**~~check~~:**  
~~hide unless wallet in room~~

**~~carry out~~:**  
~~remove wallet from room~~  
~~add wallet to inventory~~  
~~describe outcome~~  
~~hide this action~~  

### (done) search memory

**~~check~~:**  
~~hide if searched memory~~  

**~~carry out~~:**  
~~roll+INT~~  
~~if 6-~~:  
> ~~add woman to knowledge~~  
~~add tattoo to knowledge~~  
~~*You remember being with a woman at a bar. She had a strange tattoo.*~~  
~~describe outcome~~  
~~follow the [fail rule](#fail-rule)~~

~~else~~:  
> ~~follow [remember tattoo rule](general-rules.html#remember-tattoo-rule) in [General rules](general-rules.html)~~  
~~if 10+~~:  
> > ~~follow [remember Mustang rule](general-rules.html#remember-mustang-rule) in [General rules](general-rules.html)~~

~~hide this action~~

### (done) go to hallway

**~~check~~:**  
~~hide unless detective pounding on door and not gone to hallway~~

**~~carry out~~:**  
~~add police at door to knowledge~~  
*~~You briefly consider turning yourself in, then think better of it and return to the bedroom.~~*  
~~describe outcome~~  
~~hide this action~~  

### (done) go to bathroom

**~~check~~:**  
~~none~~

**~~carry out~~:**  
~~if detective pounding on door and gone to bathroom~~:  
> ~~follow [soft fail rule](general-rules.html#soft-fail-rule) in [General rules](general-rules.html)~~  

~~goto [Bathroom](030bathroom.html)~~

## (done) Rules

### (done) fail rule

~~mark XP~~  
~~if no rolls yet and detective pounding on door:~~
> ~~hide [go to hallway](#go-to-hallway) action~~  
~~follow [soft fail rule](general-rules.html#soft-fail-rule) in [General rules](general-rules.html)~~

~~else:~~
> ~~detective not pounding on door~~  
~~detective not using crowbar~~  
~~put detective in bedroom~~  
~~goto [Cops bust in](020cops-bust-in.html)~~  
