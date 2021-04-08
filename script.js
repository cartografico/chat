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

    }
    
});


