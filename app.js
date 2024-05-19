const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

const head =document.getElementsByTagName("head")[0]
head.innerHTML =`
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Best domain and Host for  free.">
<meta name="description" content="Best premium domain and Host.">
<meta  name="keywords" content="free domain,premium domain, free domain for  students,domain for students,free  host, free host  for students,detail all host  and domain, best domain for use,premium domain and host">
<title>Info Guy | Free Domain Services Provider Sites</title>
<link rel="apple-touch-icon" sizes="180x180" href="favicon/">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="favicon/site.webmanifest">
<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

<link rel="stylesheet" href="style.css">
<script src="https://kit.fontawesome.com/655d7397ac.js" crossorigin="anonymous"></script>
`;

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
