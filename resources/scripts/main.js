function createweather() {
    var elem = document.documentElement;
    var img = "./resources/icon-set/";
    var o0templo = document.getElementById("i0templo").value;
    var o0temphi = document.getElementById("i0temphi").value;
    var oi0con = document.getElementById("i0con").value;
    document.getElementById("0templo").innerHTML=o0templo+"&#176C";
    document.getElementById("0temphi").innerHTML=o0temphi+"&#176C";
    document.getElementById("0icon").src=img+oi0con+".png";
    var o1templo = document.getElementById("i1templo").value;
    var o1temphi = document.getElementById("i1temphi").value;
    var oi1con = document.getElementById("i1con").value;
    document.getElementById("1templo").innerHTML=o1templo+"&#176C";
    document.getElementById("1temphi").innerHTML=o1temphi+"&#176C";
    document.getElementById("1icon").src=img+oi1con+".png";
    var o2templo = document.getElementById("i2templo").value;
    var o2temphi = document.getElementById("i2temphi").value;
    var oi2con = document.getElementById("i2con").value;
    document.getElementById("2templo").innerHTML=o2templo+"&#176C";
    document.getElementById("2temphi").innerHTML=o2temphi+"&#176C";
    document.getElementById("2icon").src=img+oi2con+".png";
    var o3templo = document.getElementById("i3templo").value;
    var o3temphi = document.getElementById("i3temphi").value;
    var oi3con = document.getElementById("i3con").value;
    document.getElementById("3templo").innerHTML=o3templo+"&#176C";
    document.getElementById("3temphi").innerHTML=o3temphi+"&#176C";
    document.getElementById("3icon").src=img+oi3con+".png";
    var o4templo = document.getElementById("i4templo").value;
    var o4temphi = document.getElementById("i4temphi").value;
    var oi4con = document.getElementById("i4con").value;
    document.getElementById("4templo").innerHTML=o4templo+"&#176C";
    document.getElementById("4temphi").innerHTML=o4temphi+"&#176C";
    document.getElementById("4icon").src=img+oi4con+".png";
    var o5templo = document.getElementById("i5templo").value;
    var o5temphi = document.getElementById("i5temphi").value;
    var oi5con = document.getElementById("i5con").value;
    document.getElementById("5templo").innerHTML=o5templo+"&#176C";
    document.getElementById("5temphi").innerHTML=o5temphi+"&#176C";
    document.getElementById("5icon").src=img+oi5con+".png";
    var o6templo = document.getElementById("i6templo").value;
    var o6temphi = document.getElementById("i6temphi").value;
    var oi6con = document.getElementById("i6con").value;
    document.getElementById("6templo").innerHTML=o6templo+"&#176C";
    document.getElementById("6temphi").innerHTML=o6temphi+"&#176C";
    document.getElementById("6icon").src=img+oi6con+".png";
    document.getElementById('screen').style.display='block';
    document.getElementById('controlpanel').style.display='none';
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
// When user is trying to exit full screen:
if (document.addEventListener)
{
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}
function exitHandler()
{
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
    {
        document.getElementById('screen').style.display='none';
        document.getElementById('controlpanel').style.display='block';
    }
}
function reset(){
    document.getElementById("i0templo").value = 0;
    document.getElementById("i0temphi").value = 0;
    document.getElementById("i1templo").value = 0;
    document.getElementById("i1temphi").value = 0;
    document.getElementById("i2templo").value = 0;
    document.getElementById("i2temphi").value = 0;
    document.getElementById("i3templo").value = 0;
    document.getElementById("i3temphi").value = 0;
    document.getElementById("i4templo").value = 0;
    document.getElementById("i5temphi").value = 0;
    document.getElementById("i6templo").value = 0;
    document.getElementById("i6temphi").value = 0;
}