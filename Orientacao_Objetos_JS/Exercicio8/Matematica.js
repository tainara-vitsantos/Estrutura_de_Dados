/* Crie uma classe Matematica em Matematica.js apenas com métodos
estáticos somar(a,b), subtrair(a,b) e fatorial(n). No app.js,
importe e use sem precisar instanciar. */

class Matematica {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static fatorial(n) {
        if (n < 0) {
            return "Fatorial não existe para números negativos";
        }

        let resultado = 1;

        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }

        return resultado;
    }
}


export default Matematica;