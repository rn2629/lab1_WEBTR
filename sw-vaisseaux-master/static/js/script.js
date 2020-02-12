

function generateurInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(generateurInt(3));


$("#buttonV").click(function() {
    $.get("https://swapi.co/api/starships/" + generateurInt(72), function (donnees, status)
    {
        console.log(donnees) ;
        $("#nomV").text((donnees.name));
        $("#modelV").text((donnees.model));
        $("#classV").text((donnees.starship_class));
        $("#fabV").text((donnees.manufacturer));
        $("#coutV").text(donnees.cost_in_credits);
        $("#tailleV").text(donnees.length);
        $("#membresV").text(donnees.crew);
        $("#nombresPV").text(donnees.passengers);
        donnees.films.forEach(function (item,index) {
            $.get(item, loadFilms)

        });

  });
    
});

function loadPilots(donnees, status) {

    console.log(donnees);

}

function loadFilms(donnees, status) {

    console.log(donnees);
    $("#t1").text((donnees.title));
    $("#di1").text((donnees.director));
    $("#da1").text((donnees.release_date));
    $("#t2").text((donnees.title));
    $("#di2").text((donnees.director));
    $("#da2").text((donnees.release_date));
    $("#t3").text((donnees.title));
    $("#di3").text((donnees.director));
    $("#da3").text((donnees.release_date));
    $("#t4").text((donnees.title));
    $("#di4").text((donnees.director));
    $("#da4").text((donnees.release_date));
    donnees.films.forEach(function (item,index) {
        $.get(item, loadFilms)
    });

}

function monToast() {
    alert("Données Recuperées avec succes");


}