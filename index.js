'use strict';

const ohm = require('ohm-js');
const fs = require('fs');
const semanticRules = require('./semantics.js');
let grammar = ohm.grammar(fs.readFileSync('grammar.ohm').toString());
console.log(fs.readFileSync('test.komodo').toString());
const matched = grammar.match(fs.readFileSync('test.komodo').toString());
const semantics = grammar.createSemantics().addOperation('eval', semanticRules.semanticRules);
console.log(semantics(matched).eval());