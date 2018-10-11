.git  : 깃의 로컬저장소
dist/ : 서버 js의 배포파일 폴더
es6/ : 서버 jd의 소스코드 폴더
public/dist/ : 브라우저 js의 배포파일 폴더
public/es6/ : 브라우저 js의 소스코드 폴더
.gitignore : 깃 관리 제외대상 설정파일
package.json :프로젝트 정보, 디펜던시 설정파일
README.md : 프로젝트 설명파일 

서버 js : Node 사용하는 컴파일러가 컴파일해서 실행한다.
브라우저 js : 브라우저 내장 js컴파일러가 컴파일해서 실행한다.

es6 폴더에 있는 ES6 코드 === 트랜스파일링 ==> ES5코드로 바꾼 다음 dist 폴더에 생성한다. 

ES6 코드인 public/es6 == 트랜스파일링 ==> ES5코드로 public/dist/


npm i --save-dev babel-preset-es2015 : ES6 프리셋 설치 
------------------------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p64>npm i --save-dev babel-preset-es2015
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN p64@1.0.0 No repository field.

+ babel-preset-es2015@6.24.1
added 66 packages in 14.417s
```
=> .babelrc 파일 생성후 {"presets":[es2015""]} 입력 =>es6파일에 test.js 파일 생성후 입력 저장 후 gulp 실행 => 설치안되있어서 gulp설치 
--------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p64>npm i gulp
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN p64@1.0.0 No repository field.

+ gulp@3.9.1
added 244 packages in 16.979s
```
gulp 실행 => 실패
-----------
```
C:\Users\TopC290\Documents\송수진\git\work\p64>gulp
module.js:549
    throw err;
    ^

Error: Cannot find module 'gulp-bableS'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\Users\TopC290\Documents\송수진\git\work\p64\gulpfile.js:2:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
```
.gulpfile 파일에 코드 추가후 저장 => gulp-babel 패키지 설치 => npm i gulp-babel --save-dev 
----------------
```
C:\Users\TopC290\Documents\송수진\git\work\p64>npm i gulp-babel --save-dev
npm WARN gulp-babel@8.0.0 requires a peer of @babel/core@^7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN p64@1.0.0 No repository field.

+ gulp-babel@8.0.0
added 5 packages in 3.16s
```
es6폴더에 test.js파일을 만든다. 코드작성 후 => 노드설치 =>  gulp실행
---------------
```
C:\Users\TopC290\Documents\송수진\git\work\p64>npm i
npm WARN p64@1.0.0 No repository field.

up to date in 3.02s

C:\Users\TopC290\Documents\송수진\git\work\p64>gulp
[11:21:35] Using gulpfile ~\Documents\송수진\git\work\p64\gulpfile.js
[11:21:35] Starting 'default'...
[11:21:35] Finished 'default' after 13 ms
```
--------------


# package.json

pm i --save-dev babel-preset-es2015 
-------------
```
"devDependencies": {
  "babel-preset-es2015": "^6.24.1"
},
```

npm i gulp [--save] 
----------------
```
"dependencies": {
  "gulp": "^3.9.1"
}
```

* dependencies : 사용자에게 서비스 할 때 필요한 기능
* devDependencies : 개발자가 개발 할 때 필요한 기능 

책에는 언급이 없지만 다음 설치가 필요하다.
npm i --save -dev @babel/core


* Js는 컴파일러가 하나가 아니다.
* 기술은 버전에 따라 설정이 바뀝니다.

package.json 디펜던시 버전을 수동으로 바꾼다음 다음 명령을 수행하면
다시 새 절치되거나 사용하지 않는 것이 삭제된다.

npm i 

책에서 사용한 디펜던시 버전과 달라서 제대로 작동되지 않았다.
버전관리는 매우 중요



