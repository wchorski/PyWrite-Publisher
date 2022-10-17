## [Home Assistant (home-assistant.io)](https://www.home-assistant.io/)

> Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts.

installed on [Raspberry Pi 4 Model B  4GB](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) with Debian 11 64bit

---

### connections
- securely accessed via [PiVPN](PiVPN.md) (I don't forward face any apps that I solo use)
- [Hyperion](Hyperion.md)
- [WLED](WLED.md)
- [Divoom Pixoo (divoom.com)](https://divoom.com/products/divoom-pixoo?_pos=9&_sid=9523eaa72&_ss=r) digital sign (via bluetooth)
- [Glances](Glances.md) - via Grafana & InfluxDB

### installation 
1. installation **Supervised** [Linux - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/linux#install-home-assistant-supervised)

### plugins
1. ESPHome
2. Grafana
3. InfluxDB
4. motionEye
5. Node-RED
6. Rhasspy Assistant
7. Samba Backup
8. Samba Share
9. VSCode
10. HACS

---

## troubleshooting 
> [!warning]
> I'm running the [home-assistant/supervised](https://github.com/home-assistant/supervised-installer) installation because I want to utilize my [Pi4](📁developer/Hardware/Pi4.md) for multiple apps.
> 
> I encountered a boot loop error from one of the Home Assistant services, effectively freezing any other service running on my [Pi4](📁developer/Hardware/Pi4.md)

```shell
... entered blocking state
... entered forwarding state
... entered disabled state
```

I don't update my Home Assistant very often so I thought why not reinstall it. The [reinstall](https://github.com/home-assistant/supervised-installer)  brought my **Home Assistant** back to life 😅. 