

@app.route("/quote")
def quote():
    url = "http://download.finance.yahoo.com/d/quotes.csv?f=snl1&s={}".format(request.args.get("symbol"))
    webpage = urllib.request.urlopen(url)
    datareader = csv.reader(webpage.read().decode("utf-8").splitlines())
    row = next(datareader)
    return jsonify({"name": row[1], "price": float(row[2]), "symbol": row[0].upper()})

@app.route("/register")
def register():
    return render_template("register.html")