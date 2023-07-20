
function counter_BMI() {
    let Weight = parseFloat(document.getElementById("weight").value);
    let Height = parseFloat(document.getElementById("height").value);

    if (isNaN(Weight) || isNaN(Height) || Weight <= 0 || Height <= 0) {
        alert('Masukkan berat dan tinggi yang valid!');
        return;
    } else {
        let Height_Converted = Height/100;
        let BMI_score = Weight/(Height_Converted * Height_Converted);
        let Result_score = BMI_score.toFixed(1);
        console.log(Result_score)
    
        let ResultElement = document.getElementsByClassName("Result-Body");
        ResultElement.innerHTML = Result_score;

        let ResultCounter = document.getElementsByClassName("Result-Criteria");
        let notif;

        if (Result_score < 18.5) {
            notif = "Anda Kekurangan Berat Badan";
            ResultCounter.innerHTML = notif;
            console.log(notif);
        }
        else if (18.5 <= Result_score <= 24.9) {
            notif = "Selamat, Berat Badan Anda Ideal";
            ResultCounter.innerHTML = notif;
            console.log(notif);
        }
        else if (25.0 <= Result_score <= 29.9) {
            notif = "Anda Memiliki Berat Badan Berlebih";
            ResultCounter.innerHTML = notif;
            console.log(notif);
        }
        else if (Result_score >= 30.0) {
            notif = "Anda mengalami Obesitas, segera lakukan program penurunan berat badan";
            ResultCounter.innerHTML = notif;
            console.log(notif);
        }
    }

}