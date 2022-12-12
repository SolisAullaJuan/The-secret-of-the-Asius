
//Search books
function list(){
    $.ajax({
        url:"http://localhost:3001/api/reg-claims-suggestion",
        type:"GET",
        success: function(answer){
            console.log(answer);
                var fila = "";
                var tabla = answer.inventory;
                    if(tabla.length > 0){
                        for (const i in tabla){
                            var book = tabla[i];
                                fila += "<tr>";
                                fila += "<td>"+ book.numero +"</td>"
                                fila += "<td>"+ book.correo +"</td>"
                                fila += "<td >"+ book.quesug +"</td>"
                                fila += "<td>"+ book.anexo +"</td>"
                                fila += "<td>"+
                                        "<button type='button'  data-bs-toggle='offcanvas' data-bs-target='#demo' class='btn btn-danger'onclick='find("+
                                        + book.numero +")' >Edit</button>"+"</td>";
                                fila += "</tr>";
                        }
                        document.getElementById("books").innerHTML = fila;
                    }

            }
    });
}

function save(){
    $.ajax({
        url:"http://localhost:3001/api/reg-claims-suggestion/save",
        type:"POST",
        data: {
            numero: $("#txtNumero").val(),
            correo: $("#txtCorreo").val(),
            quesug: $("#txtComentario").val(),
            anexo: $("#txtAnexo").val(),
        },
        success:function(answer){
            console.log(answer);
            list();
        }
    });
}

function limpiar(){
$("#txtNumero").val(0),
$("#txtCorreo").val(""),
$("#txtComentario").val(""),
$("#txtAnexo").val("")
}

function find(numero){
    $.ajax({
        url:'http://localhost:3001/api/reg-claims-suggestion/' + numero,
        type:"GET",
        success: function(answer){
            console.log(answer);
            var books = answer.book;
            $("#txtNumero").val(books.numero ),
            $("#txtCorreo").val(books.correo),
            $("#txtComentario").val(books.quesug),
            $("#txtAnexo").val(books.anexo)


        }

    });
}