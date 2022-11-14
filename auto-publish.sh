#! /bin/bash

WORKDIR="/mnt/uasis5/digital-gardens/pywriter-dev"
DATE=`date +”%A, %b %d, %Y %I:%M %p”`
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
git commit -m "auto publish $DATE"
git push