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

### remove / clean files & directories from remote repo after .gitignore update
1. `git rm -r --cached`  .
2. `git add .`
3. `git commit -m 'Remove newly ignored directory and files'`  
4. `git push origin master`



### change  branch
- `git checkout -b <branchname>` --> create new and change to
- `git checkout <branchname>` --> change to existing 

### remove unwanted add
- `git restore --staged <filename>`

### stash
- `git stash`
- `git stash pop`

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

- `git submodule add <url> <directory>`
- `git submodule add https://github.com/wchorski/myrepo ./directory`

### fix commit author

## global login via terminal
[login to github from terminal Code Example (iqcode.com)](https://iqcode.com/code/shell/login-to-github-from-terminal)
```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```