window.onload;{
    
//Texto de Opinión parpadeando
var estado = true;
        setTimeout("verOpinion()", 450);
        function verOpinion() {
            estado = !estado;
            if (estado == true)
                texto1.style.visibility = "visible";
            else texto1.style.visibility = "hidden";
            setTimeout("verOpinion()", 450);
        } 



}
function clickTitulo(){
    console.log("Click en-> titulo (realizado)");
    
}
const titulo1=document.getElementById("tituloPagina");
titulo1.addEventListener("click",clickTitulo);


//Validar email
/*
<input type="button" value="Abrir" onclick="window.open('direccion')" />
    <center>
        <div class="n">
            <p> <b>
                    <font color="#000000" face="georgia" size="4">
                        <marquee width="400" scrollamount="5" bgcolor="#FFFFFF">Bienvenido!!</marquee>
                    </font>
                </b></p>
    </center>

    <!--Formulario para rellenar y implementar mejoras en la web-->
    <h2 id="texto1" style="visibility:visible">
        <font face="Arial, Helvetica,  sans-serif size=" 3">Tu opinión cuenta</font>
    </h2>
    <p>Escriba los aspectos que considerarias mejorar en la web así como posibles circuitos que aún no hemos
        añadido.
    </p>


    function validateEmailAddress(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}
function validate() {
$("#result").text("");
var emailaddress = $("#email").val();
if (validateEmailAddress(emailaddress)) {
$("#result").text(emailaddress + " is valid :)");
$("#result").css("color", "green");
} else {
$("#result").text(emailaddress + " is not correct, please retry:(");
$("#result").css("color", "red");
}
return false;
}
$("#validate").bind("click", validate);
*/