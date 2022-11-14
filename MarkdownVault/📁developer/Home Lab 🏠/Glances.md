
> [!info] [Glances - An Eye on your system (nicolargo.github.io)](https://nicolargo.github.io/glances/)
> Glances is a cross-platform system monitoring tool written in Python.


### connections
- [Home Assistant](%F0%9F%93%81developer/[Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md).md)

### installation on Linux
```shell
sudo apt-get install glances
```

## as a System Service
```shell
nano /etc/systemd/system/glancesweb.service
```

`glances.service` → change `User` to your current user 
```shell
[Unit]
Description = Glances in Web Server Mode
After = network.target

[Service]
User = spearmint
ExecStart = /usr/bin/glances  -w  -t  5

[Install]
WantedBy = multi-user.target
```

enable and test 
```shell
sudo systemctl enable glancesweb.service
sudo systemctl start glancesweb.service
sudo systemctl status glancesweb.service
```

### installation on Windows


## helpful links
[How to Use Glances to Monitor System On Ubuntu (maketecheasier.com)](https://www.maketecheasier.com/glances-monitor-system-ubuntu/)
[How to Use Glances to Monitor Remote Linux in Web Server Mode (tecmint.com)](https://www.tecmint.com/glances-monitor-remote-linux-in-web-server-mode/#:~:text=Run%20Glances%20in%20Web%20Server%20Mode%20as%20a,start%20and%20view%20its%20status%20as%20follows.%20)