const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creazione delle card
let contenitore = document.getElementById("contenitore")
 console.log(contenitore)
let userCard = (member) =>{
 const card = ` 
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card bg-dark text-light d-flex flex-row overflow-hidden">
                <img src="./${member.img}" alt="foto" class="img">
                <div class="p-3">
                    <h4 class="fw-bold m-0">${member.name}</h4>
                    <p class="m-0">${member.role}</p>
                    <a href="mailto: ${member.email}" class="text-info text-decoration-none">
                        marcobianchi@team.com
                    </a>
                </div>
            </div>
        </div> `
 return card
}
for (let i= 0; i< teamMembers.length; i++) {
  

  contenitore.innerHTML +=  userCard(teamMembers[i])
}



  
  