        const kontenTable = document.querySelector('.content.table')

        async function fetchMahasiswa() {
            let mahasiswa = [];
            const dataMahasiswa = localStorage.getItem('mahasiswa');

            if (dataMahasiswa) {
                mahasiswa = JSON.parse(dataMahasiswa);
            } else {
                const mahasiswa = [
                    {
                        name: "Mario",
                        id: "123",
                        type: "718 Turbo",
                        email: "mario@gmail,com",
                        password: "mario718",
                        card: "2211-3344",
                        date: "20-10-2009",
                        address: "boulevard",
                    },
                    {
                        name: "Booker",
                        id: "553",
                        type: "991 RS",
                        email: "book32@gmail,com",
                        password: "ilovepdf",
                        card: "1346-6543",
                        date: "21-11-2014",
                        address: "kemang",
                    },
                    {
                        name: "Harry",
                        id: "887",
                        type: "Panamera S",
                        email: "harryyy@gmail,com",
                        password: "pinepllu",
                        card: "5321-8875",
                        date: "22-10-2023",
                        address: "pondok indah",
                    },
                    {
                        name: "Julian",
                        id: "439",
                        type: "718 Spyder",
                        email: "julian12@gmail,com",
                        password: "sushiiiii",
                        card: "8745-0978",
                        date: "23-10-2023",
                        address: "menteng",
                    },
                    {
                        name: "Danueel",
                        id: "477",
                        type: "Taycan RS",
                        email: "dannnnn@gmail,com",
                        password: "housecake",
                        card: "8888-3344",
                        date: "23-10-2023",
                        address: "PIK",
                    },
                    
                ];
                localStorage.setItem('mahasiswa', JSON.stringify(mahasiswa));
            
            }
            return mahasiswa;
        }

        async function PopulateTable() {
            try {
                const dataMahasiswa = await fetchMahasiswa();

                const table = document.createElement('table');
                const thead = document.createElement('thead');
                const tbody = document.createElement('tbody');
                const headerRow = document.createElement('tr');

                for (const key in dataMahasiswa[0]) {
                    const th = document.createElement('th');
                    th.textContent = key;
                    headerRow.appendChild(th);
                }

                thead.appendChild(headerRow);

                dataMahasiswa.forEach(item => {
                    const row = document.createElement('tr');
                    for (const key in item) {
                        const cell = document.createElement('td');
                        cell.textContent = item[key];
                        row.appendChild(cell);
                    }
                    tbody.appendChild(row);
                });

                table.appendChild(thead);
                table.appendChild(tbody);

                kontenTable.innerHTML = '';
                kontenTable.appendChild(table);
            } catch (error) {
                console.error('Error', error);
            }
        }

        PopulateTable();