---
title: "Back to the BASICs"
subtitle: "Building a BASIC compiler for web development during UofT Hacks 2024"
date: "2024-01-30"
---

<br>

This last weekend, I participated in my first ever hackathon and even won in a few categories! The theme of UofT Hacks 2024 was nostalgia. We spent some time thinking about what makes us nostalgic, but then in the end we decided to take a slightly different approach. We thought about turning back the clock and going back in time to explore the history of programming. We considered an era when programming was less advanced but also a lot less complicated. This led to us asking the question, what might web development have looked like back in the era of BASIC before the web was even a thing.

#### Introducing BASIC Web

In order to escape all the complexity and burden of choosing between the many frameworks and libraries, we decided to implement web development in the most "basic" language of all - BASIC. BASIC is an interpreted language that was made during the 60s. We can't actually use BASIC for this project so we created our own language that has very similar syntax and functionality to BASIC.

#### Features

We considered what features we would need in order to craft the simplest web development experience. We knew we wanted to add HTML style tags because our language would be compiled into HTML. Then we also needed a PRINT function to display text. Then using the STYLE keyword, we can add modern CSS. Finally, in order to actually craft a proper webpage, we needed some sort of interactivity or data storage/manipulation, so we added variables and some ways to change them.

#### Structure/Process

After having the code in our BASIC language, we need to compile it to HTML so that it can actually be used as a webpage. For this, we first built a parser in TypeScript that would go through the BASIC code and depending on certain keywords/functions, would build an abstract syntax tree. Then we built a runtime library that would go through the abstract syntax tree and compiles everything to a single HTML file which can then be rendered.

#### Conclusion

As first time hackers and beginners to compilers, this was a daunting task but we are all very proud of what we accomplished here. I learned a lot about the process of designing compilers and just how painstaking it is to manually write compiler code. Of course we wouldn't expect anyone to actually use a BASIC compiler for modern web development but I think it is really fascinating to see how far programming has come and to experiment with the coding experiences of the past.

We ended up winning the Communications Security Establishment's DevSecOps challenge for our use of a CI/CD pipeline, and we also won second place overall!

I'd like to thank the organizers and sponsors of UofT Hacks for making this event possible, and of course a big thanks to the rest of my team!

[Devpost](https://devpost.com/software/basic-web) <br>
[Demo](https://patrick-gu.github.io/uofthacks-basic-web/)
