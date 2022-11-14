## sync directories with external ignore file

```shell
rsync -av --exclude-from={'list.txt'} sourcedir/ destinationdir/
```

`list.txt`
```shell
testfile2.txt
*.txt
dir3
dir4
test*
*2*
```

is this working at all from milkywave? 
## citations
[How to use Rsync to exclude Files and Directories in Data Transfer (phoenixnap.com)](https://phoenixnap.com/kb/rsync-exclude-files-and-directories)