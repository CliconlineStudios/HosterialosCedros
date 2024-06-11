let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("sharelink").style.display = "none";
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("restaurante").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}

function categorias() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
    
    
}

function restaurante() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("restaurante").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();
    
    
}

function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("costos").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();     
        
}



function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}


//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("restaurante").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }


// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.side2')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        
//formulario>
        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "573998968077";
          
            let cliente = document.querySelector("#cliente").value;
            let edad = document.querySelector("#edad").value;
            let fecha = document.querySelector("#fecha").value;
            let hora = document.querySelector("#hora").value;
            let modulos = document.querySelector("#modulos").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=593992835380&text=
                  *Hostería los Cedros*%0A
                  *Datos de la Reserva*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Cantidad*%0A
                  ${edad}%0A
                  *Fecha de Reserva*%0A
                  ${fecha}%0A
                  *Hora de Entrada*%0A
                  ${hora}%0A
                  *Alojamiento*%0A
                  ${modulos}%0A`;
          
            if (cliente === "" || edad === "" || fecha === "" || hora === "") {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Reserva Fue Enviada, ${cliente}`;
          
            window.open(url);
          });
          
          //ALERTAS>
          function save(){
            let url = `https://drive.google.com/u/0/uc?id=1VVSTlUODTMNHCKxJUVCxXnqyZcBFl6AC&export=download`;
            window.open(url); 
           };
          
          function ftuser() {
              Swal.fire({
                  title: 'Hostería Los Cedros',
                  text: 'Alojamiento Mindo-Ecuador',
                  imageUrl: 'img/logocedros.png',
                  imageWidth: 100,
                  confirmButtonText: 'Añadir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
          function abrirpagos(){
            let urla = `https://hosterialoscedrosdemindo.blogspot.com/p/opciones-de-pago.html`;
            window.open(urla); 
           };
    
    
           function verpagos(){
            let urlsp = `https://hosterialoscedrosdemindo.blogspot.com/p/opciones-de-pago.html`;
            window.open(urlsp); 
           };
    
    
          function msjpagos() {
            Swal.fire({
                title: 'Opciones de Pago',
                icon: 'success',
                html:
               '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://hosterialoscedrosdemindo.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ver nro. Cuenta',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  verpagos();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Información ',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
          
           
          };
          
          function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Tarjeta Digital',
            text: 'Link Copiado a Portapapeles',
            footer: 'CliconlineStudios'
            });
          
           
          };
    
    
    
    const $content = document.getElementById('textareacopy');
          $btncopy = document.getElementById ('btcopi');
          $title = document.getElementById ('titlelink')
    
          $btncopy.addEventListener('click', e => {
            $content.select();
            document.execCommand('copy')
            msj2();
          });
    
        
// share tarjeta

const shareData2 = {
    title: 'Hostería los Cedros',
    text: 'Enviado desde Cliconline App.Tarjeta Digital Hostería los Cedros',
    url: 'https://hosterialoscedrosdemindo.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://hosterialoscedrosdemindo.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
    } 



