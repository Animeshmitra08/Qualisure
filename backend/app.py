import firebase_admin
from firebase_admin import credentials, storage
from flask import Flask, jsonify
import numpy as np
import cv2

app = Flask(__name__)

# Initialize Firebase Admin SDK with service account credentials
cred = credentials.Certificate(r'D:\New folder (2)\4th yr\Qualisure\backend\firebasestoragekey\privatekey.json')
firebase_admin.initialize_app(cred, {
    'storageBucket': 'qualisure-3edce.appspot.com'
})


# Route to check files from Firebase Storage
@app.route('/firebase/files')
def list_files():
    bucket = storage.bucket()
    blobs = bucket.list_blobs()
    
    file_list = [blob.name for blob in blobs]
    return file_list
# bucket = storage.bucket()
# blobs = bucket.get_blob("WhatsApp Image 2024-05-07 at 09.33.58_f4a47262.jpg")
# # file_list = [blob.name for blob in blobs]
# arr = np.frombuffer(blobs.download_as_string(), np.uint8)
# img = cv2.imdecode(arr, cv2.COLOR_BGR2BGR5555)

# cv2.imshow('image', img)
# cv2.waitKey(0)


if __name__ == '__main__':
    app.run(debug=True)