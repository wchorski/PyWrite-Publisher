#linux #terminal #commandline

[How to mount disk and partition in Linux (simplified.guide)](https://www.simplified.guide/linux/disk-mount#:~:text=Steps%20to%20mount%20disk%20or%20partition%20in%20Linux%3A,using%20your%20preferred%20text%20editor.%20...%20More%20items)

1. list what's hooked up `lsblk`
```shell
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 238.5G  0 disk
sdb           8:16   0   1.8T  0 disk
└─sdb1        8:17   0   1.8T  0 part
sdc           8:32   0   7.3T  0 disk
└─sdc1        8:33   0   7.3T  0 part
nvme0n1     259:0    0 238.5G  0 disk
├─nvme0n1p1 259:1    0     1M  0 part
├─nvme0n1p2 259:2    0   513M  0 part /boot/efi
└─nvme0n1p3 259:3    0   238G  0 part /
```

2. check filesystem type of disk or partition with `blkid /dev/sdb1`
```shell
$ blkid /dev/sdb1
/dev/sdb1: LABEL="iceberg2" UUID="c6827f45-f45f-4255-93c0-a731f5f47530" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="f43267ef-4e45-47e1-9450-c704fb881821"

$ blkid /dev/sdc1
/dev/sdc1: LABEL="octo8" UUID="03aa148e-a71f-4547-87c7-cce55836c7f2" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="be8d8d52-8a45-49d7-8de8-ba377011ff53"

$ blkid /dev/sda
/dev/sda: LABEL="drivewallet256" UUID="d8f7b614-98ab-40fc-995b-d82ccabd4058" BLOCK_SIZE="4096" TYPE="ext4"
```

3. make directory according to label 
`$ sudo mkdir /mnt/octo8`

4. manually mount partition 
`$ sudo mount -t ext4 /dev/sdb1 /mnt/iceberg2`
`$ sudo mount -t ext4 /dev/sdc1 /mnt/octo8`
`$ sudo mount -t ext4 /dev/sda /mnt/drivewallet256`

5. check if drive successfully mounted with `df -h`
```shell
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           3.2G  1.9M  3.2G   1% /run
/dev/nvme0n1p3  234G   12G  211G   6% /
tmpfs            16G     0   16G   0% /dev/shm
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
/dev/nvme0n1p2  512M  5.3M  507M   2% /boot/efi
tmpfs           3.2G  124K  3.2G   1% /run/user/1000
/dev/sdc1       7.3T  1.8T  5.2T  25% /mnt/octo8
```

6. unmount with `$ sudo umount /dev/sdb1

---
## Persistent Mounting with fstab
1. `$ sudo nano /etc/fstab` (or with vim if you are into that)

2. add new entry
```shell
/dev/sdb1      /mnt/iceberg2          ext4    defaults        0       0
/dev/sdc1      /mnt/octo8             ext4    defaults        0       0
/dev/sda       /mnt/drivewallet256    ext4    defaults        0       0
```

3. mount all with `$ sudo mount -a`

4. check to see drives mounted
```shell
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           3.2G  1.9M  3.2G   1% /run
/dev/nvme0n1p3  234G   16G  206G   7% /
tmpfs            16G     0   16G   0% /dev/shm
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
/dev/nvme0n1p2  512M  5.3M  507M   2% /boot/efi
tmpfs           3.2G  128K  3.2G   1% /run/user/1000
/dev/sdc1       7.3T  1.8T  5.2T  25% /mnt/octo8
/dev/sdb1       1.8T  137G  1.6T   8% /mnt/iceberg2
/dev/sda        234G   71G  151G  32% /mnt/drivewallet256
```