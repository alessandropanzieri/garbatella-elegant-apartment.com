from config import lang
from flask import (
    Flask,
    session,
    request,
    redirect,
    send_file,
    render_template
)

app = Flask(__name__)
app.secret_key = "key"

@app.route("/", methods = ["GET", "POST"])
def index():
    if request.method == "POST":
        session["lang"] = request.form.get("lang")

    return render_template(
        "index.html",
        lang = iter(lang[session.get("lang", request.accept_languages.best_match(lang.keys()))][0]),
        next = next
    )

@app.route("/book", methods = ["GET", "POST"])
def book():
    if request.method == "POST":
        session["lang"] = request.form.get("lang")

    return render_template(
        "book.html",
        lang = iter(lang[session.get("lang", request.accept_languages.best_match(lang.keys()))][1]),
        next = next
    )

@app.route("/robots")
def robots():
    return send_file("robots.txt")

@app.route("/sitemap")
def sitemaps():
    return send_file("sitemap.txt")

@app.errorhandler(404)
@app.errorhandler(405)
def error(_):
    return redirect("/")

if __name__ == "__main__": app.run(debug = True)