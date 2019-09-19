class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root=this.root) {
        const letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        } 
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

    insertIter(word, root=this.root) {
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!(letter in root.children)) {
                root.children[letter] = new Node();
            }
            if (i === word.length - 1) {
                root.children[letter].isTerminal = true;
            } else {
                root = root.children[letter];
            }
        }
    }

    searchRecur(word, root=this.root) {
        if (!word) return root.isTerminal;
        const letter = word[0];
        if (!(letter in root.children)) return false;
        return this.searchRecur(word.slice(1), root=root.children[letter]);
    }

    searchIter(word, root=this.root) {
        for (let i = 0; i <= word.length; i++) {
            if (i === word.length) return root.isTerminal;
            const letter = word[i];
            if (!(letter in root.children)) return false;
            root = root.children[letter];
        }
    }

    wordsWithPrefix(prefix, root=this.root) {
        for (let i = 0; i < prefix.length; i++) {
            if (!root) return [];
            root = root.children[prefix[i]]
        }

        function _words(node) {
            let allWords = [];
            if (node.isTerminal) allWords.push('');

            for (let letter in node.children) {
                let child = node.children[letter];
                let suffixes = _words(child);
                let fullWords = suffixes.map(suffix => letter + suffix);
                allWords.push(...fullWords);
            }

            return allWords;
        }

        return _words(root).map(suffix => prefix + suffix);

    }
}

module.exports = {
    Node,
    Trie
};