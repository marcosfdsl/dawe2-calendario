const profesores = [
    {
        id: 1,
        nombre: "Silvia Orenes",
        correo: "silvia.orenes@live.u-tad.com",
        usuario: "silvia.orenes",
        contrasena: "1234",
        telefono: "600000000",
        cargo: "profesor/a",
        asignaturas: [
            {
                idAsignatura: 1,
                nombreAsignatura: "Programación",
                cursoAsignatura: "DAW1",
                diasAsignatura: ["Lunes", "Martes", "Jueves"]
            },
            {
                idAsignatura: 2,
                nombreAsignatura: "Programación",
                cursoAsignatura: "DAM1",
                diasAsignatura: ["Martes", "Miércoles", "Jueves"]
            }
        ]
    },
    {
        id: 2,
        nombre: "Nayra Benítez",
        correo: "nayra.benitez@live.u-tad.com",
        usuario: "nayra.benitez",
        contrasena: "1234",
        telefono: "600000001",
        cargo: "profesor/a",
        asignaturas: [
            {
                idAsignatura: 1,
                nombreAsignatura: "Proyecto",
                cursoAsignatura: "DAW2",
                diasAsignatura: ["Lunes"]
            }
        ]
    },
    {
        id: 3,
        nombre: "Román Ontiyuelo",
        correo: "roman.ontiyuelo@live.u-tad.com",
        usuario: "roman.ontiyuelo",
        telefono: "600000002",
        contrasena: "1234",
        cargo: "profesor/a",
        asignaturas: [
            {
                idAsignatura: 1,
                nombreAsignatura: "Sistemas Informáticos",
                cursoAsignatura: "DAW1",
                diasClase: ["Lunes", "Miércoles"]
            },
            {
                idAsignatura: 2,
                nombreAsignatura: "Diseño de Interfaces",
                cursoAsignatura: "DAW2",
                diasAsignatura: ["Lunes", "Miércoles", "viernes"]
            }
        ]
    }
];

export default profesores;
