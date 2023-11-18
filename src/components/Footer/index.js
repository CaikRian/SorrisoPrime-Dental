import './style.css';

function Footer(){

    return(
        <footer>
            <p>SorrisoPrime Dental | Cuidando do Seu Sorriso com Excelência</p>
            <div className='footer-p2'>
                <div className='footer-divisao'>
                    <p>📍 Endereço: Rua Fictícia, 123 - Bairro Imaginário, Cidade dos Sorrisos, Estado dos Sonhos</p>
                    <p>📞 Telefone: (XX) XXXX-XXXX | 📧 Email: info@sorrisoprime.com</p>
                </div>
                <div className='footer-divisao'>
                    <p>Horário de Funcionamento:</p>
                    <p>Segunda a Sexta: 8h às 18h | Sábado: 9h às 13h</p>
                </div>
                <div className='footer-divisao'>
                    <p>Siga-nos nas Redes Sociais:</p>
                    <p>Facebook | Instagram | Twitter</p>
                </div>
            </div>
            <p>© 2023 SorrisoPrime Dental. Todos os direitos reservados. | Desenvolvido por [Caik Rian].</p>
        </footer>
    );
}

export default Footer;