## GIT COMMANDS

Goto project folder
Open GitBash or command prompt

$ git init
$ git status
$ git config --global user.name 'Noldy Nayoan'
$ git config --global user.email 'peraluna@rocketmail.com'

$ git add (filename)
or
$ git add . (add all files and folder)
$ git add *.html (add all .html files)

# TO REMOVE FILES from Git Tracking :

$ git rm --chached filename>

TO CHANGE BRANCH :

$ git checkout branchname>

# TO COMMIT TO STAGE :

$ git commit (will open VIM editor : use 'i' to type, esc to quit insert, and :wq to commit)

$ git commit -m 'changed app js' (skip VIM editor)

# TO MERGE to GITHUB :

$ git merge addcalendar -m 'merge calendar'

# TO PUSH to GITHUB :

$ git push -u origin master (first push)
$ git push

# TO PULL from GITHUB :

$ git pull

