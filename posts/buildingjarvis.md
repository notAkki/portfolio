---
title: "Just A Rather Very Intelligent System"
subtitle: "The process of bringing JARVIS to life using holograms and 3D models"
date: "2023-12-20"
---

<br>

Jarvis is an interactive, gesture-controlled 3D hologram environment. Users can interact with holographic renderings of various 3D models using hand gestures and movements. We are all fans of Marvel movies and comics so we were really interested in trying to turn science fiction to reality with this project. Click [here](https://www.youtube.com/watch?v=qOElePxRUAs) for a video demo of our final project.

#### Hardware

To build Jarvis, we need some sort of system to actually view the models so the user can interact with them. We considered using a normal screen but we decided to be a little more ambitious and to work with holograms. We settled on using a Pepper's Ghost illusion to create the holographic effect. This illusion works by projecting some image onto an angled piece of acrylic or glass which adds transparency to the background and makes it look like the image is floating. For our project, we designed a wooden frame that supported a monitor facing downwards that would shine onto a piece of acrylic.

Apart from the display, we also needed a camera so we used a simple webcam that would be placed underneath the user's hands and would record upwards.

#### Software

Jarvis is really just a webpage that has a lot of user interactivity. The web page itself is made using Next.js and then we also use Three.js for the 3D models and modification.

For the actual hand tracking and gesture recognition, we used a combination of OpenCV and Google Mediapipe. 2D tracking is very simple with OpenCV but for the 3D/depth tracking, we had to get a little creative. We had the camera measure the distance between two landmarks on the user's hand and then from that, we mapped that distance relative to the whole image captured along a linear regression so that we could have some sort of real world depth measurement. We used a Flask backend to connect the camera data and use it to modify the generated models. Users can translate the model with a closed fist gesture, rotate with two fingers out, and scale the models using a rock hands gesture.

Finally, we wanted to make Jarvis really accurate so we added voice commands. We used the Web Speech API to integrate voice recognition and commands to the website. This was a really cool feature because it's a relatively lesser known functionality. We added a wake up word so that the user can give commands after saying "Hey Jarvis..." Then, we added commands for things like adding/removing models and also for opening/closing the menu.

#### Conclusion

Overall, we were very happy to have created a complete project that works quite well. When brainstorming ideas for the future, we also considered integrating generative AI that would allow users to create 3D models using custom prompts. We also considered using a more advanced camera with 3D motion sensors for faster tracking and perhaps to add more modification functions.

A huge shout out to the rest of the team as this would not have been possible with them. View the official linkedin post [here](https://www.linkedin.com/posts/brian-w-zhang_this-week-i-built-jarvis-an-interactive-ugcPost-7139736079917596672-yE_Q?utm_source=share&utm_medium=member_desktop).
