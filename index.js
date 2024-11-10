fetch("navbar.html")
.then(response  => response.text())
.then(data =>{
    document.getElementById("content").innerHTML = data
})
var likeactive = false
var dislikeactive = false
function click1(){
 likeactive = true
 var likebutton  = document.getElementById("like")
if(likeactive == true && dislikeactive == false ){
likebutton.style.backgroundColor = "yellow"

}

}
function click2(){
    dislikeactive = true
    if( dislikeactive == true && likeactive== false){
        var dislikebutton = document.getElementById("dislike1")
        dislikebutton.style.backgroundColor = "yellow"
    }
}
function click3(){
    var video1 = document.getElementById("video1")
    video1.playbackRate = 0.3
}
function click4(){
    var video2 =  document.getElementById("video1")
    video2.playbackRate = 2.0
}
function click5(){
    var video3 = document.getElementById("video2")
    video3.playbackRate = 0.3
}
function click6(){
    var video4 = document.getElementById("video2")
    video4.playbackRate = 2.0
}
