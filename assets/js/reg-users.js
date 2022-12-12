
//Search books
function list(){
    $.ajax({
        url:"http://localhost:3001/api/reg-users",
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
                                fila += "<td>"+ book.username +"</td>"
                                fila += "<td >"+ book.password +"</td>"
                                fila += "<td>"+ book.imagen +"</td>"
                                fila += "<td>"+ book.nombres +"</td>"
                                fila += "<td>"+ book.apellidos +"</td>"
                                fila += "<td>"+ book.correo +"</td>"
                                fila += "<td>"+ book.telefono +"</td>"
                                fila += "<td>"+ book.pais +"</td>"
                                fila += "<td>"+ book.departamento +"</td>"
                                fila += "<td>"+ book.edad +"</td>" // ' '
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
        url:"http://localhost:3001/api/reg-users/save",
        type:"POST",
        data: {
            numero: $("#txtNumero").val(),
            username: $("#txtUsername").val(),
            password: $("#txtPassword").val(),
            imagen: $("#txtPerfil").val(),
            nombres: $("#txtNombre").val(),
            apellidos: $("#txtApellidos").val(),
            correo: $("#txtCorreo").val(),
            telefono: $("#txtTelefono").val(),
            pais: $("#txtPais").val(),
            departamento: $("#txtDepartamento").val(),
            edad: $("#txtEdad").val(),

        },
        success:function(answer){
            console.log(answer);
            list();
        }
    });
}

function limpiar(){
$("#txtNumero").val(0),
$("#txtUsername").val(""),
$("#txtPassword").val(""),
$("#txtPerfil").val(""),
$("#txtNombre").val(""),
$("#txtApellidos").val(""),
$("#txtCorreo").val(""),
$("#txtTelefono").val(""),
$("#txtPais").val(""),
 $("#txtDepartamento").val(""),
 $("#txtEdad").val("")
}

function find(numero){
    $.ajax({
        url:'http://localhost:3001/api/reg-users/' + numero,
        type:"GET",
        success: function(answer){
            console.log(answer);
            var books = answer.book;
            $("#txtNumero").val(books.numero ),
            $("#txtUsername").val(books.username),
            $("#txtPassword").val(books.password),
            $("#txtPerfil").val(books.imagen),
            $("#txtNombre").val(books.nombres),
            $("#txtApellidos").val(books.apellidos),
            $("#txtCorreo").val(books.correo),
            $("#txtTelefono").val(books.telefono),
            $("#txtPais").val(books.pais),
            $("#txtDepartamento").val(books.departamento),
            $("#txtEdad").val(books.edad)


        }

    });
}