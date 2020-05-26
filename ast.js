class Program {
    constructor(expression) { this.body = expression; }
    toString() { return this.body.toString(); }
}

class VarDec {
    constructor(id, type) {
      Object.assign(this, { id, type });
    }
}

module.exports = {Program, VarDec }