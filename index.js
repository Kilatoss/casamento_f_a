let http = require("http");
let fs = require("fs");
let path = require("path"); // 👈 Precisamos do módulo 'path' para trabalhar com caminhos de ficheiros

http
  .createServer((request, response) => {
    // 1. Determinar o caminho do ficheiro solicitado
    let filePath = "." + request.url;
    
    // Se o URL for apenas '/', queremos servir 'index.html'
    if (filePath === "./") {
      filePath = "./index.html";
    }

    // 2. Determinar o tipo de conteúdo (MIME Type)
    let extname = path.extname(filePath);
    let contentType = "text/html"; // Padrão
    
    switch (extname) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "text/javascript";
        break;
      case ".png": // Adicione outros tipos de imagem conforme necessário (.jpg, .gif, etc.)
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpeg";
        break;
    }

    // 3. Ler e Servir o Ficheiro
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code == "ENOENT") {
          // Ficheiro não encontrado (404 Not Found)
          response.writeHead(404, { "Content-Type": "text/html" });
          response.end("<h1>404 File Not Found</h1>");
        } else {
          // Erro no servidor (500 Internal Server Error)
          response.writeHead(500);
          response.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
        }
      } else {
        // Sucesso: Enviar o conteúdo e o tipo correto
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });