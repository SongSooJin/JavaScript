git-page폴더에서 한단계위로 가겠다.
---------------------------------
``` 
C:\Users\TopC290\Documents\송수진\git\work\git-page>cd..
```
work폴더에 tutorial폴더를 만들겠다.
---------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work>mkdir tutorial
```
커서를 tutorial폴더로 들어가겠다.
----------------------------
```
C:\Users\TopC290\Documents\송수진\git\work>cd tutorial
```
tutorial폴더에서 새 저장소를 만들겠다.
-----------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/tutorial/.git/
```
현재 저장소의 상태를 보여줘
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        myfile.txt

nothing added to commit but untracked files present (use "git add" to track)
```
myfile.txt파일을 추가 하겠다.
-----------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git add myfile.txt
```
현재까지의 내용을 first commit로 백업하겠다.
-------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git commit -m "first commit"
[master (root-commit) d5bfd5a] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 myfile.txt
```
현재까지의 log를 출력해줘
------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git log
commit d5bfd5a7e5455089aaa3ddc02f4aedc7016dd333 (HEAD -> master)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 13:52:49 2018 +0900

    first commit
```
새로운 브렌치 issue1을 만들겠다.
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch issue1
```
현재까지의 branch 보여줘 (* 표시는 HEAD의 위치) 
------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
  issue1
* master
```
issue1으로 HEAD의 위치를 변경하겠다.
----------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git checkout issue1
Switched to branch 'issue1'
```
현재까지의 branch 보여줘 (* 표시는 HEAD의 위치) 
--------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
* issue1
  master
```
myfile.txt을 수정(or 변경) 후  "add 설명을 추가"로 저장하겠다.
---------------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git add myfile.txt

C:\Users\TopC290\Documents\송수진\git\work\tutorial>git commit -m "add 설명을 추가"
[issue1 f7edadf] add 설명을 추가
 1 file changed, 1 insertion(+)
```
HEAD의 위치를 master로 변경하겠다.
-------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git checkout master
Switched to branch 'master'
```
현재까지의 브렌치를 보여줘 (* 표시는 HEAD의 위치)
--------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
  issue1
* master
```
master와 issue1을 병합하겠다.
-----------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git merge issue1
Updating d5bfd5a..f7edadf
Fast-forward
 myfile.txt | 1 +
 1 file changed, 1 insertion(+)
```
issue1 branch를 삭제하겠다. git branch -d issue1 / -d 삭제
---------------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch -d issue1
Deleted branch issue1 (was f7edadf).
```
현재까지의 브렌치 보여줘 (* 표시는 HEAD의 위치)
---------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
* master
```
issue2 브렌치를 만들겠다.
----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch issue2
```
issue3 브렌치를 만들겠다.
-----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch issue3
```
현재까지의 브렌치 보여줘 (* 표시는 HEAD의 위치)
---------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
  issue2
  issue3
* master
```
HEAD의 위치를 issue2 변경하고 현재까지의 브렌치 보여줘 (* 표시는 HEAD의 위치)
-------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git checkout issue2
Switched to branch 'issue2'

C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
* issue2
  issue3
  master
```
myfile.txt을 수정(or 변경) 후  "commit의 설명을 추가"로 저장하겠다.
-------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git add myfile.txt

C:\Users\TopC290\Documents\송수진\git\work\tutorial>git commit -m"commit의 설명을 추가"
[issue2 ac7c349] commit의 설명을 추가
 1 file changed, 1 insertion(+)
