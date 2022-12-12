
//Search books
function list(){
    $.ajax({
        url:"http://localhost:3001/api/reg-sales",
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
                                fila += "<td>"+ book.cliente +"</td>"
                                fila += "<td >"+ book.libro +"</td>"
                                fila += "<td>"+ book.isbn +"</td>"
                                fila += "<td>"+ book.formato +"</td>"
                                fila += "<td>"+ book.fecha +"</td>"
                                fila += "<td>"+ book.dni +"</td>"
                                fila += "<td>"+ book.tarjeta +"</td>"
                                fila += "<td>"+ book.direccion +"</td>"
                                fila += "<td>"+ book.cantidad +"</td>"
                                fila += "<td>"+ book.unitario +"</td>"
                                fila += "<td>"+ book.total +"</td>" // ' '
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
        url:"http://localhost:3001/api/reg-sales/save",
        type:"POST",
        data: {
            numero: $("#txtNumero").val(),
            cliente: $("#txtNombre").val(),
            libro: $("#txtLibro").val(),
            isbn: $("#txtIsbn").val(),
            formato: $("#txtFormato").val(),
            fecha: $("#txtFecha").val(),
            dni: $("#txtDni").val(),
            tarjeta: $("#txtTarjeta").val(),
            direccion: $("#txtDirrecion").val(),
            cantidad: $("#txtCantidad").val(),
            unitario: $("#txtUnitario").val(),
            total: $("#txtTotal").val(),

        },
        success:function(answer){
            console.log(answer);
            list();
        }
    });
}

function limpiar(){
$("#txtNumero").val(0),
$("#txtNombre").val(""),
$("#txtLibro").val(""),
$("#txtIsbn").val(""),
$("#txtFormato").val(""),
$("#txtFecha").val(""),
$("#txtDni").val(""),
$("#txtTarjeta").val(""),
$("#txtDirrecion").val(""),
 $("#txtCantidad").val(""),
 $("#txtUnitario").val("").
 $("#txtTotal").val("")
}

function find(numero){
    $.ajax({
        url:'http://localhost:3001/api/reg-sales/' + numero,
        type:"GET",
        success: function(answer){
            console.log(answer);
            var books = answer.book;
            $("#txtNumero").val(books.numero ),
            $("#txtNombre").val(books.cliente ),
            $("#txtLibro").val(books.libro),
            $("#txtIsbn").val(books.isbn),
            $("#txtFormato").val(books.formato),
            $("#txtFecha").val(books.fecha),
            $("#txtDni").val(books.dni),
            $("#txtTarjeta").val(books.tarjeta),
            $("#txtDirrecion").val(books.direccion),
            $("#txtCantidad").val(books.cantidad),
            $("#txtUnitario").val(books.unitario),
            $("#txtTotal").val(books.total)


        }

    });
}