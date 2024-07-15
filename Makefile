# Variables

# MSG AUTOMATIQUE (VOUS POUVEZ LE CHANGER PAR CE QUE VOUS SOUHAITER)
COMMIT_MSG = Mise à jour automatique

#	!!!!!! CHANGER LE NOM DE LA BRANCHE !!!!!!
BRANCH = ajoutMakeFile

# Règles
all: commit push

add:
	git add .

commit: add
	git commit -m "$(COMMIT_MSG)"

push: commit
	git push origin $(BRANCH)

# Nettoyer (optionnel)
clean:
	rm -f *~

.PHONY: all add commit push clean
