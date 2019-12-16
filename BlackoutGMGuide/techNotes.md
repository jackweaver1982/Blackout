---
title: Technical Notes
---

# Technical notes

This page contains technical notes that are helpful for using the GM guide to write code.

## Rules

The rules in this guide are implemented as functions. The rules sometimes say to describe something or to go to some other location. The functions, however, do not actually do these things. Instead, they return a code that instructs the main passage to carry out these actions.

Explanations for the codes should be included in comments in the main code.

Each function should contain an array representing the possible return codes for the function, and return an error alert if the function tries to return a code not in that array.

Whenever the guide says to follow a rule, the code should call the associated function and then follow up by acting on whatever code was returned. The calling passage should also implement error checking and return an alert if the called function sends back an unexpected return code.

## Functions

From a coding perspective, there is no difference between rules and functions. The difference is solely in the role they play in the story. Functions typically have a more mechanical purpose, used to increment XP or mark damage.

Like rules, functions will also send back a return code to indicate follow-up action, and the same error-checking routines should also be used.
