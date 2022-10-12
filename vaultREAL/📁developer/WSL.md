#windows #10 #linux

Deploying a Linux virtual machine from a few clicks in the **Microsoft Store** is really that easy. Paired with [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=us), it's even easier to switch between shells 

I mainly use **WLS** to tinker with new packages or use software temporarily. For example, I needed to create a [self signed cert]([How To Generate A Self-Signed SSL Certificate On Linux | RoseHosting](https://www.rosehosting.com/blog/how-to-generate-a-self-signed-ssl-certificate-on-linux/#:~:text=How%20to%20Generate%20a%20Self-Signed%20SSL%20Certificate%20on,5%3A%20Configuring%20Apache%20to%20Use%20the%20Files%20) but didn't want **OpenSSL**  to live on my production server. 

## Navigation 
### Access Host Window's files
- `cd /mnt/c` -> "c" being the target Windows drive letter

### Access WSL inside Windows Explorer
- `\\wsl$` -> in **Windows Explorer**, then you can map as a network drive 💽


---
## backlinks
[[_developer_box📦]]