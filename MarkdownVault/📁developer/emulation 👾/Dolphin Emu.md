Nintendo Gamecube & Wii emulator

## Mayflash gamecube controller adapter on Linux
[Mayflash Gamecube controller adapter + Linux + Dolphin/Steam (seanyeh.com)](http://www.seanyeh.com/pages/mayflash_gamecube_adapter_linux_dolphin_steam/)

### Setup

Paste the following into `/etc/udev/rules.d/51-gcadapter.rules`:

SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", ATTRS{idVendor}=="057e", ATTRS{idProduct}=="0337", MODE="0666"

Then, install [wii-u-gc-adapter](https://github.com/ToadKing/wii-u-gc-adapter). (There is a package in the AUR)

After installing, run `sudo modprobe uinput`

Now, you can run the adapter with `wii-u-gc-adapter`

### Dolphin

Make sure the Mayflash adapter is set to "Wii U" setting. In Dolphin, go to `Controller Setings`, set the controller to "GameCube Adapter for Wii U". Your controller should now work in Dolphin.

### Steam

Make sure the Mayflash adapter is set to "PC" setting. If you haven't already, run `wii-u-gc-adapter`