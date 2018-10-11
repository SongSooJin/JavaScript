work파일에 test-merg 파일 생성후 test-merg여기서 작업을 하겠다.
-----------
```
C:\Users\TopC290\Documents\송수진\git\work>mkdir test-merge && cd test-merge
```
작업 하고자 하는 폴더에서 cmd실행 => git 저장소를 만든다. 하위 디렉토리를 만든다 git init
----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/test-merge/.git/
```
test-merge 폴더에 test.js파일을  ""(빈 내용으로) 생성
--------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>echo "" >> test.js
```
console.log("111"); 내용 추가 후 A로 저장
-----------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git add .

C:\Users\TopC290\Documents\송수진\git\work\test-merge>git commit -m "A"
[master (root-commit) 57e6991] A
 1 file changed, 1 insertion(+)
 create mode 100644 test.js
```
console.log("222"); 내용 추가 후 B로 저장
--------------------
```
 C:\Users\TopC290\Documents\송수진\git\work\test-merge>git add .

 C:\Users\TopC290\Documents\송수진\git\work\test-merge>git commit -m "B"
 [master 49fd9a2] B
  1 file changed, 1 insertion(+)
```
작업상태 , log 출력해보기 / (HEAD -> master) HEAD는 현재 master
------------------
```
  C:\Users\TopC290\Documents\송수진\git\work\test-merge>git log
  commit 49fd9a20be046346f9985ef1445e3a1845fef6b1 (HEAD -> master)
  Author: Song Soo jin <thdtnwls93@naver.com>
  Date:   Tue Sep 4 11:03:51 2018 +0900

      B

  commit 57e699144e34a9ebcf22c40074da20f7d4aa886f
  Author: Song Soo jin <thdtnwls93@naver.com>
  Date:   Tue Sep 4 11:02:09 2018 +0900

      A
```
bugfix 브렌치 추가 (b까지 내용을 master가 가지고 있다) 
-----------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git branch bugfix
```
=> HEAD의 위치를 bugfix로 변경
-------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git checkout bugfix
Switched to branch 'bugfix'
```
현재의 branch를 보여주라. (* 표시는 현재 HEAD의 위치)
------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git branch
* bugfix
  master
```
console.log("333"); 내용 추가 후 x로 저장 / (master는 내용추가를 저장하지 않음) why? HRAD의 위치를 변경하여 bugfix의 상태이기 때문에 
------------------------
```
  C:\Users\TopC290\Documents\송수진\git\work\test-merge>git add .

  C:\Users\TopC290\Documents\송수진\git\work\test-merge>git commit -m "x"
  [bugfix 396b815] x
   1 file changed, 1 insertion(+)
```
현재 내용 파악 / 작업 트리 상태를 표시/ 파일의 상태 확인하기 git status
-------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git status
On branch bugfix
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   test.js

no changes added to commit (use "git add" and/or "git commit -a")
```
console.log("444"); 내용 추가 후 y로 저장 
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git add .

C:\Users\TopC290\Documents\송수진\git\work\test-merge>git commit -m "y"
[bugfix ade24c8] y
 1 file changed, 1 insertion(+)
```
* 'bugfix' 브랜치의 이력은 'master' 브랜치의 이력을 모두 포함하고 있기 때문에, 'master' 브랜치는 단순히 이동하기만 해도 'bugfix' 브랜치의 내용을 적용할 수 있습니다. 또한 이 같은 병합은 'fast-forward(빨리 감기) 병합'이라고 부릅니다.
-------------------------------------------------------------------------
현재 branch 보여줘
-----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git branch
* bugfix
  master
```
HEAD의 위치를 master로 변경
----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git checkout master
Switched to branch 'master'
```
* 파일 내용 ==> ()
* console.log("111");
* console.log("222");

bugfix 브렌치의 코드를 master브렌치와 통합하고자 한다.
현재 HEAD위치를 
--------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git branch
  bugfix
* master
```
bugfix 브렌치의 코드를 master브렌치와 통합하고자 한다.
-------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>git merge bugfix
Updating 49fd9a2..ade24c8
Fast-forward
 test.js | 2 ++
 1 file changed, 2 insertions(+)
```
작업상태 , log 출력해보기
------------
```
 C:\Users\TopC290\Documents\송수진\git\work\test-merge>git log
 commit ade24c8b7199a035581860c705c51fab3d19221e (HEAD -> master, bugfix)
 Author: Song Soo jin <thdtnwls93@naver.com>
 Date:   Tue Sep 4 11:11:52 2018 +0900

     y

 commit 396b815d4193f48afd35929e04734583b9ed406a
 Author: Song Soo jin <thdtnwls93@naver.com>
 Date:   Tue Sep 4 11:08:05 2018 +0900

     x

 commit 49fd9a20be046346f9985ef1445e3a1845fef6b1
 Author: Song Soo jin <thdtnwls93@naver.com>
 Date:   Tue Sep 4 11:03:51 2018 +0900

     B

 commit 57e699144e34a9ebcf22c40074da20f7d4aa886f
 Author: Song Soo jin <thdtnwls93@naver.com>
 Date:   Tue Sep 4 11:02:09 2018 +0900

     A
```
전체 로그를 보여줌
-------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-merge>gitk
```


