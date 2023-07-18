from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

con = sqlite3.connect('Beetle.db')
cur = con.cursor()

def getbeetles():
    cur.execute('select * from beetles;')
    return cur.fetchall

@app.route('/shop.html')
def shop():
    beetles = getbeetles()
    return render_template('shop.html', beetles=beetles)

if __name__ == '__main__':
    app.run(debug=True)

