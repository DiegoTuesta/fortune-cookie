import { useState } from "react";

const Button = ({ outIndex, phrase }) => {

    const images = ["1.jpg", "2.png", "3.png", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.png", "9.jpg", "10.jpg","11.jpg", "12.png", "13.jpg" ];

    const [img, setImg] = useState(0)

    const handleClick = () => {
        const newIndex = Math.floor(Math.random() * phrase);
        document.querySelector('#loader').classList.remove('loader--hidden');
        document.querySelector('.card').classList.add('card--loader');
        document.querySelector('#loader').classList.add('loader');
        document.querySelector('button').setAttribute("disabled", "disabled")
        setTimeout( () => {
            document.querySelector('#loader').classList.add('loader--hidden');
            document.querySelector('.card').classList.remove('card--loader');
            // document.querySelector('#loader').classList.remove('loader');
            document.querySelector('button').removeAttribute("disabled")
            outIndex(newIndex)
            img < 12 ? setImg(img+1): setImg(0)
        }, 2000 )
    }
    document.body.style = `background-image: url("./imagenes/${images[img]}")`;

  return (
    
      <button onClick={ handleClick } >Change Phrase!</button>
   
  );
};

export default Button;
