function startGame(){
    let difficulty = document.getElementById("difficulty").value;
    //console.log(difficulty);

    if(difficulty >= 1 && difficulty <= 5){//send to next page
        localStorage.setItem("difficulty", difficulty);
        window.location.href = 'index.html';
    }
    else {//error
        document.getElementById("difficultyError").innerHTML = "Ievadītā vērtība nav pieņemta";
    }
}