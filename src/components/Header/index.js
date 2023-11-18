import './style.css';

function Header(){
    function AbrirMenu(){
        const OpMenuResponsive = document.getElementById("conteudo-menu-responsivo");
  
        const line1 = document.getElementById("bar-1");
        const line2 = document.getElementById("bar-2");
        const line3 = document.getElementById("bar-3");

        if(OpMenuResponsive.style.opacity !== '1'){
            
            OpMenuResponsive.style.right = '0';
            line1.style.top = '50%';
            line2.style.top = '50%';
            line3.style.top = '50%';
            line1.style.transform = 'rotate(45deg)';
            line2.style.transform = 'rotate(45deg)';
            line3.style.transform = 'rotate(-45deg)';
            OpMenuResponsive.style.opacity = 1;
        } else{
            
            OpMenuResponsive.style.right = '-100%';
            line1.style.transform = 'rotate(0deg)';
            line2.style.transform = 'rotate(0deg)';
            line3.style.transform = 'rotate(0deg)';
            line1.style.top = '40%';
            line2.style.top = '60%';
            line3.style.top = '80%';
            OpMenuResponsive.style.opacity = 0;

            
        }
    }
    function fecharMenuResp(){

        const OpMenuResponsive = document.getElementById("conteudo-menu-responsivo");
        const line1 = document.getElementById("bar-1");
        const line2 = document.getElementById("bar-2");
        const line3 = document.getElementById("bar-3");
  
        OpMenuResponsive.style.right = '-100%';
        OpMenuResponsive.style.opacity = '0';
        line1.style.transform = 'rotate(0deg)';
        line2.style.transform = 'rotate(0deg)';
        line3.style.transform = 'rotate(0deg)';
        line1.style.top = '40%';
        line2.style.top = '60%';
        line3.style.top = '80%';
  
      }

    return(
        <header>
            <p><a href='#' onClick={fecharMenuResp}>SorrisoPrime Dental</a></p>
            <ul id='menu-normal'>
                <li><a href='#section-2'>Sobre nós</a></li>
                <li><a href='#section-3'>Serviços</a></li>
                <li><a href='#section-4'>Fedback</a></li>
                <li><a href='#section-5'>Contato</a></li>
            </ul>
            <div id='menu-responsivo' onClick={AbrirMenu}>
                <div id='bar-1'></div>
                <div id='bar-2'></div>
                <div id='bar-3'></div>
            </div>
            <ul id='conteudo-menu-responsivo'>
                <li><a href='#section-2' onClick={fecharMenuResp}>Sobre nós</a></li>
                <li><a href='#section-3' onClick={fecharMenuResp}>Serviços</a></li>
                <li><a href='#section-4' onClick={fecharMenuResp}>Fedback</a></li>
                <li><a href='#section-5' onClick={fecharMenuResp}>Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;