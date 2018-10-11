# Grunt
더 오래되었다.

# Gulp
반복작업을 자동화해서 대신 수행해 주는 도구입니다.

npm i -g gulp (설치대상 프로그램을 전역적으로 설치하라)
---------------
```
npm i -g gulp
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN notice [SECURITY] lodash has the following vulnerability: 1 low. Go here for more details: https://nodesecurity.io/advisories?search=lodash&version=1.0.2 - Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN notice [SECURITY] minimatch has the following vulnerability: 1 high. Go here for more details: https://nodesecurity.io/advisories?search=minimatch&version=0.2.14 - Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.
npm WARN notice [SECURITY] minimatch has the following vulnerability: 1 high. Go here for more details: https://nodesecurity.io/advisories?search=minimatch&version=2.0.10 - Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.
C:\Users\TopC290\AppData\Roaming\npm\gulp -> C:\Users\TopC290\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js
+ gulp@3.9.1
added 253 packages in 14.598s
```
커서 이동 방법
-------------
```
C:\Users\TopC290\Documents\송수진\git\work\p60>cd..

C:\Users\TopC290\Documents\송수진\git\work>cd p62

C:\Users\TopC290\Documents\송수진\git\work\p62>
```
gulp출력
-----------------
```
[17:24:59] Local gulp not found in ~\Documents\송수진\git\work\p62
[17:24:59] Try running: npm install gulp

C:\Users\TopC290\Documents\송수진\git\work\p62>npm i gulp
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN saveError ENOENT: no such file or directory, open 'C:\Users\TopC290\Documents\송수진\git\work\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\TopC290\Documents\송수진\git\work\package.json'
npm WARN work No description
npm WARN work No repository field.
npm WARN work No README data
npm WARN work No license field.

+ gulp@3.9.1
added 253 packages in 19.383s
```

* npm i gulp / 여기에 -g를 안쓰면 파일안에 node_modules파일이 생김

----
npm init -y (해당 대답을 모두 yes로 하겠다.)
-------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p62>npm init -y
Wrote to C:\Users\TopC290\Documents\송수진\git\work\p62\package.json:

{
  "name": "p62",
  "version": "1.0.0",
  "description": "",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
확인해보기 
------
```
gulp
[17:29:15] Using gulpfile ~\Documents\송수진\git\work\p62\gulpfile.js
[17:29:15] Starting 'default'...
[17:29:15] Finished 'default' after 125 μs
```




