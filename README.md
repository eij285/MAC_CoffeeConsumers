# MAC_CoffeeConsumers
Mac Hacksprint Project

## Contents
[Problems](#problems)  
[Solutions](#solutions)  
[General description of the tracking function](#desc)  
[Changes](#changes)  
[Features](#features)  
[Future features](#future)  
[Using git](#git) 

<a name="problems"/>

## Problems

1. Check-ins too inconvenient
2. Government data hard to interpret with user’s movement

<a name="problems"/>

## Solutions

1. Automate check-in process 
2. Real-time location tracking in combination with venue check-ins to keep covid alerts/information updated 

<a name="desc"/>

## General description of the tracking function

### What does the app do: 

Once given permission, the app tracks each user's phone and where they have been for the duration that the tracking function was turned on.

### What does this tracking function do:

#### With other users:

The tracking function will note down if you have been near (within 10 meters?) another person with the tracking function turned on for more than 1 minute. If a user you pass has been diagnosed with COVID, they will press a button on their app that tells the program that they have COVID (the COVID switch). This will send a notification to all users that have been near the infected person for more than a minute and tell them to isolate. (Need this because all COVID cases are reported in hindsight after contact)

The information the user gets with the notification will be the following: 
- Exactly where it occurred.
- What time it occurred.
- How long they were in close proximity with the infected person.

#### With venues:

Each venue can also have a device which should be placed within the middle of the store. If a user is within the range of the device for more than 2 minutes, it is also noted down, similar to if they passed another user. The range for venues might be larger than the 10m range of user phones. If a user leaves a store, the program will note when they left the range of the venue device.

If a person who was at a venue is diagnosed with COVID, they will also turn on the “COVID switch”. This will notify all visitors of the store on that day with a notification telling them a venue they have been to has a confirmed case visitor. 

The information the user gets with the notification will be the following: 
- Which venue
- What times the infected person was at the store (which should be noted by the program from when they stayed for more than 2min to when they left the range of the device.).

Note: this should stack with the individual user notification so users get two notifications.

#### With public transport:

All forms of public transport will have their own device. Works similar to venue devices. Trains will need a device for each carriage. However, this method requires the government to implement the app. This might not occur immediately or at all. 

If not, we will just have to rely on the individual user interactions with other users for this case. Or we use opal cards?? But if we get opal data, just get govt to attach a device.

### General description of the information function (the information given to the users):

What does the app do: This component of the app aims to make all government data as digestible as possible. A lot of our tracking function components require a large scale of users. If this does not occur, this Government information simplification will be the core feature of our app. Also, give all sources of our govt data.

Note: a core philosophy of this app is to make it as user friendly and digestible as possible to users (e.g., elderly). Too much information will clutter the app and make it difficult to interpret information and navigate the app.

#### Govt Data: “COVID near me” Data:

Overlay “COVID near me” map?

> This might make it cluttered? (This is all on a tiny mobile device to consider user experience) Maybe you need a button to overlay the map on top and if you want to turn it off, just press the button again.

#### Govt Data: “Health NSW” Data: 

Translate all the data on the Health NSW website table into a visual representation on the map.

> Create clickable nodes on the map to show what the table says for that exact location.
	
> If the user is physically approaching one of these nodes while the tracking feature is turned on, the user will get a notification warning them they are approaching one of these hotspots.

#### Clusters:

Same concept as “Health NSW” Data section but idk where cluster information is from.

#### Past routes in previous days:

You can track your past movements and overlay the data from that day onto your map simultaneously to analyse. When you do this, the data will be updated for any new cases reported correlating to that day. E.g., let's say you (person A) went out on the 10th and an infected person (person B) went out on the 10th. At the time, there will be no information on B, such as Health NSW or COVID near me data. Once they have been diagnosed and the govt data is updated, if you look at your past movements, you can now see the updated information, which will now include information of B’s movements. (tackles the idea of how COVID infected movements are only updated AFTER the person has been diagnosed which could be days after contact.

#### Our App’s Data: 

If a user turns on the COVID switch, all their visited venues will be highlighted on the map when people check their routes on previous days. (Don’t really need this. It kinda achieves nothing since we already have the program sending notifications if users crossed pass with infected).

#### Potential issues with the app:

<b>What if people troll and just randomly press the COVID switch?</b>

> Potential sol: need some kind of confirmation from the testing site. This creates a new issue of how we get access to confirmation of COVID infection.

<b>People might not trust the app since we are tracking their movements and they don't want to even press the turn on button in the first place:</b>

> Potential sol: we need to hard market the idea that we have nothing to do with the government and just use their data and place devices on their transport and we just want to make the world a better place during COVID and also promise to burn all data related to a user if they request it.

<b>This is a massive amount of memory storage we need if every user that passes another user is tracked:</b>
> Potential sol: idk. Check how many bites we need for one encounter. Delete 2 week old data because its no longer relevant.

#### Future Roadmap of App:

Mainly just getting Govt to agree to implement the app.

Market the reusability of our app: A pandemic occurs every 100 years. With the increased globalisation of the world, the physical interconnected nature of countries may shorten this time period. Our aggressive use of antibiotics have created the evolutionary catalyst for super bugs.

COVID19 has shown that it is now more important than ever to have strict and effective systems in place for not only this pandemic but future pandemics too. This app is not just for COVID. It is for any pandemic that comes our way, present or future.
- Use stats or smth
- This is part of selling the problem. Need more on selling the problem
- Say how features are adjustable to match the behaviour of future viruses

<a name="changes"/>

## Changes

* Removed tracking 
* Grab data at the end of the day using the Google Maps API
* Analyse data when public Govt data is released (which is what is found on health website) 
* If we get cooperation with Opal, public transport
* In future (with Govt coop):
* Immediate COVID diagnosis to streamline investigations

<a name="features"/>

## Features

* The map:
* Grab Google API
* Analyse Google data
* Updated information about past routes and new cases
* Grab govt public data for COVID diagnosis “COVID switch”
* Being able to see previous routes
* Notifications
* User intersection
* Venue intersection
* Approaching hotspot

<a name="future"/>

## Future features

* Opal
* Immediate govt data for COVID diagnosis “COVID switch”
* Route planning/ receiving notifications when approaching a covid hotspot 

<a name="git"/>

## Using git

<b>Before doing any work on the git repository, always use git branch to check that you are not on the ‘main’ branch.</b>

If you are not on your branch, use git checkout <i>BranchName</i> to go to the correct branch

	git branch
	git checkout DevelopmentBranchName

### Creating a new branch:

You want to create a new branch when working on a feature that is not part of your current branches. To do this, ensure you are on the main branch before creating a new branch, as it will copy the history of the branch you are currently on into the new branch (i.e duplicates the branch).

	git checkout main
	git checkout -b DevelopmentBranchName
	
This will automatically checkout to your new branch.

### Working on the branch:

Every time you finish or work on some code, you want to stage a commit. This is essentially creating a save file of your current work onto the branch. To do this, use git status to check what files are not been tracked, then git add them and finally git commit.

	git status
	git add AnyRelevantFilesSeparatedBySpace
	git commit -m "Message detailing what you did in this commit"
	
Do this regularly and ensure you are on your development branch before committing. Once you are ready to send your changes to the online repo on the GitHub cloud, run git push.

If this is the first time you are pushing this branch, use the --set-upstream (or the -u) flag:

	git push --set-upstream origin DevelopmentBranchName
	
Otherwise you can simply use git push:

	git push
	
### Merging the branch to main:

Once you have finished working on the branch and are ready to merge your branch with main, you should first ensure that your branch is up to date with other people's work. <b>This is important as failing to do so may result in merge conflicts.</b>

Do this by checking out to the main branch and calling git pull.

	git checkout main
	git pull
	
This updates your local copy of the main branch from the cloud copy. Then merge this new local main branch into your development branch.

	git checkout DevelopmentBranchName
	git merge main
	
If you have merge conflicts at this point make sure to get it checked by the person who commited the change conflicting yours. 

Before merging the code to main, you should make a merge request and have someone else check that your code is satisfactory and not potentially harmful to the repo (the review process). Once it has been approved, you can merge it using git merge as below.

	git checkout main
	git merge DevelopmentBranchName

<b>NOTE:</b> in general working in different files should not cause any merge conflicts. If you do want to work on the same file, it may make more sense to create a copy of the file and combine them manually.



