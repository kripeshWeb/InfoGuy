const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

const head =document.getElementsByTagName("head")[0]
head.insertAdjacentHTML("beforeend",
`<script data-cfasync='false' src='//wwr.hlinit.com/?tag=d914bb3e'></script>
<meta name="cb357dbd513825cb12e1743810358c048c932446" content="cb357dbd513825cb12e1743810358c048c932446" />
<script type="text/javascript" src="//r-q-e.com/66c2dd6deb7f03f90ce0/6a93ca5854/?placementName=default"></script>
`
);

hamburger.addEventListener('click',()=>{
    menu.classList.toggle("active");
    hamburger.classList.toggle("cross");
})

const lads = document.querySelector(".ads-970x90");
lads.innerHTML=`<ins style="width: 0px;height:0px" data-width="0" data-height="0" data-max_height="90" class="eef9361f27f" data-domain="//r-q-e.com" data-affquery="/e2f3513db8780acbdff5/ef9361f27f/?placementName=default"><script src="//r-q-e.com/js/responsive.js" async></script></ins>`

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

ads1_300x250.innerHTML= `<script async="async" data-cfasync="false" src="//pl23360619.highcpmgate.com/937c4eec914897b4ad3b6b128d8225f9/invoke.js"></script>
<div id="container-937c4eec914897b4ad3b6b128d8225f9"></div>`;
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
bads.innerHTML=`<ins style="width: 320px;height:50px" data-width="320" data-height="50" class="a5d162baac8" data-domain="//r-q-e.com" data-affquery="/62b2b14c7d1157a71ae6/5d162baac8/?placementName=default"><script src="//r-q-e.com/js/responsive.js" async></script></ins>`;
