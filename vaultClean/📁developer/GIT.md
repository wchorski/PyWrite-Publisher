### usual grind
```
Git add .
Git commit -m 'message'
Git push
```

### list branch and switch to
```
Git branch
Git checkout <branchname>
Git init
.gitignore
```

### create and change to new branch
`git checkout -b <branchname>`

### remove unwanted add
`git restore --staged <filename>`

### stash
`git stash`
`git stash pop`

### link repo with existing local files

```
cd public
git init
git add .

git remote add origin https://github.com/<username>/<repo>.git

git commit -m 'first commit'
git push origin master
```

### git repo inside a git repo?

`git submodule add <url> <directory>`
`git submodule add https://github.com/wchorski/myrepo ./directory`

### fix commit author