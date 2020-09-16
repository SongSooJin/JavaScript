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
       
        $.ajax({
            url:`naver_search.php?searchWord=${searchWord}&page=${page}`,
    
        })
        .done(function (res) {
            //console.log(res);
           // console.log(typeof res);
            let tempRes = JSON.parse(res);
            console.log(tempRes);
            
            let arr = tempRes.items;
            //let end = tempRes.meta.is_end;
            
            if(arr.length === 0){
                alert("검색결과가 없습니다.");
                $("#searchWord").focus();
                $("#searchWord").val("");
                return false;
            }
            // if(end){
            //     $(".btnMore").hide();
            // }
            else {
                $(".btnMore").fadeIn();
            }
            //console.log("end===",end);
            $.each(arr,function (index, item) {
                //console.log(item);
                let tempList = `<li>
                                    <a href="${item.link}" data-fancybox="img" data-caption="${item.title}"><img src="${item.thumbnail}" alt="${item.title}"></a>
                                </li>`;
                                $("#thumbnailList").append(tempList);

                                
                                $(".container").imagesLoaded()
                                .done(function() {
                                    console.log("모든 파일이 잘 들어왔습니다.");
                                })
                                .fail(function () {
                                    console.log("실패한 파일이 있습니다.");
                                })
                                .always(function () {
                                    $(".typoList").isotope({
                                        itemSelector:".item",
                                        layoutMode:"masonry"
                                    });
                                })
                
            })
        })
    }
}

$(".btnMore").on("click", function() {
   
    page+=50;
    search();
 
    return false;
})


$(window).on("scroll", function() {
    let st = $(window).scrollTop();
    let dh = $(document).height();
    let wh = $(window).height();
    if (st >= dh-wh) {
        console.log("바닥");
      
            page+=50;
            search();
            console.log("page===",page);
      
        return false;
    }
    //console.log(st);
})




