let Firstname = document.getElementById("Firstname")
let Lastname = document.getElementById("Lastname")
let Gender = document.getElementById("Gender")
let phoneNumber = document.getElementById("phoneNumber")
let School = document.getElementById("School")
let DateOfBirth = document.getElementById("DateOfBirth")
let selectContinent = document.getElementById("selectContinent")
let Africa = document.getElementById("Africa")
let asia = document.getElementById("asia")
let SouthAmerica = document.getElementById("SouthAmerica")
let NorthAmerica = document.getElementById("NorthAmerica")
let Others = document.getElementById("Others")
let ApplyBtn = document.getElementById("ApplyBtn")
let age = document.getElementById("age")
let result = document.getElementById("result")
let myChart = document.getElementById("myChart").getContext("2d")

// let crk1 = document.getElementById("crk1")


let Score1 = document.getElementById("Score1")
let engScore = document.getElementById("engScore")
let sub1Score = document.getElementById("sub1Score")
let sub2Score = document.getElementById("sub2Score")
let sub3Score = document.getElementById("sub3Score")
let sub4Score = document.getElementById("sub4Score")
let sub5Score = document.getElementById("sub5Score")
let sub6Score = document.getElementById("sub6Score")


let agePoint
let countryPoint
let gradePoint
let sumUp




selectContinent.addEventListener("change", function () {
    if (selectContinent.value == "Africa") {
        Africa.style.display = "block"
        asia.style.display = "none"
        SouthAmerica.style.display = "none"
        NorthAmerica.style.display = "none"
        Others.style.display = "none"

    } else if (selectContinent.value == "asia") {
        Africa.style.display = "none"
        asia.style.display = "block"
        SouthAmerica.style.display = "none"
        NorthAmerica.style.display = "none"
        Others.style.display = "none"

    } else if (selectContinent.value == "SouthAmerica") {
        Africa.style.display = "none"
        asia.style.display = "none"
        SouthAmerica.style.display = "block"
        NorthAmerica.style.display = "none"
        Others.style.display = "none"

    } else if (selectContinent.value == "NorthAmerica") {
        Africa.style.display = "none"
        asia.style.display = "none"
        SouthAmerica.style.display = "none"
        NorthAmerica.style.display = "block"
        Others.style.display = "none"

    } else if (selectContinent.value == "Others") {
        Africa.style.display = "none"
        asia.style.display = "none"
        SouthAmerica.style.display = "none"
        NorthAmerica.style.display = "none"
        Others.style.display = "block"

    }
    if (selectContinent.value == "Africa") {
        countryPoint = 50

    } else if (selectContinent.value == "asia") {
        countryPoint = 40

    } else if (selectContinent.value == "SouthAmerica") {
        countryPoint = 30


    } else if (selectContinent.value == "NorthAmerica") {
        countryPoint = 20

    } else if (selectContinent.value == "Others") {
        countryPoint = 10
    }

    console.log(countryPoint)




})



