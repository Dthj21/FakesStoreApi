var url = "http://localhost:3300/api/users";

function postProducto() {
	console.log(url);
	var myNombre = $('#nombre').val();
	var myPrecio = $('#precio').val();
	var myDescripcion = $('#descripcion').val();
	var myUrl = $('#url').val();

	var myProducto = {
		nombre: myNombre,
		precio: myPrecio,
		descripcion: myDescripcion,
		url: myUrl
	};
	console.log(myProducto);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
			$('#resultado').html(JSON.stringify(data.user));
		},
		data: JSON.stringify(myProducto)
	});
}

function getProducto() {
	console.log(url);

	$.getJSON(url,
		function(json) {
			console.log(json);

			var arrUsers = json.users;

			var htmlTableUsers = '<table border="1">';

			arrUsers.forEach(function(item) {
				console.log(item);
				htmlTableUsers += '<tr>' +
					'<td>' + item.id + '</td>' +
					'<td>' + item.nombre + '</td>' +
					'<td>' + item.precio + '</td>' +
					'<td>' + item.descripcion + '</td>' +
					'<td>' + item.url + '</td>' +
					'</tr>';
			});

			htmlTableUsers += '</table>';

			$('#resultado').html(htmlTableUsers);

		}
	);
}


