---
title: Blackout GM Guide
---

# Blackout GM Guide

## What is this?

Blackout is a choice-based work of interactive fiction. The mechanics which underlie it are based on a tabletop RPG system called *Powered by the Apocalypse* (PbtA). This guide is an outline to the game which, ideally, will be understandable to anyone who has played a PbtA game, such as Dungeon World or Simple World.

Blackout is built in Twine. This guide can also be considered a pseudocode version of the Twine passages.

Although this guide can be useful when coding Blackout, the guide itself is not meant to be a full programming outline. It's primary purpose is to be a human-readable outline of the story branches. If it can be used as a kind of "module" in a PbtA game, then it has served its purpose.

Occasionally, the guide contains highlighted annotations. The annotations "<mark>todo</mark>" and "<mark>to be continued</mark>" indicate something that needs to be written, with "<mark>todo</mark>" being the higher priority. Strikethroughs indicate items that have already been coded.

## How to use the guide

Read this guide as though you are the GM of an RPG which uses the PbtA system, and you are using the guide as a module to help you run a gaming session.

Each passage contains at least two sections. The first is the "describe" section. It begins with italicized text meant only for the GM and used to orient the GM to what is going on in this passage. In general, italicized text in this guide always serves this purpose. After the orienting text is a list of things for the GM to describe to the player.

The next section is the "actions" section. It contains the actions that are available to the player during the given passage. Each action has a "check" section and a "carry out" section. The "check" section usually begins with "hide if" or "hide unless" and gives conditions under which the GM should offer that option to the player. The "carry out" section gives instructions for the GM to follow if the player chooses that action.

Sometimes you will see "rules" listed in the guide. They are generally self-explanatory and written for human-readability. Their implementation in the code, however, is significantly different. For further details on this, see the [technical notes](techNotes.html).

## Postscript on PbtA principles

After developing the first half of this game, I realized that a strict and complete adherence to PbtA principles was going to make for a very large project. By strict and complete, I mean including with each scenario a decently sized handful of options that a PbtA player might think of, and including three outcomes (success, mixed, and fail) for each option. Since this was supposed to be a small, experimental project, I knew I could not keep that up.

For the second half of the game, the passage structure resembles more of a classic <a href="https://heterogenoustasks.wordpress.com/2015/01/26/standard-patterns-in-choice-based-games/" target="_blank">gauntlet-style interactive fiction</a>. That said, I did not abandon PbtA principles entirely in the second half. I used them behind the scenes to create the passages and options that are presented there.

## Contents

1. [GM overview](GMprep.html)
2. [(done) Initial state of game world](initialState.html)
3. [(done) Functions](functions.html)
3. Game tree
    * [(done) Bedroom](awakening/010bedroom.html) (start)
    * [(done) Cops bust in](awakening/020cops-bust-in.html)
    * [(done) Bathroom](awakening/030bathroom.html)
    * [(done) General rules](awakening/general-rules.html)
    * [(done) Streets](warehouse/streets.html)
    * [(done) Warehouse](warehouse/warehouse.html)
