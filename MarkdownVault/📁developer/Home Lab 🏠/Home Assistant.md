## [Home Assistant (home-assistant.io)](home-assistant.io))

> Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts.

installed on [Raspberry Pi 4 Model B  4GB](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) with Debian 11 64bit

---

### connections
- securely accessed via [PiVPN](📁developer/Home%20Lab%20🏠/PiVPN.md) (I don't forward face any apps that I solo use)
- [Hyperion](📁developer/Home%20Lab%20🏠/Hyperion.md)
- [WLED](📁developer/Home%20Lab%20🏠/WLED.md)
- [Divoom Pixoo (divoom.com)](divoom.com)) digital sign (via bluetooth)
- [Glances](📁developer/Home%20Lab%20🏠/Glances.md) - via Grafana & InfluxDB

### installation 
1. installation **Supervised** [](https://www.home-assistant.io/installation/linux#install-home-assistant-supervised)

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