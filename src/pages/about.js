import "../style/aboutStyle.css";

const aboutPage = () => {
    const containerDiv = document.querySelector("#container");
    containerDiv.setAttribute("class", "about");

    const aboutDiv = document.createElement("div");
    aboutDiv.id = "aboutDiv";

    aboutDiv.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque commodo justo, a rutrum massa tempor in. Nunc auctor odio porttitor faucibus rutrum. Integer euismod ante nec elementum scelerisque. Aenean aliquet aliquet quam id sollicitudin. Sed a placerat nunc. Ut dignissim lectus molestie, ornare neque in, posuere tellus. Nullam enim neque, tristique at ornare a, porta non risus. Quisque sed faucibus neque. Nulla efficitur sodales nibh id iaculis. Vestibulum turpis elit, lobortis id diam id, ullamcorper finibus ex. Etiam luctus, enim ac convallis ultrices, lectus nunc porttitor sem, non pharetra sapien sem eu dui. Maecenas pulvinar iaculis elit in suscipit. Mauris aliquam, erat eget mattis iaculis, dolor elit fermentum nibh, ac luctus nulla arcu id ipsum. Maecenas bibendum felis eu tellus vehicula, vel facilisis dolor feugiat. Maecenas urna purus, bibendum commodo lacinia eu, ullamcorper in sapien.";

    containerDiv.appendChild(aboutDiv);

}


export { aboutPage };