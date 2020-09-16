let page = 1;


$("#searchWord").on("keyup", function(e) {
    //console.log(e.keyCode);
    if(e.keyCode === 13) {
        $("#thumbnailList").html("");
        //$(".btnSearch").trigger("click");
        search();
    }
})

$(".btnSearch").on("click",function() {
    $("#thumbnailList").html("");
    search();
})


function search() {
    let searchWord = $("#searchWord").val().trim(); // trim : 공백잘라주는것
    if (searchWord === "") {
        alert("검색어를 입력해 주세요.");
        $("#searchWord").val("");
        $("#searchWord").focus();
    }else {
       
        $.ajax({
            url:`https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=30&page=${page}`, //vclip 의 사이즈는 30이 최대 / image는 50이 최대
            headers:{
                Authorization:"KakaoAK a12496ca148298f9b086763814f9904a"  
            }
        })
        .done(function (res) {
            console.log(res);
            let arr = res.documents;
            let end = res.meta.is_end;
            
            if(arr.length === 0){
                alert("검색결과가 없습니다.");
                $("#searchWord").focus();
                $("#searchWord").val("");
                return false;
            }
            if(end){
                $(".btnMore").hide();
            }else {
                $(".btnMore").fadeIn();
            }

            $.each(arr,function (index, item) {
                //console.log(item);
                let tempList = `<li>
                                    <a href="${item.url}" data-fancybox="img" data-caption="${item.title}"><img src="${item.thumbnail}" alt="${item.title}"></a>
                                </li>`;
                                $("#thumbnailList").append(tempList);
                
            })
        })
    }
}

$(".btnMore").on("click", function() {
    if(page <= 50) {
        page++;
        search();
    }
    return false;
})





