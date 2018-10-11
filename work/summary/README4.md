
원격 저장소 복제(Clone)하기 (URL을 복사)
----------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work>git clone https://github.com/Mobirise/Free-Bootstrap-Template.git
Cloning into 'Free-Bootstrap-Template'...
remote: Counting objects: 114, done.
remote: Total 114 (delta 0), reused 0 (delta 0), pack-reused 114
Receiving objects: 100% (114/114), 5.74 MiB | 309.00 KiB/s, done.
Resolving deltas: 100% (5/5), done.
```

test-branch 폴더만들기 ==> test-branch폴더안에 "Hello World" 내용이 저장된  README.md 파일 만들기
---------------------

```
C:\Users\TopC290\Documents\송수진\git\work>mkdir test-branch

C:\Users\TopC290\Documents\송수진\git\work>cd test-branch

C:\Users\TopC290\Documents\송수진\git\work\test-branch>echo "Hello World" >> README.md
```

git 저장소를 만든다. 하위 디렉토리를 만든다 git init
------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/test-branch/.git/
```

작업 트리 상태를 표시/ 파일의 상태 확인하기 git status
---------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

한번은 백업
----------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git add .

C:\Users\TopC290\Documents\송수진\git\work\test-branch>git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md
```

파일 및 폴더의 추가/변경 사항을 저장소에 기록하려면 '커밋'이란 버튼을 눌러줘야 합니다.
git commit -m "변경내용" 저장
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git commit -m "first commit"
[master (root-commit) 17df263] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```
작업상태 , log 출력해보기
--------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git status
On branch master
nothing to commit, working tree clean

C:\Users\TopC290\Documents\송수진\git\work\test-branch>git log
commit 17df26364c0d4b24136bd821dd8c2e4f1530d3c1 (HEAD -> master)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 10:18:33 2018 +0900

    first commit
```

현재 있는 branch 모두 출력 (* 표시는 HEAD의 위치)
------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
* master
```
another branch 생성
--------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch another
```

현재 있는 branch 모두 출력 (* 표시는 HEAD의 위치)
-------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
  another
* master
````

 * 처음에 Git을 설치하게 되면 'master' 브랜치가 선택되어 있죠. 현재 선택된 브랜치가 아닌 다른 브랜치에서 작업하고 싶을 때에는, '체크아웃(checkout)' 명령어를 실행하여 원하는 브랜치로 전환할 수 있습니다.

 * 'HEAD' 란 현재 사용 중인 브랜치의 선두 부분을 나타내는 이름입니다. 기본적으로는 'master'의 선두 부분을 나타냅니다. 'HEAD' 를 이동하면, 사용하는 브랜치가 변경됩니다.


HEAD의 위치 변경 - git checkout ~
--------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git checkout another
Switched to branch 'another'
```

현재 있는 branch 모두 출력 (* 표시는 HEAD의 위치) / HEAD 변경 master => another
--------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
* another
  master
```
작업 트리 상태를 표시/ 파일의 상태 확인하기 git status
(README.md 파일 수정 후 => modified 알아챔)
--------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git status
On branch another
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

README.md 추가
----------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git add README.md
```
파일 및 폴더의 추가/변경 사항을 저장소에 기록하려면 '커밋'이란 버튼을 눌러줘야 합니다.
git commit -m "변경내용" 저장 (파일 수정후 두번째 변경내용 저장)
----------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git commit -m "second commit on another"
[another 0c85a03] second commit on another
 1 file changed, 2 insertions(+), 1 deletion(-)
```
작업상태 , log 출력해보기
------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git log
commit 0c85a03dd25b7a3f5757d076f17173e3dfcb1971 (HEAD -> another)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 10:29:04 2018 +0900

    second commit on another

commit 17df26364c0d4b24136bd821dd8c2e4f1530d3c1 (master)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Tue Sep 4 10:18:33 2018 +0900

    first commit
```
현재 있는 branch 모두 출력 (* 표시는 HEAD의 위치)
----------------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
* another
  master
```
HEAD의 위치 변경 - git checkout ~
--------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git checkout master
Switched to branch 'master'

C:\Users\TopC290\Documents\송수진\git\work\test-branch>git checkout another
Switched to branch 'another'
```
