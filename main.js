var nombre_alumno_array=[];
function submit(){
    var ver_alumno_array = [];
    for (var j =1; j<=4; j++){
var nombre_alumno =document.getElementById("nombre_alumno_"+j).value;
nombre_alumno_array.push(nombre_alumno);
        }
        var longuitud=nombre_alumno_array.length;
        for(var k=0; k<longuitud;k++){
            ver_alumno_array.push("<h4>:Nombre"+nombre_alumno_array[k]+"</h4>");
            }
            document.getElementById("mostrar_nombres_con_comas").innerHTML=ver_alumno_array;
            var remover=ver_alumno_array.join(" ");
            document.getElementById("mostrar_nombre_sin_comas").innerHTML=remover;
            document.getElementById("botón_enviar").style.display="none";
            document.getElementById("botón_ordenar").style.display="inline-block";


}
function sorting(){
nombre_alumno_array.sort();
var display=[];
var longuitud2=nombre_alumno_array.length;
for(var k=0; k<longuitud;k++){
            ver_alumno_array.push("<h4>:Nombre"+nombre_alumno_array[k]+"</h4>");
            ver_alumno_array.push("<h4>:Nombre"+nombre_alumno_array[k]+"</h4>");
            display.push("<h4>Nombre:"+nombre_alumno_array[k])+"</h4>";
            }
    var remover2=display.join(" ");
    document.getElementById("mostrar_nombres_sin_comas"),innerHTML=remover2;
    }