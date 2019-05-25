$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:4
        },
        600:{
            items:4
        }
    }
})
function openPage(pageName,elmnt,color) {
        var i, tabcontent, tablinks; tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
                tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.display = "block";
            }
            document.getElementById(pageName).style.display = "block";
                elmnt.style.backgroundColor = color;
    }
    document.getElementById("defaultOpen").click();
        $(function() {
              $('.example').barrating({
                theme: 'fontawesome-stars'
              });
           });
