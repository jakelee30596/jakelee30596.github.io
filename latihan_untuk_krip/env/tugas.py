from flask import Flask , render_template
app= Flask(__name__)

@app.route('/')
def five():
    return render_template('index.html')

@app.route('/login')
def about():
    return render_template('about.html')

@app.route('/tambah')
def project():
    return render_template('project.html')

@app.route('/list')
def contact():
    return render_template('contact.html')

if __name__=="__main__":
    app.run(debug=True)