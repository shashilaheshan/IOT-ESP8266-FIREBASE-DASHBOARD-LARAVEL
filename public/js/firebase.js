  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPNO8tVVAr2g91QXy5mGbtdoqGe9inoHc",
    authDomain: "ipc-cw.firebaseapp.com",
    databaseURL: "https://ipc-cw.firebaseio.com",
    projectId: "ipc-cw",
    storageBucket: "ipc-cw.appspot.com",
    messagingSenderId: "181723082950",
    appId: "1:181723082950:web:4ecd0246616ad549afa7c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var starCountRef = firebase.database().ref('wear-devices/' + 1000);
starCountRef.on('value', function (snapshot) {
    let wearDeviceData = snapshot.val()
    const {
        bpmdata,
        snoredata
    } = wearDeviceData;
   

    let arrSnore = Object.keys(snoredata);


    let arrbpm = Object.keys(bpmdata);

    let arrbpmValues = Object.values(bpmdata);

 
    let lastReadBpm = arrbpm.pop();

    let lastReadSnore= arrSnore.pop();

    $('#bpm-date').text(lastReadBpm);

    let bpmStatus = bpmdata[lastReadBpm] > 80 ? 'BPM is abnormal please breath or meet a doctor.' : 'BPM is normal. Take good sleep.'

    $('#bpm').text(bpmdata[lastReadBpm] + " BPM | " + bpmStatus);

    $('#bpm-val').text(bpmdata[lastReadBpm])


    $('#snore-date').text(lastReadSnore);


    var historyBpmDomHtml = '';

    arrbpm.forEach((time) => {
        

        historyBpmDomHtml += `<h3>Read Time | ${time}<h3> <h3>Status | ${bpmdata[time] > 80 ? 'Critical' :'Normal'}<h3> <hr/>`
    });
    $('#bpm-history').html(historyBpmDomHtml);
    var historyDomHtml = '';

    arrSnore.forEach((time) => {

        historyDomHtml += `<h3>Read Time | ${time}<h3> <h3>Status | ${snoredata[time] ? 'SNORED' :'NOT SNORED'}<h3> <hr/>`
    });

    $('#snore-history').html(historyDomHtml);
    $('#snore').text(snoredata[lastReadSnore] ? 'Snore Detected | Notification Sent' : 'Snore Not Detected');

    if( bpmdata[lastReadBpm]>80) {
        $(".progress.blue .progress-bar").css({ "border-color": "#ff0000"})
    }else{
        $(".progress.blue .progress-bar").css({ "border-color": "#e100ff"})
    }

    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:arrbpm ,
        datasets: [{
            label: '# BPM',
            data: arrbpmValues,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
});