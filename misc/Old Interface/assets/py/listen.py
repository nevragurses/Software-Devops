import http.server
import socketserver
PORT = 8081
class MainHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('content-length'))
        body = self.rfile.read(length)
        self.send_response(200)
        self.end_headers()
        self.wfile.write(body)
        print (body )

Handler = MainHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print("serving at port", PORT)
httpd.serve_forever()