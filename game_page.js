
player1Name = localStorage.getItem("jogador1");
player2Name = localStorage.getItem("jogador2");

player1_score = 0;
player2_score = 0;

question_turn = "player1";
answer_turn = "player2";

function initialize(){
    loadPlayerNames();
    loadWhosTurnItIs(false);
}

function loadPlayerNames(){
    document.getElementById("NomeJogador1").innerHTML = player1Name;
    document.getElementById("NomeJogador2").innerHTML = player2Name;
}

function loadWhosTurnItIs(toggle){
    if(question_turn == "player1")
    {
        if(toggle){
            question_turn = "player2";
            answer_turn = "player1";

            document.getElementById("question").innerHTML = "turno de pergunta - " + player2Name;
        } else {
            document.getElementById("question").innerHTML = "turno de pergunta - " + player1Name;
        }
    }
    else
    {
        if(toggle){
            question_turn = "player1";
            answer_turn = "player2";

            document.getElementById("question").innerHTML = "turno de pergunta - " + player1Name;
        } else {
            document.getElementById("question").innerHTML = "turno de pergunta - " + player2Name;
        }
    }
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='btn btn-btn' onclick='check()'>Checar</button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {

    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {

        if (answer_turn == "player1") {

            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        } 
    }

    loadWhosTurnItIs(true);
}