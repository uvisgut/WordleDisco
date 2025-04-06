function startGame(){
    let difficulty = document.getElementById("difficulty").value;
    //console.log(difficulty);

    if(difficulty >= 1 && difficulty <= 5){//send to next page
        window.localStorage.setItem("diff", difficulty);
        window.location.href = 'wrdl.html';
    }
    else {//error
        document.getElementById("difficultyError").innerHTML = "Ievadītā vērtība nav pieņemta";
    }
}
