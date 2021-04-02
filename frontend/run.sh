WEB_PORT=8000 
export FLASK_APP=frontend.py
export FLASK_ENV=development
export FLASK_DEBUG=1

# start the server 
flask run --host=0.0.0.0 --port=$WEB_PORT 