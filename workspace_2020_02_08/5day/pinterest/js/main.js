// $(".typoList").isotope({
//     itemSelector:".item",
//     layoutMode:"masonry"
// });

// 이미지가 많을때 아래의 방법
// 이미지를 먼저 다운 후 실행하라 
// iostope 방법
// $(window).on("load", function() {
//     $(".typoList").isotope({
//         itemSelector:".item",
//         layoutMode:"masonry"
//     });
// });


let imgNum = 0;
//var imgNum = 0;
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
    .progress(function (instance, image) {
        //console.log(image);
        if(image.isLoaded){
            imgNum++;
        }
        $(".imageNum").text(`${imgNum}/30`);
        //$(".imageNum").text(imgNum + "/30");

    });

// $(".filterBox li").eq(1).on("click", function () {
//    $(".typoList").isotope({ filter : "digital"});
//    $(this).addClass("on");
//    $(this).siblihgs().removeClass("on");
//    return false; 
// });

// $(".filterBox li").eq(2).on("click", function () {
//     $(".typoList").isotope({ filter : "calligraphy"});
//     $(this).addClass("on");
//     $(this).siblihgs().removeClass("on");
//     return false; 
//  });

//  $(".filterBox li").eq(3).on("click", function () {
//     $(".typoList").isotope({ filter : "paint"});
//     $(this).addClass("on");
//     $(this).siblihgs().removeClass("on");
//     return false; 
//  });

 $(".filterBox li").on("click", function () {
    let filterItem = "."+$(this).data("filter");

    $(".typoList").isotope({ filter : filterItem});
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    return false; 

 });

 $(".typoList li").each(function (index,item) {
     let imgSrc = $(this).find("img").attr("src");
     $(this).find("a").attr("href",imgSrc);
     $(this).find("a").attr("data-fancybox","item");
 });


$(".typoList").html(""); 
//외부의 있는 데이터를 불러올때 사용 
$.ajax({
    url:"list.json",
    dataType:"json",
    method:"get"
})
.done(function (res) {
    //console.log(res.gallery);
    //배열 반복문
    $.each(res.gallery, function (index,item) {
        let tempList =  `<li class="item ${item.type}">
                            <a href="${item.link}" data-fancybox="${item.type}" data-caption="${item.title}">
                                <img src="${item.thumb}" alt="">
                                <div class="desc">
                                    <h2>${item.title}</h2>
                                    <p>${item.desc}</p>
                                </div>
                            </a>
                        </li>`;

                        $(".typoList").append(tempList);
    })
    
})
// .success(function (res) {
    
// })
