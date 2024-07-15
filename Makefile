# Variables
COMMIT_MSG = Mise à jour automatique
BRANCH = dev

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
