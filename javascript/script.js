jQuery(document).ready(function () {
    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(500);
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp(500);
    });

    $(".imgslide a:gt(0)").hide();
    setInterval(function () {
        $(".imgslide a:first-child").fadeOut().next("a").fadeIn()
            .end().appendTo(".imgslide");
    }, 3000)





    $(".notice li:first").click(function () {
        $("#modal").addClass("active")
    })
    $(".btn").click(function () {
        $("#modal").removeClass("active")
    })

    $('.bxslider').bxSlider({
        slidewidth:600,
        
        //이미지 위에 텍스트 올리기
        captions:true,
        // 슬라이드 전환 지속 시간(다음 슬라이드로 전환되는 과정에서의 사이 시간)
        speed: 1000,
        // 다음 전환까지 멈춰있는 시간(다음 슬라이드로 전환되기 전에 잠깐 멈춤 시간)
        pause: 3000,
        //자동실행
        auto: true,
        // 컨트롤 버튼(재생/정지) 표시
        autoControls:true,
        stopAutoOnclick:true,
    })



});