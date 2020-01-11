function start_view() {
    return  '<html>' + '<head>' +
            '<meta http-equiv="Content-Type" content="text/html" ' +
            'charset="UTF-8" />' + '</head>' + '<body>' +
            '<form action="/upload" enctype="multipart/form-data" method="post">' +
            '<input type="file" name="upload" />' +
            '<input type="submit" value="Subir archivo" />' +
            '</form>' + '</body>' + '</html>';
}

function upload_view() {
    return "Hola Upload!";
}

exports.start_view = start_view;
exports.upload_view = upload_view;