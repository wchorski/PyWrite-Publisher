## Install

I run Mint 21 Venessa (aka Ubuntu Jammy). So installing **OpenRGB** wasn't as strait forward as `sudo apt install openrgb`

[How To Install OpenRGB On Ubuntu 22.04 | 20.04 LTS | Itsubuntu.com](https://itsubuntu.com/install-openrgb-on-ubuntu-22-04-20-04-lts/)

```shell

sudo add-apt-repository ppa:thopiekar/openrgb

sudo apt update -y

sudo apt install openrgb -y

openrgb --version

sudo apt autoremove openrgb --purge
sudo add-apt-repository --remove ppa:thopiekar/openrgb
```
