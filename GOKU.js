window.onload = function () {
    const campoCEP = document.getElementById('txtCEP');

    campoCEP.addEventListener('blur', function () {

        const caixaCEP = campoCEP.value;

        if (caixaCEP.length == 8) {
            const urlCEP = `https://viacep.com.br/ws/${caixaCEP}/json`;


            fetch(urlCEP)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    document.getElementById('textestado').value = data.estado;
                })

            fetch(urlCEP)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    document.getElementById('textRua').value = data.logradouro;

                    fetch(urlCEP)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            document.getElementById('textBairro').value = data.bairro;
                        })
                    fetch(urlCEP)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            document.getElementById('textRegião').value = data.regiao;
                        })







                });
        };

    }
    )
}

