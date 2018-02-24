git clone https://github.com/0xc0defeed/django-webpack-vue-starter.git
cd django-webpack-vue-starter/

python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver

cd app/apps/frontend/
npm install
npm run dev

Starting development server at http://127.0.0.1:8000/