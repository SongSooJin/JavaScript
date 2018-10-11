# Markdown
여러 문서작성 프로그램의
저장방식의 차이로 공유가 안되는 점을
극복하기 위해서 만들어진 문서 저장 포맷 표준방식

* 현재 설명서로 많이 사용되고 있다.
* HTML 태그를 사용할수 있습니다.

## 1.로컬저장소를 생성한다.
--------------------
```
git init
Initialized empty Git repository in C:/Users/TopC290/Documents/송수진/git/work/.git/
```

## 2.깃의상태를 조회
--------------
```
git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\TopC290\Documents\송수진\git\work\web>

```

깃의 영역 3가지
--------------
워킹 디렉토리 ==> 인덱스(stage) ==> 로컬저장소
소스코드 ==> 등록된 백업대상 ==> 백업 정보를 갖고 있는 폴더


## 3.인덱스의 백업대상을 등록
----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\web>git add index.html

C:\Users\TopC290\Documents\송수진\git\work\web>git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   index.html


C:\Users\TopC290\Documents\송수진\git\work\web>
```

4.인덱스에 등록된 대상파일들을 로컬저장소에 커밋(백업)
--------------------------------------------
```
git commit -m "frist commit"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'TopC290@co1.(none)')

```

* nothiong to commit: 인덱스 == 로컬저장소
* working tree clean: 워킹디렉토리 == 로로컬저장소

커밋을 수행하여 백업한 상태와 현재 프로젝트 파일들의 상태가 일치합니다.


환경변수에 커밋 작업자정보 등록하기
----------------------------------
```
git config --global user.name "Song Soo jin"
git config --global user.email thdtnwls93@naver.com
```

## 5.환경변수 확인하기
----------------
```
git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
rebase.autosquash=true
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
http.sslbackend=openssl
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
credential.helper=manager
user.name=Song Soo jin
user.email=thdtnwls93@naver.com
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
```

## 6.커밋정보 조회하기
---------------
```
git log
commit b7b8a57bdd0c6bfaf46ac642b0a102fa2277766b (HEAD -> master)
Author: Song Soo jin <thdtnwls93@naver.com>
Date:   Mon Sep 3 14:29:50 2018 +0900

    first commit
```

index.html 파일을 삭제해본다.

## 7.삭제된 파일 정보 조회하기
-----------------------
```
git ls-files -d
index.html
```

## 8.삭제된 파일을 복구해 본다.
-----------------------
```
git checkout index.html
```
