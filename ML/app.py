from flask import Flask, request, jsonify
import pickle
import numpy as np
from spider import trade_spider


app = Flask(__name__)


def load_model():
	pkl_filename = "forest.pkl"
	with open(pkl_filename, 'rb') as file:
		pickle_model = pickle.load(file)

	return pickle_model
  
@app.route("/", methods=["GET", "POST"])
def index():
	return {"Home_Page" : "Temporary placeholder"}

@app.route("/model", methods=["GET", "POST"])
def model_infer():
	data = request.json
	print(data)
	value = list([list(data['input'])])
	output = model.predict(value)
	return {"output" : output}

@app.route("/spider", methods=["GET", "POST"])
def spider():
	output = trade_spider()
	return jsonify(output)

if __name__ == "__main__":
	model = load_model()
	app.run(debug=True)
