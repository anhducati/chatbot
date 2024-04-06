function onDevToolsOpen(){
    setTimeout(console.clear.bind(console))
     setTimeout(() => {console.log(
        "%cDevTools is Open!",
        "color:red;font-family:system-ui;font-size:4rem;font-weight:bold;"
    )},10);   
    const script = document.querySelector('script');
    script.remove();
    setTimeout(function() {
        window.location.href = 'https://www.youtube.com/watch?v=-D_oQrvXknM'; }); 
}

class DevToolsChecker extends Error {

    toString(){
       
          
    }

    get message(){
        onDevToolsOpen();
    }
}

console.log(new DevToolsChecker());