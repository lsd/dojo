ci:
	- $(MAKE) -C ./js ci
	- $(MAKE) -C ./php ci
	- $(MAKE) -C ./ruby ci

install:
	- $(MAKE) -C ./js install
	- $(MAKE) -C ./php install
	- $(MAKE) -C ./ruby install

test:
	- $(MAKE) -C ./js test
	- $(MAKE) -C ./php test
	- $(MAKE) -C ./ruby test
