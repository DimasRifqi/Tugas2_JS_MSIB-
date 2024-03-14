let siswaList = [
  { nama: "Andi", nilai: 80 },
  { nama: "Bayu", nilai: 90 },
  { nama: "Dendi", nilai: 40 },
  { nama: "Retno", nilai: 90 },
  { nama: "Gero", nilai: 85 },
];

var no = 1;
for (let siswa of siswaList) {
  let ket = siswa.nilai >= 60 ? "lulus" : "gagal";
  let grade = "";
  let predikat = "";

  if (siswa.nilai > 85 && siswa.nilai <= 100) grade = "A";
  else if (siswa.nilai > 75 && siswa.nilai <= 85) grade = "B";
  else if (siswa.nilai > 60 && siswa.nilai <= 75) grade = "C";
  else if (siswa.nilai > 30 && siswa.nilai <= 60) grade = "D";
  else if (siswa.nilai > 0 && siswa.nilai <= 30) grade = "E";
  else grade = "";

  switch (grade) {
    case "A":
      predikat = "Sempurna";
      break;
    case "B":
      predikat = "Baik";
      break;
    case "C":
      predikat = "Cukup";
      break;
    case "D":
      predikat = "Kurang";
      break;
    case "E":
      predikat = "Buruk";
      break;
    default:
      predikat = "";
      break;
  }

  document.write(`
          <tr>
            <td>${no++}</td>
            <td>${siswa.nama}</td>
            <td>${siswa.nilai}</td>
            <td>${ket}</td>
            <td>${grade}</td>
            <td>${predikat}</td>
          </tr>
        `);
}
