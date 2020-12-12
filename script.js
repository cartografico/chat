
//Para el envio del mensaje


    $("form").on("submit",function (e) {
        e.preventDefault();

        const inputValue = $('.messageBox').val()

        let element = $(`<div class="msgBox">
        <div class="picUser"></div>
        <div class="content">
            <div class="data">
                <div class="name">Jhonny Menomnic</div>
                <div class="timeStamp"> 11:05</div>
            </div>
            <div class="text"> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa possimus earum ipsum optio? Earum, enim? Ab dolorem qui 
                architecto repellendus mollitia maiores culpa! Tempore modi natus harum ratione nisi vel.
            </div>
        </div>`);

        
        $(".wrap").append(element);
    

//Arreglo para mensajes

// const arrayMsg=[
//     {
//     user:"Thomas Anderson",
//      pic:"url",
//     time: "14:30",
//     text:inputValue,
//     }
// ];


// //Imprimir mensajes
// const msgContainer = document.querySelector(".msgBox");

// function printMessage(){
//     arrayMsg.forEach(element => {
//         msgContainer.innerHTML +=`<div class"msgBox"></div>`;
//     }
// )};

// printMessage();


});


