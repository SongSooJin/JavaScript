작업 하고자 하는 폴더에서 cmd실행 => git 저장소를 만든다. 하위 디렉토리를 만든다 git init
-----------------------
```
C:\Users\TopC290\Documents\송수진\git\work>cd C:\Users\TopC290\Documents\송수진\git\work\git-page

C:\Users\TopC290\Documents\송수진\git\work\git-page>git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/git-page/.git/
```
(맨처음 저장한 형태를 파일 A[=first commit]에)한번 저장하겠다.
(  <h1>My page</h1> )
------------------
```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git add .

C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit -m "first commit"
[master (root-commit) e6d6c0e] first commit
 1 file changed, 12 insertions(+)
 create mode 100644 index.html
```
이전에 커밋한 내용을 수정 (파일 이름을 A로 변경)
git commit --amend

[vi editor]
command mode => editor mode (아래 하단에 보임) command mode => insert mode ==> i키  => 내용변경후 => esc키 ==> :wq! 엔터 ==> 빠져나옴
------------------------
```
 C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit --amend
 [master 9ea7a2d] A
  Date: Tue Sep 4 11:47:22 2018 +0900
  1 file changed, 12 insertions(+)
  create mode 100644 index.html
```
파일에 내용 변경(=추가)후 현재까지의 내용을 저장하겠다. => 그 변경된 상태를 B로 저장
(<p>개발자 취업을 위함 입력페이지~</p>  : 추가)
------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git add .

C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit -m "B"
[master 7d5b42e] B
 1 file changed, 1 insertion(+)
```
파일 B에 p태그 추가 후 log출력
---------------
```
 C:\Users\TopC290\Documents\송수진\git\work\git-page>git log
commit 7d5b42e7072655b69b38bc82bad203cce2e006f4 (HEAD -> master)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 12:01:28 2018 +0900

    B

commit 9ea7a2db78c30ce9f9a00e0fe5c9026cb557b7e6
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 11:47:22 2018 +0900

    A
```
새로운 branch bugfix를 생성 => HEAD의 위치를 bugfix로 변경
-------------
```
 C:\Users\TopC290\Documents\송수진\git\work\git-page>git branch bugfix

 C:\Users\TopC290\Documents\송수진\git\work\git-page>git checkout bugfix
 Switched to branch 'bugfix'

 C:\Users\TopC290\Documents\송수진\git\work\git-page>git branch
 * bugfix
   master
```

bugfix 브렌치 파일에 이미지 추가후 x에 저장 생성
(  <img src="~" : 추가 )
---------------------
```
   C:\Users\TopC290\Documents\송수진\git\work\git-page>git add .

   C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit -m "x"
   [bugfix d508592] x
    1 file changed, 1 insertion(+)
```

ul 태그 추가후 y에 저장 생성
(<h3>고유 스킬 정보</h3> : 추가 )
----------------
```
   C:\Users\TopC290\Documents\송수진\git\work\git-page>git add .

   C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit -m "y"
   [bugfix 128e5d9] y
    1 file changed, 6 insertions(+)
```
log를 한줄에 보여줌
---------------
```
   C:\Users\TopC290\Documents\송수진\git\work\git-page>git log --pretty=oneline
   128e5d9b65850a07715681826a9d67fe77737782 (HEAD -> bugfix) y
   d5085927b69cd08a6958a7ea69e1b0d2e7639621 x
   7d5b42e7072655b69b38bc82bad203cce2e006f4 (master) B
   9ea7a2db78c30ce9f9a00e0fe5c9026cb557b7e6 A
```

HEAD를 master로 변경 (p태그 까지 한게 보임 / why? p태그 추가 후 B파일 이후 branch생성 후 x에 저장했기 때문에
이 이후 작업은 파일에 보여지지 않는다.)
--------------------------------
```
   C:\Users\TopC290\Documents\송수진\git\work\git-page>git checkout master
   Switched to branch 'master'

   C:\Users\TopC290\Documents\송수진\git\work\git-page>git branch
     bugfix
   * master
```
form태그의 input 태그 추가 (HEAD는 master) c를 만들어 저장
(  <input type="text" name="email"> : 추가 )
------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git add .

C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit -m "c"
[master fac4b8a] c
 1 file changed, 6 insertions(+)
```
버튼태그 추가 d를 만들어 저장
(  <button type="button" name="button">이메일</button> : 추가 )
 -----------------
 ```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git add .

C:\Users\TopC290\Documents\송수진\git\work\git-page>git commit -m "d"
[master dc84697] d
 1 file changed, 1 insertion(+)
 ```
현재까지의 log출력 (한줄에)
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git log --pretty=oneline
dc84697b4deb7dfed53a6ccbdff484816644ca8d (HEAD -> master) d
fac4b8a464912a3028a9ef88fda6934a21ec8e85 c
7d5b42e7072655b69b38bc82bad203cce2e006f4 B
9ea7a2db78c30ce9f9a00e0fe5c9026cb557b7e6 A
```
현재 banch 보여줘 (* 표시는 HEAD의 위치)
현재 master 브렌치에는 A B c d 가 저장되어 있고, bugfix 브렌치에는  x y 가 저장되어있다.
둘의 내용을 병합하기 위해서는 merge의 작업장소가 master 여야함
---------------
```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git branch
  bugfix
* master
```
둘의 내용을 병합하기 => git merge
----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\git-page>git merge bugfix
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```





