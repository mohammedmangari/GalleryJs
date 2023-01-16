let main = document.getElementsByClassName('main')[0];
let imgs = document.images;
let body= document.body;
let ret= document.getElementsByTagName('button')[0];
let content=document.getElementById('cont');


   main.addEventListener ("click" ,function(){
    for(let i=0;i<imgs.length;i++){
        if(i==4){
            continue;
        }
        imgs[i].classList.add('hiden');
    }

    main.classList.add('cover');
    document.body.style.background="#006"
    content.classList.remove('hiden');
    console.log(content)

    // content.getElementsByTagName('h1')[0].innerHTML= main.getElementsByTagName('img')[0].src
    content.getElementsByTagName('h1')[0].innerHTML="Welcome";
    // content.getElementsByTagName('p')[0].innerHTML="Number : " + main.getElementsByTagName('img')[0].src.slice(43,44)
    content.getElementsByTagName('p')[0].innerHTML="Number : " + main.getElementsByTagName('img')[0].name
   })

    main.addEventListener('contextmenu' ,function(){
        for(let i=0;i<imgs.length;i++){
            if(i==4){
                continue;
            }
            imgs[i].classList.remove('hiden');
        }
        main.classList.remove('cover');
        document.body.style.background="url('../src/MyBackground.mp4')";
        content.classList.add('hiden');
    })


  

    