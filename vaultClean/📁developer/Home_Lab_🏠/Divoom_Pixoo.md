## [Divoom Pixoo (divoom.com)](https://divoom.com/products/divoom-pixoo?_pos=9&_sid=9523eaa72&_ss=r)
> Pixel Art Digital Picture Frame with 16x16 LED Display

this cool lil gadget can light up any nightstand with fun interchangeable animations, but if you're like me and have a never ending thirst for control then this community [Home Assistant](Home%20Assistant.md) plugin will get you there [d03n3rfr1tz3/hass-divoom: Divoom Integration for Home Assistant (github.com)](https://github.com/d03n3rfr1tz3/hass-divoom) 

---
### connections
- [Home Assistant](Home%20Assistant.md)
- email IMAP
- smart **Phone** (Android - Galaxy S9)

### installation
1. [d03n3rfr1tz3/hass-divoom: Divoom Integration for Home Assistant (github.com)](https://github.com/d03n3rfr1tz3/hass-divoom) 
```yaml
HA_home_ass_config
```

---
## notifications
- 🔋 phone battery is charging
- 🔋 phone battery is full
- ✉ I got physical mail delivered (via IMAP)
- 🌵 water my plants (set on timer, but in the future I want a moisture sensor in the plants)
- ⏰ shows me the time when I start my **wake up** automation
- 😴 60 second [Kirby™](https://kirby.nintendo.com/) nightlight when I start my **pre sleep** automation
- 🚪 greets me when I arrive home
- 🚪 says goodbye when I leave home
- 🧺 Show me when the laundry cycle is complete (currently just a timed event, but later would like to connect with a light sensor on the "cycle complete" LED)

## create custom graphics
I also took the time to make some 16x16 pixel gifs to coincide with each notification. I use [Piskel - Free online sprite editor](https://www.piskelapp.com/) because there is an **Offline Version** incase I want to make tweaks or copies of my animations. 

---
## backlinks
[Home Lab 🏠](Home%20Lab%20🏠.md)

---

#todo 
- [ ] yaml code used in home assistant config
- [ ] tutorial on how to create custom graphics & notifications