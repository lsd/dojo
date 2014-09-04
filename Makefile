ci:
	- $(MAKE) -C ./js ci
	- $(MAKE) -C ./php ci

install:
	- $(MAKE) -C ./js install
	- $(MAKE) -C ./php install

test:
	- $(MAKE) -C ./js test
	- $(MAKE) -C ./php test
