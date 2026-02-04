//  const name = document.getElementById("name");
//   const dropdown = document.getElementById("contactDropdown");

//   name.addEventListener("click", () => {
//     dropdown.classList.toggle("hidden");
//   });

//   // Optional: close when clicking outside
//   document.addEventListener("click", (e) => {
//     if (!e.target.closest(".name-container")) {
//       dropdown.classList.add("hidden");
//     }
//   });

//   function skill()
//   {
//     const pr=document.getElementsByClassName('professionaldetails');
//     const skillset=document.getElementsById('underNav');
//     skillset.innerHTML="";
//     // document.getElementsByClassName("underNav").innerHTML = "clear";
//     // skillset.className='skill';
//     // skillset.innerHTML=`<span>Java</span>
//     //     <span>SQL</span>
//     //     <span>Python</span>
//     //     <span>Data Structures</span>
//     //     <span>Collection Framework</span>
//     //     <span>Spring Boot</span>
//     //     <span>Spring MVC</span>
//     //     <span>REST APIs</span>
//     //     <span>Hibernate / JPA</span>
//     //     <span>Microservices</span>
//     //     <span>PostgreSQL</span>
//     //     <span>MySQL</span>
//     //     <span>Git</span>
//     //     <span>GitHub</span>
//     //     <span>Postman</span>
//     //     <span>IntelliJ</span>
//     //     <span>Eclipse IDE</span>
//     //     <span>Spring Tool suite</span>
//     //     <span>PGAdmin</span>
//     //     <span>Swagger</span>
//     //     <span>HTML</span>
//     //     <span>CSS</span>
//     //     <span>Java Script</span>
//     //     <span>JIRA</span>
//     //     <span>Agile</span>
//     //     <span>Bit Bucket</span>
//     //     <span>AWS-EC2,S3,RDS</span>
//     //     <span>Windows</span>
//     //     <span>Unix</span>
//     //     <span>Junit</span>`;

//         // pr.appendChild(skillset);
//         // document.getElementsByClassName('underNav').style.display='block';

//   }
  document.addEventListener("DOMContentLoaded", function () {
    showSection("about"); // default
});

function showSection(sectionId) {
    const sections = document.querySelectorAll(".underNav");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}
//  document.querySelector(".content-wrapper").scrollTop = 0;