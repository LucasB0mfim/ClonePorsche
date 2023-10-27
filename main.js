$(document).ready(function() {
    $("#closeModal").click(function() {
        $(".modal").animate({
            width: "hide"
        });
        // função usada para esperar um tempo antes de começar
        setTimeout(function(){
            $(".modal").modal("hide");
        }, 600); 
    });
    $(".carros").click(function() {
        $("#carros").show();
        $("#aconselhamento").hide();
        $("#servicos").hide();
        $("#experiencia").hide();
        $("#porscheCenter").hide();
        $(".carros h2").addClass("marcado");
        $(".aconselhamento h2").removeClass("marcado");
        $(".servicos h2").removeClass("marcado");
        $(".experiencia h2").removeClass("marcado");
        $(".porscheCenter h2").removeClass("marcado");
    });
    $(".aconselhamento").click(function() {
        $("#aconselhamento").show();
        $("#carros").hide();
        $("#servicos").hide();
        $("#experiencia").hide();
        $("#porscheCenter").hide();
        $(".aconselhamento h2").addClass("marcado");
        $(".carros h2").removeClass("marcado");
        $(".servicos h2").removeClass("marcado");
        $(".experiencia h2").removeClass("marcado");
        $(".porscheCenter h2").removeClass("marcado");
    });
    $(".servicos").click(function() {
        $("#servicos").show();
        $("#carros").hide();
        $("#aconselhamento").hide();
        $("#experiencia").hide();
        $("#porscheCenter").hide();
        $(".servicos h2").addClass("marcado");
        $(".carros h2").removeClass("marcado");
        $(".aconselhamento h2").removeClass("marcado");
        $(".experiencia h2").removeClass("marcado");
        $(".porscheCenter h2").removeClass("marcado");
    });
    $(".experiencia").click(function() {
        $("#experiencia").show();
        $("#carros").hide();
        $("#aconselhamento").hide();
        $("#servicos").hide();
        $("#porscheCenter").hide();
        $(".experiencia h2").addClass("marcado");
        $(".carros h2").removeClass("marcado");
        $(".aconselhamento h2").removeClass("marcado");
        $(".servicos h2").removeClass("marcado");
        $(".porscheCenter h2").removeClass("marcado");
    });
    $(".porscheCenter").click(function() {
        $("#porscheCenter").show();
        $("#carros").hide();
        $("#aconselhamento").hide();
        $("#servicos").hide();
        $("#experiencia").hide();
        $(".porscheCenter h2").addClass("marcado");
        $(".carros h2").removeClass("marcado");
        $(".aconselhamento h2").removeClass("marcado");
        $(".servicos h2").removeClass("marcado");
        $(".experiencia h2").removeClass("marcado");
        
    });
    $("#cpf").mask("00000-000");
    $("#localizacao").click(function() {
        alert("Erro no sistema! Reinicie o site...")
    });
    $("#encontreSeuPorsche").mask("00000-000")
});