# Variables

# MSG AUTOMATIQUE (VOUS POUVEZ LE CHANGER PAR CE QUE VOUS SOUHAITER)
# message ?= $(shell bash -c 'read -p "Username: " username; echo $$username')
DESC = $(shell read -p "Entrez une description: " desc; echo $$desc)
#	!!!!!! CHANGER LE NOM DE LA BRANCHE !!!!!!
BRANCH = $(git branch --show-current)

# Règles
all: commit push


add:
	git add .

commit: add
	git commit -m "$(DESC)"

push: commit
	git push origin $(BRANCH)

# Nettoyer (optionnel)
clean:
	rm -f *~

.PHONY: all add commit push clean
