```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
```

마스터 프렌치 자동생김

```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch another

C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
  another
* master
```

HEAD 포인터 변경
```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git checkout another
Switched to branch 'another'

C:\Users\TopC290\Documents\송수진\git\work\test-branch>git branch --all
* another
  master
```
README.md 파일 수정 후

modified 알아챔
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

```
C:\Users\TopC290\Documents\송수진\git\work\test-branch>git add README.md

C:\Users\TopC290\Documents\송수진\git\work\test-branch>git commit -m "second commit on another"
[another 0c85a03] second commit on another
 1 file changed, 2 insertions(+), 1 deletion(-)
```


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
