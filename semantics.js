'use strict';

const ohm = require('ohm-js');
const astRules = require('./ast');

const semanticRules = {
    Program: function (body) {
        return new astRules.Program(body.eval());
    },
    Exp: function (e) {
        return e.eval();
    },
    ArithmeticExp: function (e) {
        return e.eval();
    },
    ArithmeticExp_plus: function (left, op, right) {
        return left.eval() + right.eval();
    },
    ArithmeticExp_minus: function (left, op, right) {
        return left.eval() - right.eval();
    },
    ArithmeticExp_divide: function (left, op, right) {
        return left.eval() / right.eval();
    },
    ArithmeticExp_multiply: function (left, op, right) {
        return left.eval() * right.eval();
    },
    PriExp: function (e) {
        return e.eval();
    },
    PriExp_paren: function (open, exp, close) {
        return exp.eval();
    },
    number: function (chars) {
        return parseInt(this.sourceString, 10);
    },
    VariableExp_declaration(type, id) { return new astRules.VarDec(id.sourceString, type.sourceString) },
};

module.exports = { semanticRules }