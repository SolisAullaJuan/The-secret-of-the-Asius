
//Search books
function list(){
    $.ajax({
        url:"http://localhost:3001/api/reg-complain-sale",
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
                                fila += "<td>"+ book.nombrecliente +"</td>"
                                fila += "<td >"+ book.libro +"</td>"
                                fila += "<td>"+ book.autor +"</td>"
                                fila += "<td>"+ book.isbn +"</td>"
                                fila += "<td>"+ book.codcompra +"</td>"
                                fila += "<td>"+ book.fecha +"</td>"
                                fila += "<td>"+ book.queja +"</td>"
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
        url:"http://localhost:3001/api/reg-complain-sale/save",
        type:"POST",
        data: {
            numero: $("#txtNumero").val(),
            nombrecliente: $("#txtCliente").val(),
            libro: $("#txtLibro").val(),
            autor: $("#txtAutor").val(),
            isbn: $("#txtIsbn").val(),
            codcompra: $("#txtCodigo").val(),
            fecha: $("#txtFecha").val(),
            queja: $("#txtQueja").val(),
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
$("#txtCliente").val(""),
$("#txtLibro").val(""),
$("#txtAutor").val(""),
$("#txtIsbn").val(""),
$("#txtCodigo").val(""),
$("#txtFecha").val(""),
$("#txtQueja").val(""),
$("#txtAnexo").val("")
}

function find(numero){
    $.ajax({
        url:'http://localhost:3001/api/reg-complain-sale/' + numero,
        type:"GET",
        success: function(answer){
            console.log(answer);
            var books = answer.book;
            $("#txtNumero").val(books.numero ),
            $("#txtCliente").val(books.nombrecliente),
            $("#txtLibro").val(books.libro),
            $("#txtAutor").val(books.autor),
            $("#txtIsbn").val(books.isbn),
            $("#txtCodigo").val(books.codcompra),
            $("#txtCategoria").val(books.fecha),
            $("#txtQueja").val(books.queja ),
            $("#txtAnexo").val(books.anexo)


        }

    });
}