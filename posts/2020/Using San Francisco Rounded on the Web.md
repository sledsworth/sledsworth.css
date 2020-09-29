---
title: Using San Francisco Rounded on the Web
link: https://webkit.org/blog/10247/new-webkit-features-in-safari-13-1/
date: 2020-09-29T15:56:08-04:00
tags:
- web #web
- development #development
- typography #typography
- apple #apple
---

I've been trying various fonts here in search of a combination that fits. The most recent being [Hoefler & Co.'s](https://www.typography.com) excellent [Gotham Rounded](https://www.typography.com/fonts/gotham-rounded/overview) and [Sentinel](https://www.typography.com/fonts/sentinel/overview).

As the user, you come here to engage with the words—making the font the most important aspect of this site. I want to make that interaction feel special and a good font provides that personality. Unfortunately, while Hoefler & Co. provides excellent fonts, their [cloud.typography](https://www.typography.com/webfonts) plan looks great on paper, but leaves a lot to be desired from a performance standpoint[^1]. Being a personal site that exists as a hobby, I cannot justify footing the expense of the self-hosted plans, as Hoefler & Co. suggested I do when I brought up my issues with them. Long story short, I'm not using custom fonts for my next update to this site. 

Looking at built in options, I've come to love the modern and soft feel of the [San Francisco Rounded](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/) typeface. Interestingly, adding the font family directly to the CSS property worked in all modern browsers except Safari:
```css
h1, h2, h3 {
	font-family: "SF Pro Rounded", system-ui, san-serif;
}
```

This led me to realize that Apple considers SF Rounded to be a variant of SF—another typeface, not a different font. I'm not sure that explains the decision to disallow targeting the font by name with `"SF Pro Rounded"`, but that is the best reason I could come up with. Doing a bit more searching led me to the system ui font variance `ui-rounded`, which is exactly what I needed:
```css
h1, h2, h3 {
	font-family: ui-rounded, "SF Pro Rounded", system-ui, san-serif;
}
```

Note that I kept `"SF Pro Rounded"` for browsers that don't support `ui-rounded` yet.

[^1]: I'm hoping to get around to writing about my issues with   [cloud.typography](https://www.typography.com/webfonts) and the best solutions I could come up with for other's running into similar performance bottlenecks.