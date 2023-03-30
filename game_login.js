function addUser()
{
    var jogador1 = document.getElementById("NomeJogador1").value;
    var jogador2 = document.getElementById("NomeJogador2").value;

    localStorage.setItem("jogador1", jogador1);
    localStorage.setItem("jogador2", jogador2);

    window.location = "game_page.html";
}