ApplyBtn.addEventListener("click", function () {
    Val()
    Age()
    Cal()
    addUp()
    PIC()
    Ex()



})
function Val() {
    if (Firstname.value == "" || Firstname.value == null) {
        Firstname.nextElementSibling.innerHTML = "first name is required";
    } else {
        Firstname.nextElementSibling.innerHTML = ""

    } if (Lastname.value == "" || Lastname.value == null) {
        Lastname.nextElementSibling.innerHTML = "last name is required"
    } else {
        Lastname.nextElementSibling = ""

    } if (Gender.value == "" || Gender.value == null) {
        Gender.nextElementSibling.innerHTML = "gender is required"
    } else {
        Gender.nextElementSibling.innerHTML = ""

    } if (phoneNumber.value == "" || phoneNumber.value == null) {
        phoneNumber.nextElementSibling.innerHTML = "phone number is required"
    } else {
        phoneNumber.nextElementSibling.innerHTML = ""

    } if (School.value == "" || School.value == null) {
        School.nextElementSibling.innerHTML = "school is required"
    } else {
        School.nextElementSibling.innerHTML = ""

    } if (DateOfBirth.value == "" || DateOfBirth.value == null) {
        DateOfBirth.nextElementSibling.innerHTML = "date-of-birth is required"




    } else {
        DateOfBirth.nextElementSibling.innerHTML = ""

    } if (age.value == "" || age.value == null) {
     
    } else {
        age.nextElementSibling, innerHTML = ""

    } if (selectContinent.value == "" || selectContinent.value == null) {
        selectContinent.nextElementSibling.innerHTML = "continent is required"

    } else {
        selectContinent.nextElementSibling.innerHTML = "";

        // }if(Subject.value == "" || Subject.value. null){
        //     Subject.nextElementSibling.innerHTML = "subject is required"

        // }else{
        //     Subject.nextElementSibling.innerHTML=""
    }

}
function Age() {
    let today = parseInt(new Date().getFullYear())
    let Birth = parseInt(new Date(DateOfBirth.value).getFullYear())
    let difference = today - Birth
    age.setAttribute("value", difference)
    if (difference >= 18 && difference <= 24) {
        agePoint = 100

    } else if (difference >= 25 && difference <= 30) {
        agePoint = 80

    } else if (difference >= 31 && difference <= 35) {
        agePoint = 50

    } else if (difference >= 36 && difference <= 40) {
        agePoint = 30

    } else if (difference >= 40) {
        agePoint = 10
    }

    console.log("Ur" + agePoint)

}

function Cal() {
    let Score = parseInt(Score1.value);
    let engScore1 = parseInt(engScore.value)
    let subScore = parseInt(sub1Score.value)
    let subScor = parseInt(sub2Score.value)
    let subSco = parseInt(sub3Score.value)
    let subSc = parseInt(sub4Score.value)
    let sub = parseInt(sub5Score.value)
    let su = parseInt(sub6Score.value)
    let totalPoint = (Score + engScore1 + subScore + subScor + subSco + subSc + sub + su);

    let Avg = totalPoint / 8;


    if (Avg <= 100 && Avg >= 90) {
        gradePoint = 150;
        console.log(gradePoint)

    } else if (Avg >= 85 && Avg <= 89) {
        gradePoint = 140;
        console.log(gradePoint)

    } else if (Avg >= 75 && Avg <= 84) {
        gradePoint = 120;
        console.log(gradePoint)

    } else if (Avg >= 65 && Avg <= 74) {
        gradePoint = 100;
        console.log(gradePoint)

    } else if (Avg >= 60 && Avg <= 64) {
        gradePoint = 80;
        console.log(gradePoint)

    } else if (Avg >= 50 && Avg <= 59) {
        gradePoint = 50;
        console.log(gradePoint)

    } else if (Avg >= 40 && Avg <= 49) {
        gradePoint = 20;
        console.log(gradePoint)
    }
}


function addUp() {
    sumUp = countryPoint + agePoint + gradePoint
    console.log(sumUp)

    if (sumUp >= 180) {
        result.innerHTML = `
        <p>Congratulations ${Firstname.value} ${Lastname.value} you have been Awarded a scholarship into Goth College</p>    
    `

    }else if(sumUp < 180) {
        result.innerHTML = `
        <p>Sorry ${Firstname.value} ${Lastname.value} you did not qualify for the scholarship into Goth College</p>    
        `
        
    }


}

function PIC(){
    
let massChart= new Chart(myChart, {
    type:"bar",
    data:{
        labels:["agePoint", "gradePoint", "countryPoint"],

        datasets:[{
            label:"Results", 
            data: [
                agePoint, 
                gradePoint,
                countryPoint
            ],
            backgroundColor:["blue", "pink", "purple"],
            borderWidth:2,
            borderColor:"black",
            hoverBorderWidth:2,
            hoverBorderColor:"red"
        }]


       


    },
    options:{}
});

}

// function Ex(){
//     let x= (crk1.value)
//  if(x == "crk1"){
//  document.getElementById("crk1").disable;
//  console.log(x)
//  }
// }

