const sections = document.querySelectorAll('.section'); // Selecting all sections, about, portfolio etc 
const sectionButtons = document.querySelectorAll('.controls'); // selecting the overall div container for each section 
const sectionButton = document.querySelectorAll('.control'); // selecting each individual button per section 
const allSections = document.querySelector('.main-content'); // selecting the whole DOM body 

function PageTransitions() {
    // Changing/removing the active class status for each button on click
    for(let i = 0; i < sectionButton.length; i++) { 
        sectionButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        }) 
    }
    // Sections Active Class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            //Remove selected from unclicked buttons
            sectionButtons.forEach((button) => {
                button.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide sections not in focus

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

}

PageTransitions(); 
