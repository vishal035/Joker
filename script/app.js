
var width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;

if (!(width >= 900)) {
    // document.getElementsByTagName('body').style.backgroundColor = "yellow";
    console.log(document.getElementsByTagName('html'));
    window.stop();
}
