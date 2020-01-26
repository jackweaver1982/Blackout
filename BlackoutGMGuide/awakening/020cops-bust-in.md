---
title: Cops Bust In
---

[<< Blackout GM Guide](../start.html)

# Cops bust in

**Contents:**

<!-- MDTOC maxdepth:6 firsth1:0 numbering:1 flatten:0 bullets:0 updateOnSave:0 -->

1. [(done) Describe](#done-describe)   
2. [(done) Basic actions](#done-basic-actions)   
&emsp;2.1. [(done) talk to detective](#done-talk-to-detective)   
&emsp;2.2. [(done) surrender](#done-surrender)   
3. [(done) Combat actions](#done-combat-actions)   
&emsp;3.1. [(done) go to bathroom](#done-go-to-bathroom)   
&emsp;3.2. [(done) tackle detective](#done-tackle-detective)   
&emsp;3.3. [(done) charge detective with knife](#done-charge-detective-with-knife)   
&emsp;3.4. [(done) throw knife at detective](#done-throw-knife-at-detective)   
4. [(done) Dialogue actions](#done-dialogue-actions)   
&emsp;4.1. [(done) tell detective about ignorance](#done-tell-detective-about-ignorance)   
&emsp;4.2. [(done) tell detective about cat](#done-tell-detective-about-cat)   
&emsp;4.3. [(done) tell detective about setup](#done-tell-detective-about-setup)   
&emsp;4.4. [(done) tell detective about woman with tattoo](#done-tell-detective-about-woman-with-tattoo)   
&emsp;4.5. [(done) tell detective about bomb](#done-tell-detective-about-bomb)   
&emsp;4.6. [(done) do something else](#done-do-something-else)   
5. [(done) Rules](#done-rules)   
&emsp;5.1. [(done) tackled rule](#done-tackled-rule)   
&emsp;5.2. [(done) shot rule](#done-shot-rule)   

<!-- /MDTOC -->

*~~The detective and two uniform cops bust in, guns out, telling you to get on the floor.~~*

## (done) Describe

~~detective~~  

## (done) Basic actions

### (done) talk to detective

**~~check~~:**  
~~hide unless player is not talking to detective~~

**~~carry out~~:**  
~~player is talking to detective~~  
~~hide [basic](#basic-actions) and [combat actions](#combat-actions)~~  
~~show [dialogue actions](#dialogue-actions)~~

### (done) surrender

**~~check~~:**  
~~hide unless player is not talking to detective~~

**carry out:**  
~~if seen bum stuff~~:
> ~~put player in cop car~~  
~~remove knife from inventory~~  
*~~Cops cuff you and take you away~~.*  
~~describe outcome~~  
~~goto [Streets](../warehouse/streets.html)~~

~~else~~:
> ~~*You go to prison*~~  
~~describe outcome~~  
~~**THE END**~~

## (done) Combat actions

### (done) go to bathroom

**~~check~~:**  
~~hide unless player is not talking to detective~~

**~~carry out~~:**  
~~decrement relationship with detective~~  
~~roll+DEX~~  
~~if 6-~~:
> ~~mark XP~~  
~~follow [tackled rule](#tackled-rule)~~

~~else~~:
> ~~shelf is down~~  
*~~You knock the shelf down to slow the cops~~*  
~~describe outcome~~

### (done) tackle detective

**~~check~~:**  
~~hide unless player is not talking to detective~~

**~~carry out~~:**  
~~follow [shot rule](#shot-rule)~~

### (done) charge detective with knife

**~~check~~:**  
~~hide unless knife in inventory and player is not talking to detective~~

**~~carry out~~:**  
~~follow [shot rule](#shot-rule)~~

### (done) throw knife at detective

**~~check~~:**  
~~hide unless knife in inventory and player is not talking to detective~~

**~~carry out~~:**  
~~player is not talking to detective~~  
~~follow [shot rule](#shot-rule)~~

## (done) Dialogue actions

### (done) tell detective about ignorance

**~~check~~:**  
~~hide unless player is talking to detective~~

**~~carry out~~:**  
~~player is not talking to detective~~  
~~follow [tackled rule](#tackled-rule)~~

### (done) tell detective about cat

**~~check~~:**  
~~hide unless player is talking to detective and cat involved is known~~

**~~carry out~~:**  
~~player is not talking to detective~~  
~~follow [tackled rule](#tackled-rule)~~

### (done) tell detective about setup

**~~check~~:**  
~~hide unless player is talking to detective~~

**~~carry out~~:**  
~~player is not talking to detective~~  
~~follow [tackled rule](#tackled-rule)~~

### (done) tell detective about woman with tattoo

**~~check~~:**  
~~hide unless player is talking to detective
and tattoo is known~~

**~~carry out~~:**  
~~player is not talking to detective~~  
~~follow [tackled rule](#tackled-rule)~~

### (done) tell detective about bomb

**~~check~~:**  
~~hide unless player is talking to detective~~

**~~carry out~~:**  
~~decrement relationship with detective~~  
~~roll+CHA~~  
~~if 6-~~:
> ~~mark XP~~  
~~player is not talking to detective~~  
~~follow [tackled rule](#tackled-rule)~~

~~else if 7-9~~:
> *~~Cops wait for evidence of bomb. You don't have any.~~*  
~~describe outcome~~  
~~player is not talking to detective~~  
~~hide [dialogue actions](#dialogue-actions)~~  
~~show [combat actions](#combat-actions)~~

~~else~~:
> ~~player is not talking to detective~~  
~~shelf down~~  
*~~Cops lower guns and hesitate, but are skeptical. You knock over shelf to slow them down~~*  
~~describe outcome~~  
~~goto [Bathroom](030bathroom.html)~~

### (done) do something else

**~~check~~:**  
~~hide unless player is talking to detective~~

**~~carry out~~:**  
~~player is not talking to detective~~  
~~hide [dialogue actions](#dialogue-actions)~~  
~~show [basic](#basic-actions) and [combat actions](#combat-actions)~~

## (done) Rules

### (done) tackled rule

~~add concussion to injuries~~  
~~mark 1 dmg~~  
~~if seen bum stuff:~~
> ~~put player in cop car~~  
~~remove knife from inventory~~  
*~~Cops tackle you, bang your head on floor, cuff you, and take you away.~~*  
~~describe outcome~~  
~~goto [Streets](../warehouse/streets.html)~~

~~else:~~
> ~~*You go to prison*~~  
~~describe outcome~~  
**~~THE END~~**

### (done) shot rule

~~decrement relationship with detective~~  
~~add gunshot to injuries~~  
~~mark 2 dmg~~  
~~remove knife from inventory~~  
~~if seen bum stuff:~~
> ~~put player in ambulance~~  
*~~Uniformed cop shoots your shoulder. You're taken away in an ambulance.~~*  
~~describe outcome~~  
~~goto [Streets](../warehouse/streets.html)~~

~~else:~~
> ~~*You go to the hospital, then prison*~~  
~~describe outcome~~  
~~**THE END**~~
