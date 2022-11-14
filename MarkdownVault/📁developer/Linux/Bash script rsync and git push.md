I'm proud of my little shell script that copies over files via rsync and commits those files to my git repo. This script auto publishes my digital garden made with [Obsidian Publish with NextJS](📁developer/Projects📐/Obsidian%20Publish%20with%20NextJS.md)

>[!note] you'll want to login to git globally. Also, it will ask for your password when your first run this script

```bash
#! /bin/bash

WORKDIR="/mnt/uasis5/digital-gardens/pywriter-dev"
DATE=`date -d "$DATE" +"%Y %b, %d | %H:%M"`
BRANCH="pywriter-dev"

SOURCE="/mnt/uasis5/node/filesystem-livesync-pywriter4/dat/vault"
IGNORE="ignore-dev.md"
DESTIN="/mnt/uasis5/digital-gardens/pywriter-dev/MarkdownVault"
INDEX="📁developer/index.md"

cd $WORKDIR

rsync -av --exclude-from="$SOURCE/$IGNORE" $SOURCE/ $DESTIN/
cp $SOURCE/$INDEX $DESTIN/index.md
rm $DESTIN/$IGNORE

git checkout $BRANCH
git add .
git commit -m "auto published: $DATE"
git push
```

Now you should be able to stick this in your 