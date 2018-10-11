# 1

my-port폴더에 저장소를 만들꺼다.
---------------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-port>git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/my-port/.git/
```
한번은 백업
---------
```
C:\Users\TopC290\Documents\송수진\git\work\my-port>git add .

C:\Users\TopC290\Documents\송수진\git\work\my-port>git commit -m "#1"
[master (root-commit) a713bad] #1
 2 files changed, 31 insertions(+)
 create mode 100644 README.md
 create mode 100644 index.html
```
git remote add origin (URL) / git remote add origin https://github.com/SongSoojin/SongSoojin.github.io.git / github 에 파일을 올릴꺼다.
---------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-port>git remote add origin https://github.com/SongSoojin/SongSoojin.github.io.git
```
git push -u origin master / 푸쉬할것이다./ 완료 
---------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-port>git push -u origin master
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 9.73 KiB | 4.87 MiB/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/SongSoojin/SongSoojin.github.io.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```
# 2

수정후, 저장소를 만들꺼다.
---------------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-page>git add .
warning: LF will be replaced by CRLF in gogodan/bootstrap.css.
The file will have its original line endings in your working directory.
```
지금 한 자료 보여줘 
---------------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-page>git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   gogodan/Gugudan.js
        new file:   gogodan/bootstrap.css
        new file:   gogodan/gogodan.html
        modified:   index.html
```
수정파일을 add example에 저장
--------------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-page>git commit -m"add example"
[master cebf743] add example
 4 files changed, 9054 insertions(+), 4 deletions(-)
 create mode 100644 gogodan/Gugudan.js
 create mode 100644 gogodan/bootstrap.css
 create mode 100644 gogodan/gogodan.html
```
다시 올려줘
--------------
```
C:\Users\TopC290\Documents\송수진\git\work\my-page>git push
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 23.81 KiB | 3.40 MiB/s, done.
Total 7 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/SongSoojin/SongSoojin.github.io.git
   9d9b785..cebf743  master -> master
```

#3
-------

*  .gitignore :  Project에 원하지 않는 Backup File이나 Log File , 혹은 컴파일 된 파일들을 Git에서 제외시킬수 있는 설정 File이다.

p59폴더에 새로운 저장소를 만들꺼다.
----------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p59>git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/p59/.git/
```
p59폴더에 memo.txt를 저장하고 
현재 내용 파악 / 작업 트리 상태를 표시/ 파일의 상태 확인하기 git status
----------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p59>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html
        memo.txt

nothing added to commit but untracked files present (use "git add" to track)
```
.gitignore파일 을 생성후 memo.txt를 입력하고 저장 ==> 현재 내용 파악 / 작업 트리 상태를 표시/ 파일의 상태 확인하기 git status ==>   memo.txt 파일이 .gitignore로 바뀜 
-------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p59>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        index.html

nothing added to commit but untracked files present (use "git add" to track)
```
.gitignore파일에 .gitignore내용 입력하고 저장 ==> 현재 내용 파악 / 작업 트리 상태를 표시/ 파일의 상태 확인하기 git status ==> memo.txt 파일이 안보임
------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p59>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)
```



