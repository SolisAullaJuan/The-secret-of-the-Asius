
//Search books
function list(){
    $.ajax({
        url:"http://localhost:3001/api/reg-events",
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
                                fila += "<td>"+ book.titulo +"</td>"
                                fila += "<td >"+ book.descripcion +"</td>"
                                fila += "<td>"+ book.fecha +"</td>"
                                fila += "<td>"+ book.ubicacion +"</td>"
                                fila += "<td>"+ book.invitados +"</td>"
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
        url:"http://localhost:3001/api/reg-events/save",
        type:"POST",
        data: {
            numero: $("#txtNumero").val(),
            titulo: $("#txtEvento").val(),
            descripcion: $("#txtDescripcion").val(),
            fecha: $("#txtFecha").val(),
            ubicacion: $("#txtUbicacion").val(),
            invitados: $("#txtInvitados").val(),
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
$("#txtEvento").val(""),
$("#txtDescripcion").val(""),
$("#txtFecha").val(""),
$("#txtUbicacion").val(""),
$("#txtInvitados").val(""),
$("#txtAnexo").val("")
}

function find(numero){
    $.ajax({
        url:'http://localhost:3001/api/reg-events/' + numero,
        type:"GET",
        success: function(answer){
            console.log(answer);
            var books = answer.book;
            $("#txtNumero").val(books.numero ),
            $("#txtEvento").val(books.titulo),
            $("#txtDescripcion").val(books.descripcion),
            $("#txtFecha").val(books.fecha),
            $("#txtUbicacion").val(books.ubicacion),
            $("#txtInvitados").val(books.invitados),
            $("#txtAnexo").val(books.anexo)
        }
    });
}