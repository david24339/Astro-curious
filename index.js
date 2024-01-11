document.addEventListener("DOMContentLoaded", () => {

    //set the size of the div to the size of the screen and call the function when the button is clicked 
    document.getElementById('intro').style.height = `${window.innerHeight}px`;
    document.getElementById('btn').addEventListener('click', () => {
        get_data_n_display();
    });
})



//get the data from the api and display them to the html
function get_data_n_display(){

    
    //get the html elements
    const title =  document.getElementById('picture-title');
    const image = document.getElementById('img');
    const description = document.getElementById('description-y');
    const icon = document.getElementById('icon');
    const about = document.getElementById('about');
    const iconsm = document.getElementById('icon-small'); 

    fetch("https://api.nasa.gov/planetary/apod?api_key=LMfjrwPr2xq2LXcYLoCuR76TFjDWoXGNmeSCM5QA")
    .then(response => response.json())
    .then(st => {
        title.innerHTML = `${st.title}`;
        image.innerHTML = `<img class='img-fluid' src=${st.url}>`;
        description.innerHTML = `${st.explanation}`;
        console.log(st);

        document.getElementById('btn').style.display = 'none';
        if(window.innerWidth > 576){
            about.style.display = 'block';
            icon.style.animationPlayState = 'running';
        }
        else{
            about.style.display = 'block';
            iconsm.style.animationPlayState = 'running';
        }

    })
    .catch(error => {
        console.log('There was a problem with the fetch operation');
    });
}