---
title: WWDC 2020 Predictions & Wishlist
description: A prediction on Apple’s WWDC announcements and my hopes moving forward as an Apple fan and developer.
tags:
- apple #apple
- wwdc #wwdc
- tech #tech
---

In my typical fashion, WWDC 2020 is a day away and I have yet to read through what rumors and predictions others have put out—let alone take the time to make my unqualified guesses. Usually my procrastination spoils the option of even having a take, as all the big secrets are already leaked. This WWDC seems to be fairly tightly wrapped, even with the theoretically less secure work from home setup Apple is running due to COVID-19.

## Predictions

Some of these are absent of risk, but I’m hoping to really see a few through a bit more.

### iOS & iPadOS Dynamic Home Screen

The headlining feature for iOS and iPadOS will be a more dynamic home screen. Thinking of what Apple already has that is close to this are the widgets on the left-most home screen pane—it’s logical to deprecate that screen entirely and extend that widget API to be a part of the home screen itself. I imagine it’ll be up to developers to decide the number of grid spaces a widget can expand, with some limitations set by Apple.

### Catalyst Improvements

Catalyst **has** to get better. It’s just not a good experience—Apple has to know this. I do take some pause here though. Last year Craig Federighi made mention that it is more of a design decision than a technical limitation with Catalyst apps. Such a strange remark, given that clearly there are a lot of limitations developers have ran into over the course of the last year. Also, if it were a design decision, whoever thought that they ought to keep the iOS `UIPickerView` should be fired.

### ARM Mac Transition

There is enough smoke here that I think this one is a give-me. How Apple positions itself and third-party developers is the more interesting question. 

Providing transition hardware at the scale Apple would need to do so seems crazy—especially because it’d just be throw-away hardware. It they did provide hardware, it would be a puck device akin to the Apple TV or Mac Mini. This has other concerns, like the fact that Apple laptops are extremely popular among developers and you cannot make an assumption that they all have an external monitor available.

That leads me to believing the iPad Pro will be the developer hardware for testing macOS on ARM. It is weird and has it’s problems—like what does Apple do after the ARM Macs release? Or how do they handle the touchscreen on the iPad for macOS? These feel trivial to me compared to the issues of scaling developer hardware from nothing. The iPad Pro is already available in mass quantity and Apple doesn’t have a problem nickel-and-diming it’s developers. No need for external monitors. A decent number of developers probably already have one. Disabling the touchscreen when in macOS mode seems totally reasonable—and one of the reasons I feel like mouse support came to iPadOS at such a weird time. The iPad would be great developer transition hardware and would still be useful after the release of the ARM Mac, unlike dedicated hardware. The only thing that gets me hung up is what they do after ARM Macs are released. 

I imagine if I had macOS on my iPad that I’d be hesitant to go back to iPadOS—and that isn’t a good look for Apple or iPadOS. I don’t know if Apple wants to let that genie out of the bottle yet, but my money is still on iPad as the developer device for ARM Macs

### Double Down on SwiftUI

SwiftUI is rough around the edges, which is to be expected for such a young technology with such ambition. Professionally, I’m a web developer, so SwiftUI is especially exciting for me. It mimics a lot of the reactive, component driven UI frameworks you see on the web, like React. The first few weeks with SwiftUI last year was incredibly exciting. I was able to progress in ways that I couldn’t with `UIKit` `UIView`. It just clicked. Unfortunately, it didn’t take long to run into some insurmountable issues. There are pieces that are just incomplete, like a fair amount of components used to gather input from the user. There are plenty of bugs around the inputs that are there. Collection views seem to have their fair share of bugs and missing features as well.

Judging by the number of questions and guides online related to SwiftUI, I think Apple has a winner, but it needs to be refined and expanded on if they want to see it make it into more apps in the wild.

## Wishlist

This one I’ll give in bullets:

- **Spritekit improvements** or literally any sign to tell me it’s not being taken off life support. I’ve had fun with it, but there are bugs that are 3 years old that have gone without acknowledgement—not a good sign.
- **SwiftUI improvements**, I know I mentioned this in my predictions, but this could be the one thing that I believe will happen and that I also have been super excite by as well. 🤞
- **Xcode for iPad** would be great. I tend to gravitate to my iPad for consumption, but leave work to my Mac. It’s not that I don’t think an iPad can be used for work, it’s that I don’t want to jump through hoops to make it a work device. Also, as far as software development goes, it’s nearly impossible. With the distinction from iOS, I think Apple understands that for the iPad to move forward it needs to diverge from the phone. Pro apps is a pretty great way to start making that iPadOS distinction.
- **AppStore economics** are a mess. Look no further than the recent Hey debacle. Apple is asking for too much and as a result getting nothing, all the while developers and users suffer from ridiculous work-arounds. Personally, I don’t think the AppStore needs to be a loss-leader, but the Apple cut needs to be reevaluated—it’s just too damn much to blanket charge. There is a way for Apple, developers, and users to all profit—but that’s not gerrymandering the AppStore for the Amazons and Netflixes of the world and taking 30% of developers revenue.


While the mishaps Apple has taken with developers recently and the inevitable format change COVID-19 will introduce I definitely feel the wind has been taken out of the sails a bit, but I’m still excited to see what comes out of WWDC 2020. The world is in a weird place, but it’s nice to get a boost of excitement instead of tragedy for a change. Even if it’s as silly as taking a guess at what the next year will look like for Apple.