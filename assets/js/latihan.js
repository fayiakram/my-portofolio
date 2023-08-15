
let data_siswa = [
    {
        "name": "siswa 1",
        "class": "1",
        "age": 1
    },
    {
        "name": "siswa 2",
        "class": "2",
        "age": 2
    },
    {
        "name": "siswa 3",
        "class": "3",
        "age": 3
    },
];

function setTableRow() {
    for (const siswa of data_siswa) {
        $("#table-siswa tbody").append(`<tr><td>${siswa.name}</td><td>${siswa.age}</td><td>${siswa.class}</td></tr>`);
    }
}

setTableRow();

function find(name) {
    $("#table-siswa tbody").empty();

    if (name) {
        const siswa = data_siswa.find(function findName(data) {
            if (data.name === name) {
                return data;
            }
        })

        if (siswa) {
            $("#table-siswa tbody").append(`<tr><td>${siswa.name}</td><td>${siswa.age}</td><td>${siswa.class}</td></tr>`);
        } else {
            $("#table-siswa tbody").append(`<tr><td colspan="3">Siswa <b>${name}</b>Tidak Ditemukan!</td></tr>`);
        }
    } else {
        setTableRow();
    }
}


const genap = [2, 4, 6, 8, 10];
const ganjil = [1, 3, 5, 7, 9];

$(document).ready(function () {
    $("input").keyup(function () {
        const name = $("input").val();
        find(name);
    });

    $("input#input-bilangan").keyup(function () {
        const number = $("input#input-bilangan").val();
        $("#table-bilangan tbody").empty();
        if (number) {
            if (genap.includes(parseInt(number))) {
                $("#table-bilangan tbody").append(`<tr> <td colspan="2"><h4><span class="badge bg-success">${number} adalah bilangan genap</span></h4></td> </tr>`);
            } else if (ganjil.includes(parseInt(number))) {
                $("#table-bilangan tbody").append(`<tr> <td colspan="2"><h4><span class="badge bg-info">${number} adalah bilangan ganjil</span></h4></td> </tr>`);
            } else {
                $("#table-bilangan tbody").append(`<tr> <td colspan="2"><h4><span class="badge bg-warning">Maaf untuk${number} tidak masuk kriteria</span></h4></td> </tr>`);
            }
        }
    })
});

