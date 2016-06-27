BUILD_DIR = build
NPM = npm
BIN = node_modules/.bin
TYPINGS = $(BIN)/typings
TSC = $(BIN)/tsc
BABEL = $(BIN)/babel
GULP = $(BIN)/gulp
TSLINT = $(BIN)/tslint
SRC = $(shell find src -name '*.ts' | sort)

.PHONY: build
build: clean
	$(GULP) build

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)/*

.PHONY: watch
watch:
	$(GULP) watch

.PHONY: setup
setup:
	$(NPM) install
	$(TYPINGS) install

.PHONY: lint
lint: $(SRC)
	@$(TSLINT) -- $^
