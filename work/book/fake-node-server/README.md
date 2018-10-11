1. User ==URL 접속==> naver.com

2. User <==HTML 파일== naver.com

3. 브라우저 HTML 처리 + JavaScript(AJAX 코드) 기동

4. AJAX 기동 ==URL 접속==> daum.net

5. AJAX <==브라우저 필터링==JSON 문자열== daum.net

6. 받은 JSON 문자열 객체로 바꾸고 화면에 표시

브라우저 필터링 주소창에 도메인과 데이터를 준 서버에 도메인이 같은가? 달라? 추가적으로 daum.net이 이 데이터를 허용하라고 추가정보를 전달하는가? 'Access-Control-Allow-Origin', '*' 설정이 있으면 받은 데이터를 JS에게 전달 아니면 대신 에러 메시지를 콘솔에 출력한다.