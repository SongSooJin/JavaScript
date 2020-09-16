
let page = 1;
const size = 50;

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
       
        axios.get(
            `https://dapi.kakao.com/v2/search/image?query=${searchWord}&size=${size}&page=${page}`,
            {
                headers:{
                    Authorization:"KakaoAK a12496ca148298f9b086763814f9904a"  
                }
            }
        )
        .then(function (res) {
            console.log(res);
            let arr = res.data.documents;
            let end = res.data.meta.is_end;
            
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
                console.log("is_end===",end);
            }

            $.each(arr,function (index, item) {
                //console.log(item);
                let tempList = `<li>
                                    <a href="${item.image_url}" data-fancybox="img"><img src="${item.thumbnail_url}"></a>
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


$(window).on("scroll", function() {
    let st = $(window).scrollTop();
    let dh = $(document).height();
    let wh = $(window).height();
    if (st >= dh-wh) {
        console.log("바닥");
        if(page <= 50) {
            page++;
            search();
            console.log("page===",page);
        }
        return false;
    }
    //console.log(st);
})




