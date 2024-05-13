// Function to handle link clicks and display the corresponding iframe
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Hide all iframes
    document.querySelectorAll("iframe").forEach((iframe) => {
      iframe.classList.add("hide");
    });

    // Get the target from the link's target attribute
    const target = this.getAttribute("target");

    // Find the iframe with the matching name attribute and show it
    const iframeToShow = document.querySelector(`iframe[name="${target}"]`);
    if (iframeToShow) {
      iframeToShow.classList.remove("hide");
    }
  });
});

/*
// create DOM references
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const scss = document.querySelector('#scss');
const design = document.querySelector('#design');
const git = document.querySelector('#git');
const github = document.querySelector('#github');
const js = document.querySelector('#js');


const contentLink = () => {
    const allContent = document.querySelectorAll('iframe')
    //Add hide class to all iframes
    for (let i = 0; i < allContent.length; i++) {
        allContent[i].className = "hide"; 
        console.log(i, allContent[i].name);

        content.className ==="hide" ? "" : "hide";
    }
    //const contentId = this.getAttribute('target')
    console.log(this);
    //const content = document.getElementById();

}

// Adding Event Listeners
html.addEventListener("click", contentLink);
css.addEventListener("click", contentLink);
scss.addEventListener("click", contentLink);
design.addEventListener("click", contentLink);
git.addEventListener("click", contentLink);
github.addEventListener("click", contentLink);
js.addEventListener("click", contentLink);
*/
