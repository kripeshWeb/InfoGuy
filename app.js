const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click',()=>{
    menu.classList.toggle("active");
    hamburger.classList.toggle("cross");
})

const lads = document.querySelector(".ads-970x90");
lads.innerHTML=`<script data-cfasync='false' src='//wwr.hlinit.com/?tag=d914bb3e'></script>`

const ads = document.querySelector(".ads-728x90");

ads.innerHTML = `<script type="text/javascript">
atOptions = {
    'key' : '483bf702a2f6de6888197fb86053373d',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
};
document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/483bf702a2f6de6888197fb86053373d/invoke.js"></scr' + 'ipt>');
</script>`;

const ads1_300x250 = document.querySelector(".ads1");
const ads2_300x250 = document.querySelector(".ads2");

ads1_300x250.innerHTML= `<iframe data-aa='2295183' src='//ad.a-ads.com/2295183?size=300x250' style='width:300px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>`;
ads2_300x250.innerHTML= `<script type="text/javascript">
atOptions = {
    'key' : '824f6e8a257e8a3ed7c5722f4526c07c',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
};
document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/824f6e8a257e8a3ed7c5722f4526c07c/invoke.js"></scr' + 'ipt>');
</script>`;

const bads = document.querySelector(".bads");
// bads.innerHTML=`<script type="text/javascript">
// atOptions = {
//     'key' : '10af0c47f1c1dca7120ec9a6ac051b2a',
//     'format' : 'iframe',
//     'height' : 50,
//     'width' : 320,
//     'params' : {}
// };
// document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/10af0c47f1c1dca7120ec9a6ac051b2a/invoke.js"></scr' + 'ipt>');
// </script>`;
bads.innerHTML=`<iframe data-aa='2295215' src='//ad.a-ads.com/2295215?size=320x50' style='width:320px; height:50px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>`;
