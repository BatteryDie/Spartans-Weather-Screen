function startup() {
    let today = new Date();
    document.getElementById('today').innerHTML=today;
    //Load list
    let list = "<option value='clear_night'>clear_night</option>\
    <option value='cloudy'>cloudy</option>\
    <option value='cloudy_night'>cloudy_night</option>\
    <option value='cold'>cold</option>\
    <option value='fog_night'>fog_night</option>\
    <option value='foggy'>foggy</option>\
    <option value='heat'>heat</option>\
    <option value='heavy_cloudy_night'>heavy_cloudy_night</option>\
    <option value='heavy_rain'>heavy_rain</option>\
    <option value='heavysnow'>heavysnow</option>\
    <option value='ice'>ice</option>\
    <option value='ice_snow'>ice_snow</option>\
    <option value='night_rain'>night_rain</option>\
    <option value='night_rain_thunder'>night_rain_thunder</option>\
    <option value='overcast'>overcast</option>\
    <option value='partly_cloudy'>partly_cloudy</option>\
    <option value='rain'>rain</option>\
    <option value='rain_snow'>rain_snow</option>\
    <option value='rain_sun'>rain_sun</option>\
    <option value='rain_thunder'>rain_thunder</option>\
    <option value='rain_thunder_sun'>rain_thunder_sun</option>\
    <option value='rain_tornado'>rain_tornado</option>\
    <option value='snow'>snow</option>\
    <option value='snow_night'>snow_night</option>\
    <option value='snow_sun'>snow_sun</option>\
    <option value='snow_thunder_sun'>snow_thunder_sun</option>\
    <option value='sunny'>sunny</option>\
    <option value='tornado'>tornado</option>";
    document.getElementById("i0con").innerHTML=list;
    document.getElementById("i1con").innerHTML=list;
    document.getElementById("i2con").innerHTML=list;
    document.getElementById("i3con").innerHTML=list;
    document.getElementById("i4con").innerHTML=list;
    document.getElementById("i5con").innerHTML=list;
    document.getElementById("i6con").innerHTML=list;
}