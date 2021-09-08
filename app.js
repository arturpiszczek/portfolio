const startButton = document.querySelector('.main-nav__item--start');
const aboutMeButton = document.querySelector('.main-nav__item--about-me');
const skillsButton = document.querySelector('.main-nav__item--skills');
const projectsButton = document.querySelector('.main-nav__item--projects');
const contactButton = document.querySelector('.main-nav__item--contact');
const hamburgerButton = document.querySelector('.main-menu__hamburger-button');
const mobileExitButton = document.querySelector('.mobile-nav__exit-button');
const mobileStartButton = document.querySelector('.mobile-nav__item--start');
const mobileAboutMeButton = document.querySelector('.mobile-nav__item--about-me');
const mobileSkillsButton = document.querySelector('.mobile-nav__item--skills');
const mobileProjectsButton = document.querySelector('.mobile-nav__item--projects');
const mobileContactButton = document.querySelector('.mobile-nav__item--contact');
const aboutMeHeader = document.querySelector('.about-me__header');
const skillsHeader = document.querySelector('.skills__header');
const projectsHeader = document.querySelector('.projects__header');
const contactHeader = document.querySelector('.contact__header'); 

// scrolling to the section header
function scrollToStartHandler() {
  scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToAboutMeHandler() {  
  const aboutMeHeaderPosition = aboutMeHeader.offsetTop - 142;
  scrollTo({top: aboutMeHeaderPosition, behavior: 'smooth'});
}

function scrollToSkillsHandler() {   
  const skillsHeaderPosition = skillsHeader.offsetTop - 142;
  scrollTo({top: skillsHeaderPosition, behavior: 'smooth'});
}

function scrollToProjectsHandler() {  
  const projectsHeaderPosition = projectsHeader.offsetTop - 142;
  scrollTo({top: projectsHeaderPosition, behavior: 'smooth'});
}

function scrollToContactHandler() {  
  const contactHeaderPosition = contactHeader.offsetTop - 142;
  scrollTo({top: contactHeaderPosition, behavior: 'smooth'});
}

startButton.addEventListener('click', scrollToStartHandler);
aboutMeButton.addEventListener('click', scrollToAboutMeHandler);
skillsButton.addEventListener('click', scrollToSkillsHandler);
projectsButton.addEventListener('click', scrollToProjectsHandler);
contactButton.addEventListener('click', scrollToContactHandler);

mobileStartButton.addEventListener('click', scrollToStartHandler);
mobileAboutMeButton.addEventListener('click', scrollToAboutMeHandler);
mobileSkillsButton.addEventListener('click', scrollToSkillsHandler);
mobileProjectsButton.addEventListener('click', scrollToProjectsHandler);
mobileContactButton.addEventListener('click', scrollToContactHandler);

// change of the main menu
function changeMainMenuHandler() {
  const mainMenu = document.querySelector('.main-menu'); 
  const position = window.scrollY; 
  position > 200 ? mainMenu.classList.add('main-menu--scroll') : mainMenu.classList.remove('main-menu--scroll');
} 

window.addEventListener('scroll', changeMainMenuHandler);

// appearance of description
function showDescriptionHandler() {
  const aboutMeDescription = document.querySelector('.about-me__description');       
  const position = window.scrollY;
  if(position <= 200) {
    aboutMeDescription.classList.add('about-me__description--fade-out');
    if(aboutMeDescription.classList.contains('about-me__description--fade-in')) {
      aboutMeDescription.classList.remove('about-me__description--fade-in');
    }
  }  
  if(position > 200) {
    aboutMeDescription.classList.add('about-me__description--fade-in');
    aboutMeDescription.classList.remove('about-me__description--fade-out');
  }
}

window.addEventListener('scroll', showDescriptionHandler);

// appearance of skills
function showSkillsHandler() { 
  const skillsItems = document.querySelectorAll('.skills__item');
  const skillsHeaderPosition = skillsHeader.offsetTop - 700; 
  const position = window.scrollY;
  if(position > skillsHeaderPosition) {
    for(const skillsItem of skillsItems) {
      skillsItem.classList.add('skills__item--appear');
    }
  }
} 

window.addEventListener('scroll', showSkillsHandler);

// appearance of projects
function showProjectHandler() {
  const projects = document.querySelectorAll('.projects__item');
  const projectsHeaderPosition = projectsHeader.offsetTop - 700;     
  const position = window.scrollY;
  if(position <= projectsHeaderPosition) {
    for(const project of projects) {
      project.classList.add('projects__item--fade-out');
      if(project.classList.contains('projects__item--fade-in')) {    
        project.classList.remove('projects__item--fade-in');
      }
    }
  }  
  if(position > projectsHeaderPosition) {
    for(const project of projects) {
      project.classList.add('projects__item--fade-in');
      project.classList.remove('projects__item--fade-out');      
    }
  }
}

window.addEventListener('scroll', showProjectHandler); 

// illumination of the menu buttons
function highlightMenuButtonsHandler() {
  const position = window.scrollY;
  if(position <= 200 && startButton.classList.contains('highlight-button')) {
    startButton.classList.remove('highlight-button');
  }
  if(position > 200 && position <= aboutMeHeader.offsetTop - 500) {
    startButton.classList.add('highlight-button'); 
    if(aboutMeButton.classList.contains('highlight-button')) {
      aboutMeButton.classList.remove('highlight-button');
    }       
  }
  if(position > aboutMeHeader.offsetTop - 300 && position <= skillsHeader.offsetTop - 300) {
    startButton.classList.remove('highlight-button');
    aboutMeButton.classList.add('highlight-button');
    if(skillsButton.classList.contains('highlight-button')) {
      skillsButton.classList.remove('highlight-button');
    }    
  }
  if(position > skillsHeader.offsetTop - 300 && position <= projectsHeader.offsetTop - 400) {
    aboutMeButton.classList.remove('highlight-button');
    skillsButton.classList.add('highlight-button');
    if(projectsButton.classList.contains('highlight-button')) {
      projectsButton.classList.remove('highlight-button');
    }    
  }
  if(position > projectsHeader.offsetTop - 400 && position <= contactHeader.offsetTop - 400) {
    skillsButton.classList.remove('highlight-button');
    projectsButton.classList.add('highlight-button');   
    if(contactButton.classList.contains('highlight-button')) {
      contactButton.classList.remove('highlight-button');
    }
  }  
  if(position > contactHeader.offsetTop - 400) {
    projectsButton.classList.remove('highlight-button');
    contactButton.classList.add('highlight-button');
  }  
}

window.addEventListener('scroll', highlightMenuButtonsHandler);

// showing and closing the mobile nav

function showMobileNavHandler() {
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.add('mobile-nav--open');
}

function closeMobileNavHandler() {
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.remove('mobile-nav--open');
}

hamburgerButton.addEventListener('click', showMobileNavHandler);
mobileExitButton.addEventListener('click', closeMobileNavHandler);