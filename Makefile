.PHONY: clean
.DEFAULT_GOAL := build

clean:
	rm -rf app.js app.js.*

build: app.js
	$(MAKE) run

run:
	node ./app.js

app.js:
	tsc
