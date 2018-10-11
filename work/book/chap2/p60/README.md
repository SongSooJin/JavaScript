* npm install 설치대상 프로그램 -옵션
* -g : 설치대상 프로그램을 전역적으로 설치하라.나중에 콘솔에 해당 프로그램을 사용할 수 있게 된다.
* -g의 위치는 상관 없다.
* npm install http-server -g
* npm install -g http-server 
* http-server간단하고 구성이없는 명령 행 http 서버입니다

npm i -g http-server : npm:노드패키지매니저 i:설치 g:전역적 http-server :서버를
-----------------------
```
C:\Users\TopC290\Documents\송수진\git\work>npm i -g http-server
C:\Users\TopC290\AppData\Roaming\npm\hs -> C:\Users\TopC290\AppData\Roaming\npm\node_modules\http-server\bin\http-server
C:\Users\TopC290\AppData\Roaming\npm\http-server -> C:\Users\TopC290\AppData\Roaming\npm\node_modules\http-server\bin\http-server
+ http-server@0.11.1
added 25 packages in 2.764s
```
cd p60으로 커서를 옮기겠다.
------------------
```
C:\Users\TopC290\Documents\송수진\git\work>cd p60
```
http-server ==> 서버를 만들겠다. (  http://127.0.0.1:8080 (이거 복사 URL => 인터넷 주소창에 입력 => p60에 있는 index.html의 홈페이지가 보인다.)
-----------------------
```
C:\Users\TopC290\Documents\송수진\git\work\p60>http-server
Starting up http-server, serving ./
Available on:
  http://192.168.0.214:8080
  http://127.0.0.1:8080 (이거 복사 URL)
Hit CTRL-C to stop the server

[Wed Sep 05 2018 16:57:35 GMT+0900 (대한민국 표준시)] "GET /" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
[Wed Sep 05 2018 16:57:35 GMT+0900 (대한민국 표준시)] "GET /favicon.ico" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
[Wed Sep 05 2018 16:57:35 GMT+0900 (대한민국 표준시)] "GET /favicon.ico" Error (404): "Not found"
```
npm init (명령어를 사용하면 인터렉티브 프롬프트가 동작하면서 프로젝트에 대한 여러가지 정보를 입력할 수 있게 되고 그 정보를 기반으로 기본적인 package.json을 만들어 줍니다. 즉, 프로젝트를 생성하는 명령어) 
--------------------------
```
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (p60) 엔터
package name: (p60) 엔터 
version: (1.0.0) 엔터 
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: Song Soo Jin
license: (ISC) MIT
About to write to C:\Users\TopC290\Documents\송수진\git\work\p60\package.json:

{
  "name": "p60",
  "version": "1.0.0",
  "description": "npm install 설치대상 프로그램 -옵션\r -g : 설치대상 프로그램을 전역적으로 설치하라.나중에 콘솔에 해당 프로그램을 사용할 수 있게 된다.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Song Soo Jin",
  "license": "MIT"
}

Is this ok? (yes) y
```
package.json
------------------
* 이 파일은 프로젝트 설명,버전,저자,라이센스, 원격저장소, 단축명령, 디펜던시 정보를 관리하는 파일입니다.
노드 기반의 프로젝트에서 주로 사용합니다.

npm i underscore
--------------------
* -g 옵션을 안 붙였으므로 컴퓨터 당 하나의 설치대상 프로그램을 설치하는 것이 아니라,커서가 위치한 폴더 밑으로 해당 프로그램을 설치합니다.
결국 프로젝트 당 하나를 설치하는 것이 아니라, 자동으로 node_modules 폴더 밑으로 설치가 됩니다.

```
npm i underscore
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN p60@1.0.0 No repository field.

+ underscore@1.9.1
added 1 package in 0.819s
```
package.json  파일에 다음 내용이 추가됩니다.
------------
```
"dependencies": {
  "underscore": "^1.9.1"
}
```
package-lock.json => 개발자 건들이지마 그치만 보관해줘








