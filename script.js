let slideImg = document.querySelectorAll('.slaid__img img'),
    slideTextTest = document.querySelectorAll('.text__testimonial p'),
    slideTextName = document.querySelectorAll('.text__testimonial--info h2'),
    slideTextProf = document.querySelectorAll('.text__testimonial--info p'),
    slide = document.querySelectorAll('.slaid'),
    arrowLeft = document.querySelectorAll('.btn__left'),
    arrowRigth = document.querySelectorAll('.btn__rigth'),
    current = 0;


        function reset(){
            for(let i of slide){
                i.style.display = 'none'
            }
        }

        function startSlide(){
            reset()

            slide[0].style.display = 'block'
        }

        function goLeft(){
            reset();

            slide[current - 1].style.display = 'block'

            console.log(slide[current]);
            current--;
        }

        function goRight(){
            reset();
            slide[current + 1].style.display = 'block'

            current ++;
        }

         arrowRigth.forEach((btn) =>{

             btn.addEventListener('click', () =>{
    
                 if (current === slide.length - 1){
                     current = -1;
                 }
    
                 goRight();
             })
         })

        

        arrowLeft.forEach((btn) =>{

            btn.addEventListener('click', () =>{
                if (current === 0){
                    current = slide.length;
    
                }
    
                goLeft();
            })
        })    

        startSlide();

