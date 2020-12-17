//Para el envio del mensaje

$("form").on("submit", function (e) {
  e.preventDefault();

  let inputValue = $(".messageBox").val();
  if (inputValue.length > 0) {
    //Arreglo para mensajes

    const arrayMsg = [
        {
        user: "Thomas Anderson",
        pic: "url",
        time: "14:30",
        text: inputValue,
        },
    ];

    //Imprimir mensajes
    const msgContainer = $(".wrap");

    function printMessage() {
        arrayMsg.forEach((element) => {
            const msgFormat = `<div class="msgBox">
                                <div class="picUser"></div>
                                <div class="content">
                                    <div class="data">
                                        <div class="name">${element.user}</div>
                                        <div class="timeStamp"> 11:05</div>
                                    </div>
                                    <div class="text">${element.text}</div>
                                </div>
                            </div>`;

        msgContainer.append(msgFormat);
        });
    }

    printMessage();

    let = $(".messageBox").val("");

    } else {
        const msgContainer = $(".wrap");
        $.get("https://jsonplaceholder.typicode.com/comments", function (respuesta) {
            console.log(respuesta);

            respuesta.forEach((element) => {
                const msgFormat = `<div class="msgBox">
                                <div class="picUser"></div>
                                <div class="content">
                                    <div class="data">
                                        <div class="name">${element.name}</div>
                                        <div class="timeStamp"> 11:05</div>
                                </div>
                                <div class="text"> 
                                    ${element.body}
                                </div>
                            </div>
                        </div>`;
        
                msgContainer.append(msgFormat);
                });
        });
    }   
});


