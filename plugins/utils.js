export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('loadMenu', () => {
        console.log("loadMenu loadMenuloadMenuloadMenu")
        let menu = document.querySelector('#menu-bar');
        let navbar = document.querySelector('.fx-navbar'); 
        
        window.onscroll = () =>{
           
            menu.classList.remove('fa-times');
            navbar.classList.remove('active'); 
        }
        
        menu.addEventListener('click', () =>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    });
    inject('initBackToTopBtn', () => {
        //Get the button
        console.log("Initializing tht DOM")
        let mybutton = document.getElementById("btn-back-to-top");
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            console.log("Back back back")

            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", function () {
            console.log("BakbTo to called")
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    })
}