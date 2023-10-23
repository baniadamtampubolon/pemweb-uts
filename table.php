<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Informasi Pendaftar</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="container">
        <h1>Detail Informasi Pendaftar</h1>
        <div class="info">
            <?php
            // Mengambil data dari variabel superglobal $_GET
            $nama = $_GET['nama'];
            $email = $_GET['email'];
            $telepon = $_GET['telepon'];
            $nim = $_GET['nim'];
            $prodi = $_GET['prodi'];
            $kelamin = $_GET['kelamin'];
            $tgl = $_GET['tgl'];
            $alamat = $_GET['alamat'];

            // Menampilkan data yang telah terkirim
            echo "<p><strong>Nama:</strong> $nama</p>";
            echo "<p><strong>NIM:</strong> $nim</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Prodi:</strong> $prodi</p>";
            echo "<p><strong>Jenis Kelamin:</strong> $kelamin</p>";
            echo "<p><strong>Tanggal Lahir:</strong> $tgl</p>";
            echo "<p><strong>Telepon:</strong> $telepon</p>";
            echo "<p><strong>Alamat:</strong> $alamat</p>";
            ?>
        </div>
    </div>
</body>

</html>
