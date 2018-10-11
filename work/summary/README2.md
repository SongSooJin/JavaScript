# Github 연동하기

깃허브 회원가입
----------------
```
 https://github.com
 ```

로컬 컴퓨터 환경변수 설정대로 등록하세요
-------------------------------------
```
git config --global user.name "Song Soo jin"
git config --global user.email thdtnwls93@naver.com
```


새원격 저장소 만들기
------------------
New Repository >> Repository Name 작성 >> Create Repository
버튼 클릭


원격 저장소와 연결작업 수행하기
----------------------------

```
…or create a new repository on the command line
echo "# web" >> README.md
git init
git add README.md
git commit -m "really commit"
git remote add origin https://github.com/SongSoojin/web.git
git push -u origin master
```


# web
깃헙 사용법을 연습합니다.

* git remote add 별칭 원격 저장소URL
* git push -u 원격저장소URL 브랜치
로컬 저장소의 작업브랜치의 커밋 내역을 원격저장소의 브랜치에 업로드 합니다.



git push -u origin master 입력
------------------------------
```
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 568 bytes | 568.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/SongSoojin/web.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```
