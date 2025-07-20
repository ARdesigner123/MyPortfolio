from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)

MODEL_MAP = {
    "cartoon hero character": {
        "zip": "https://raw.githubusercontent.com/ARdesigner123/3dmodels/main/cartoon-hero.zip",
        "preview": "https://raw.githubusercontent.com/ARdesigner123/3dmodels/main/cartoon-hero.glb"
    },
    "sci-fi rifle": {
        "zip": "https://raw.githubusercontent.com/ARdesigner123/3dmodels/main/sci-fi-rifle.zip",
        "preview": "https://raw.githubusercontent.com/ARdesigner123/3dmodels/main/sci-fi-rifle.glb"
    }
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '').lower().strip()
    model = MODEL_MAP.get(prompt)
    if model:
        return jsonify(model)
    return jsonify({}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5050)