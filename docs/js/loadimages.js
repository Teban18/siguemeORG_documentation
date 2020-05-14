 /**
    * Array con las imagenes que se iran mostrando en la web
    */
var imagenes = [
  'https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/p960x960/96220846_130373231953648_8237748583693025280_o.jpg?_nc_cat=101&_nc_sid=dd7718&_nc_eui2=AeHxmY_29KPXRuv7mmYKkQG8tNQVkwMBCI601BWTAwEIjokQcZ_iHmVE6brUR_o1jpetPnQXGFHUlP--ETZcnhS7&_nc_ohc=tXnFiMEc4mgAX8Ty-B6&_nc_ht=scontent.fbog2-1.fna&_nc_tp=6&oh=c87514a6de76d4a86d46fea80f7c83bf&oe=5EE0B2C7',
  'https://pps.whatsapp.net/v/t61.24694-24/95090693_653973981846514_737736060880437560_n.jpg?oe=5EC0E25C&oh=11e8d4ed40242782f3ba75e86be2d40c'
];

   /**
    * Funcion para cambiar la imagen
    */
   function rotarImagenes()
   {
       // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
       var index=Math.floor((Math.random()*imagenes.length));
 
       // cambiamos la imagen
       document.getElementById("img").src=imagenes[index];
   }
   
   /**
    * Función que se ejecuta una vez cargada la página
    */
   onload=function()
   {
       // Cargamos una imagen aleatoria
       rotarImagenes();
       
 
       // Indicamos que cada 5 segundos cambie la imagen
       setInterval(rotarImagenes,20000);
   }