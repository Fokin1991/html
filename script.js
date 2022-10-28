function Username() 
    {   
       let name=prompt("Как вас зовут?");
       
       if(name=="" || name==null)
       {
        alert("Пожалуйста введите  свое имя");
        
       }
       else
       {
        
        alert("Здраствуйте, " + name);

       }
    }
       Username(); 
    