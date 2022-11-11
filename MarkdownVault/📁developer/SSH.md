

### Ssh-keygen on client
`cp ~/<username>/.ssh/key.pub``
`Ssh-copy-id user@<IP>`

### Paste in host
`~/<username>/.ssh/authorized_keys`
or
`ssh-copy-id user@<IP>`

### windows ssh-copy-id
`type $env:USERPROFILE\.ssh\id_rsa.pub | ssh {IP-ADDRESS-OR-FQDN} "cat >> .ssh/authorized_keys"`

`type $env:USERPROFILE\.ssh\id_rsa.pub | ssh pi4@rpi.lan "cat >> .ssh/authorized_keys"`