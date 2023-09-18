from secrets import token_hex
from config import lang
from flask import (
    g,
    Flask,
    session,
    request,
    redirect,
    send_file,
    render_template
)

app = Flask(__name__)
app.secret_key = token_hex(16)
app.template_folder = "templates/min"

@app.before_request
def before_request():
    g.lang = lang[session.get("lang", request.accept_languages.best_match(lang.keys(), default = "EN"))]["index"]

@app.get("/")
def index():
    return render_template("index.min.html", lang = g.lang)

@app.get("/book-holiday-home")
def book_holiday_home():
    return render_template("book-holiday-home.min.html", lang = g.lang)

@app.get("/tourist-tax-payment")
def tourist_tax_payment():
    return render_template("tourist-tax-payment.min.html", lang = g.lang)

@app.post("/")
@app.post("/book-holiday-home")
@app.post("/tourist-tax-payment")
def _():
    session["lang"] = request.form.get("lang")
    return redirect(request.referrer)

@app.get("/robots.txt")
def robots():
    return send_file("robots.txt")

@app.get("/sitemap.xml")
def sitemap():
    return send_file("sitemap.xml")

@app.errorhandler(404)
@app.errorhandler(405)
def error(_):
    return redirect("/")

if __name__ == "__main__": app.run(debug = True)