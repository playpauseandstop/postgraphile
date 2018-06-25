.PHONY: build install release run test

build: .install
	npm pack

clean:
	rm *.tgz

install: .install
.install: package.json package-lock.json
	npm install
	touch $@

package-lock.json: package.json
	npm install

release: .install
	npm publish

run: .install
	scripts/dev

test: .install
	scripts/test