```
현재까지의 log 보여줘 (한글이기때문 코드가 <..>로 표시) 
---------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git log
commit ac7c3497edadd1913d41e3e5e3d80af66cfb2f71 (HEAD -> issue2)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 14:13:48 2018 +0900

    commit<EC><9D><98> <EC><84><A4><EB><AA><85><EC><9D><84> <EC><B6><94><EA><B0><80>

commit f7edadf0291ad0243540543b1d8058552f410db3 (master, issue3)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 14:00:41 2018 +0900

    add <EC><84><A4><EB><AA><85><EC><9D><84> <EC><B6><94><EA><B0><80>

commit d5bfd5a7e5455089aaa3ddc02f4aedc7016dd333
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 13:52:49 2018 +0900

    first commit
```
HEAD의 위치를 issue3로 변경하고 현재까지의 브렌치 보여줘 (* 표시는 HEAD의 위치)
-------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git checkout issue3
Switched to branch 'issue3'

C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
  issue2
* issue3
  master
```
myfile.txt을 수정(or 변경) 후  "pull 설명을 추가"로 저장하겠다.
---------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial> git add myfile.txt

C:\Users\TopC290\Documents\송수진\git\work\tutorial>git commit -m"pull 설명을 추가"
[issue3 f34eaa1] pull 설명을 추가
 1 file changed, 1 insertion(+)
```
HEAD의 위치를 master로 변경하겠다.
--------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial> git checkout master
Switched to branch 'master'
```
master와 issue2 병합하겠다.
-------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git merge issue2
Updating f7edadf..ac7c349
Fast-forward
 myfile.txt | 1 +
 1 file changed, 1 insertion(+)
```
master와 issue3 병합겠다.
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git merge issue3
Auto-merging myfile.txt
CONFLICT (content): Merge conflict in myfile.txt
Automatic merge failed; fix conflicts and then commit the result.
```
현재까지의 브렌치 보여줘 (* 표시는 HEAD의 위치)
--------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git branch
  issue2
  issue3
* master
```
issue3과 병합하겠다. ==> 실패 (why? 다른 브렌치에 같은 코드 줄에 수정(or 변경)하였기 때문에 충돌이 일어나서 병합이 실패)
--------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git merge issue3
error: Merging is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
```
git diff는 Patch처럼 어떤 라인을 추가했고 삭제했는지가 궁금할 때에 사용한다.
---------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git diff
diff --cc myfile.txt
index c4e78c3,8af6fc9..0000000
--- a/myfile.txt
+++ b/myfile.txt
@@@ -1,3 -1,3 +1,7 @@@
  <EC>90><EC><88><AD><EC><9D><B4><EB><8F><84> <EC><9D><B4><ED><95><B4><ED><95><A0> <EC><88><98> <EC><9E><88><EB><8A>
<94> Git <EB><AA><85><EB><A0><B9><EC><96><B4>
  add: <EB><B3><80><EA><B2><BD> <EC><82><AC><ED><95><AD><EC><9D><84> <EB><A7><8C><EB><93><A4><EC><96><B4><EC><84><9C>
<EC><9D><B8><EB><8D><B1><EC><8A><A4><EC><97><90> <EB><93><B1><EB><A1><9D><ED><95><B4><EB><B3><B4><EA><B8><B0>
++<<<<<<< HEAD
 +commit: <EC><9D><B8><EB><8D><B1><EC><8A><A4> <EC><83><81><ED><83><9C><EB><A5><BC> <EA><B8><B0><EB><A1><9D><ED><95>
<98><EA><B8><B0>
++=======
+ pull: <EC>90><EA><B2><A9> <EC><A0><80><EC><9E><A5><EC><86><8C><EC><9D><98> <EB><82><B4><EC><9A><A9><EC><9D><84> <EA>
<B0><80><EC><A0><B8><EC><98><A4><EA><B8><B0>
++>>>>>>> issue3
```
myfile.txt을 수정(or 변경) 후  "issue3 브랜치 병합(충돌해결)"로 저장하겠다.
------------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\tutorial>git add myfile.txt

C:\Users\TopC290\Documents\송수진\git\work\tutorial>git commit -m"issue3 브랜치 병합(충돌해결)"
[master 92373b8] issue3 브랜치 병합(충돌해결)
```





