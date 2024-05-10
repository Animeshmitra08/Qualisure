from flask import Flask, request , jsonify, json
import urllib.request
from werkzeug.utils import  secure_filename
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

#allowed extension..........................
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg',
                          'doc', 'docx'])


#for checking allowed extension....... 
def allowedFile(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


#landing route...................................
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


#upload route.....................................
@app.route("/upload", methods=['POST'])
def upload_file():
    # check if the post request has the file part if 'files[]' not in request.files:
    if'files[]' not in request.files:
        resp = jsonify({
            "message": 'No file part in the request', 
            "status": 'failed'
        })        
        resp.status_code = 400
        return resp
    
    files = request.files.getlist('files[]')

    errors = {}
    success = False

    for file in files:
        if file and allowedFile(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            success = True
        else:
            resp = jsonify({
                "message":'file type not allowed',
                "status":'failed'
            })
            return resp
        
    if success and errors:
        errors['message'] = "file's uploaded successfully"
        errors['status'] = "failed"
        resp = jsonify(errors)
        resp.status_code = 500
        return resp
    
    if success:
        resp = jsonify({
            "message":'file uploaded successfully',
            "status":'success'
        })
        resp.status_code = 201
        return resp
    else:
        resp = jsonify(errors)
        resp.status_code = 500
        return resp
    
    