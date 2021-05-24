const window = document.getElementById(page); // create a window variable so that we can eventually prepend the input and seconds to this

const searchBar = document.getElementById(search); // single out the searchbar so that we can control the submit and aquire the input

// eventListener for submit
searchBar.addEventListener('submit', function(e){
    e.preventDefault(); // prevent page clearing

    const input = searchBar.value; // grab the text from the searchBar

    const date = new Date() // this is only so that we can use the getSeconds method later

    const sec = getSeconds() // get the seconds at this moment in time in the browser

    const display = `${input} - ${sec}` // display the input with the seconds

    page.prepend(display) // prepend the display
    
})
