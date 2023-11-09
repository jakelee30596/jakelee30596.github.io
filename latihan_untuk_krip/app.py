from flask import Flask , render_template
app= Flask(__name__)

@app.route('/')
def five():
    return render_template('five.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/tambah')
def tambah():
    return render_template('tambah.html')

@app.route('/list')
def list():
    return render_template('list.html')

if __name__=="__main__":
    app.run(debug=True)