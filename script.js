
//Para el envio del mensaje

    $("form").on("submit",function (e) {
        e.preventDefault();

        const inputValue = $('.messageBox').val()
        //Arreglo para mensajes

const arrayMsg=[
    {
    user:"Thomas Anderson",
     pic:"url",
    time: "14:30",
    text:inputValue,
    }
];


//Imprimir mensajes
const msgContainer = document.querySelector(".msgBox");

function printMessage(){
    arrayMsg.forEach(element => {
        msgContainer.innerHTML +=`<div class"msgBox"></div>`;
    }
)};

printMessage();


});


