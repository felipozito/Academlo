{
    // ! callback => es una funcion que pasamos por parametro

    function casamiento(respuesta, f1, f2) {
        if (respuesta) {
            f1();
        } else {
            f2();
        }
    }

    // function decirSi() {
    //     console.log("mi respuesta es SI");
    // }

    // function decirNo() {
    //     console.log("mi respuesta es NO");
    // }

    // casamiento(false, decirSi, decirNo);

    // casamiento(
    //     true,
    //     () => console.log("mi respuesta es SI"),
    //     () => console.log("mi respuesta es NO")
    // );

    function operacion(n1, n2, callback) {
        return callback(n1, n2);
    }

    // console.log(
    //     operacion(2, 4, function (a, b) {
    //         return a + b;
    //     })
    // );
    // console.log(operacion(2, 4, (a, b) => a - b));
    // console.log(operacion(2, 4, (a, b) => a * b));
}

{
    // ! funcion declarada
    function name() {
        console.log("mi nombre es brayan");
    }

    // ! funcion expresada
    const name1 = function () {
        console.log("mi nombre es brayan");
    };
}

{
    // ! clousere => es una funcion que adentro tiene otras definiciones de funcion

    function contador() {
        let amount = 0;

        function incrementar() {
            amount++;
        }

        function decrementar() {
            amount--;
        }

        function resetear() {
            amount = 0;
        }

        function show() {
            return amount;
        }

        return {
            incrementar,
            decrementar,
            resetear,
            show,
        };
    }

    // const contador1 = contador();

    // contador1.incrementar();
    // contador1.incrementar();
    // contador1.incrementar();
    // console.log(contador1.show());
    // contador1.decrementar();
    // console.log(contador1.show());
    // contador1.resetear();
    // console.log(contador1.show());

    function crud() {
        const users = [];

        function create(user) {
            users.push(user);
        }

        function read(callback) {
            callback(users);
        }

        function del(user) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].name === user.name) {
                    users.splice(i, 1);
                }
            }
        }

        function upd(user) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].name === user.name) {
                    users[i] = user;
                }
            }
        }

        return {
            create,
            read,
            del,
            upd,
        };
    }

    // const school1 = crud();

    // school1.create({ name: "brayan", age: 22 });
    // school1.create({ name: "stiben", age: 23 });
    // school1.create({ name: "sara", age: 21 });
    // school1.read((gato) => console.log(gato));
    // school1.upd({ name: "sara", age: 21 * 2, color: "red" });
    // school1.read((gato) => console.log(gato));
    // school1.del({ name: "sara", age: 21 });
    // school1.read((gato) => console.log(gato));
}

{
    // ! recursividad
    /*
    const usuarios = [
        {
            nombre: "Jesús",
            edad: 20,
        },
        {
            nombre: "Pedro",
            edad: 30,
        },
        {
            nombre: "Maria",
            edad: 40,
        },
    ];

    function pensamientoIterativo() {
        for (let i = 0; i < usuarios.length; i++) {
            console.log(usuarios[i]);
        }
    }

    function pensamientoRecursivo(array, i = 0) {
        // if (array.length !== 0) {
        //     console.log(array.pop());
        //     pensamientoRecursivo(array);
        // }

        if (i < array.length) {
            console.log(array[i]);
            pensamientoRecursivo(array, i + 1);
        }
    }

    function sumaRecursiva(n) {
        if (n === 0) {
            return 0;
        } else {
            return n + sumaRecursiva(--n);
        }
    } */
}

{
    // ! this, contexto de la funcion
    window.nameUser = "brayan";

    // const getUser = () => {
    //     console.log(this.nameUser);
    // };

    const getUser = function () {
        const aux = () => {
            console.log(this.nameUser);
        };

        aux();
    };

    // function getUser() {
    //     console.log(this.nameUser);
    // }

    const contextBrayan = {
        nameUser: "brayan pero desde contextBrayan",
        getUser: getUser,
    };

    getUser();
    contextBrayan.getUser();

    // function saludar1() {
    //     console.log("hola que mas");
    // }
}
