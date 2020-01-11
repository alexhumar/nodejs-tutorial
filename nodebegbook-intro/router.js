function route(pathname, handle, response, request) {
    console.log("Por rutear un requerimiento para " + pathname);

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No se encontró un manejador para la ruta " + pathname);
        
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("No se encontró un manejador para la ruta " + pathname);
        response.end();
    }
}

exports.route = route;