(function(){
    let senderID;
    const socket = io();
    
    function generateID(){
        return `${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}`;
    }
    document.querySelector("#receiver-start-con-btn").addEventListener("click", function(){
        senderID = document.querySelector("#join-id").Value;
        if(senderID.length == 0){
            return;
        }
    let joinID = generateID();
  
       socket.emit("receiver-join", { 
           uid:joinID,
           sender_uid:senderID
       })
     
       document.querySelector(".join-screen").classList.remove("active");
       document.querySelector(".fs-screen").classList.add("active");
    });


  

    })();