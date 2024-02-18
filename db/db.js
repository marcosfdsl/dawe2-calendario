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
        ],
        notificaciones: [
            {
                tipo: "Mensaje",
                emisor: "Román Ontiyuelo",
                fecha: "18/02/2024 16:49",
                contenido: "Hola!"
            },
            {
                tipo: "Recordatorio",
                emisor: "reunión",
                fecha: "24/02/2024 12:00",
                contenido: "Reunión DAW1"
            },
            {
                tipo: "Recordatorio",
                emisor: "tutoría",
                fecha: "05/03/2024 17:30",
                contenido: "Padres de Alejandro García"
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
    },
    {
        id: 4,
        nombre: "Javier Magariño",
        correo: "javier.magarino@live.u-tad.com",
        usuario: "javier.magarino",
        contrasena: "1234",
        telefono: "600000003",
        cargo: "profesor/a",
        asignaturas: [
            {
                idAsignatura: 1,
                nombreAsignatura: "Bases de Datos",
                cursoAsignatura: "DAW1",
                diasAsignatura: ["Martes", "Miércoles", "Viernes"]
            }
        ]
    }
];

export default profesores;
