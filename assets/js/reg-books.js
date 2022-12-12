
//Search books
function list(){
    $.ajax({
        url:"http://localhost:3001/api/reg-books",
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
                                fila += "<td>"+ book.nombre +"</td>"
                                fila += "<td >"+ book.imagen +"</td>"
                                fila += "<td>"+ book.autor +"</td>"
                                fila += "<td>"+ book.editorial +"</td>"
                                fila += "<td>"+ book.publicacion +"</td>"
                                fila += "<td>"+ book.paginas +"</td>"
                                fila += "<td>"+ book.formato +"</td>"
                                fila += "<td>"+ book.isbn +"</td>"
                                fila += "<td>"+ book.genero +"</td>"
                                fila += "<td>"+ book.categoria +"</td>"
                                fila += "<td>"+ book.documento +"</td>"
                                fila += "<td>"+ book.idioma +"</td>"
                                fila += "<td>"+ book.costo +"</td>"
                                fila += "<td>"+ book.estado +"</td>"  // ' '
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
        url:"http://localhost:3001/api/reg-books/save",
        type:"POST",
        data: {
            numero: $("#txtNumero").val(),
            nombre: $("#txtNombre").val(),
            imagen: $("#txtImagen").val(),
            autor: $("#txtAutor").val(),
            editorial: $("#txtEditorial").val(),
            publicacion: $("#txtPublicacion").val(),
            paginas: $("#txtPaginas").val(),
            formato: $("#txtFormato").val(),
            isbn: $("#txtIsbn").val(),
            genero: $("#txtGenero").val(),
            categoria: $("#txtCategoria").val(),
            documento: $("#txtDocumento").val(),
            idioma: $("#txtIdioma").val(),
            costo: $("#txtCosto").val(),
            estado: $("#txtEstado").val(),
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
$("#txtImagen").val(""),
$("#txtAutor").val(""),
$("#txtEditorial").val(""),
$("#txtPublicacion").val(""),
$("#txtPaginas").val(""),
$("#txtFormato").val(""),
$("#txtIsbn").val(""),
 $("#txtGenero").val(""),
 $("#txtCategoria").val(""),
$("#txtDocumento").val(""),
$("#txtIdioma").val(""),
$("#txtCosto").val(""),
$("#txtEstado").val("")
}

function find(numero){
    $.ajax({
        url:'http://localhost:3001/api/reg-books/' + numero,
        type:"GET",
        success: function(answer){
            console.log(answer);
            var books = answer.book;
            $("#txtNumero").val(books.numero ),
            $("#txtNombre").val(books.nombre),
            $("#txtImagen").val(books.imagen),
            $("#txtAutor").val(books.autor),
            $("#txtEditorial").val(books.editorial),
            $("#txtPublicacion").val(books.publicacion),
            $("#txtPaginas").val(books.paginas),
            $("#txtFormato").val(books.formato),
            $("#txtIsbn").val(books.isbn),
            $("#txtGenero").val(books.genero),
            $("#txtCategoria").val(books.categoria),
            $("#txtDocumento").val(books.documento ),
            $("#txtIdioma").val(books.idioma),
            $("#txtCosto").val(books.costo),
            $("#txtEstado").val(books.estado)

        }

    });
}