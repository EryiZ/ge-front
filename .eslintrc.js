module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {},
    "globals": {
        "process": true,
        "require":true
    }
};