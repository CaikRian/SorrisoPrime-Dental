import './style.css';
import video1 from './video/video1.mp4';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import logo1 from './img/logo1.png'

function Home(){

    return(
        <main>
            
            <video src={video1} autoPlay loop preload/>
            <div id='plano-fundo-responsivo'></div>
            <section id='section-1'>
                <h1>SorrisoPrime Dental</h1>
                <h3>Transformando Sorrisos, Cuidando de Você!</h3>
            </section>
            <section id='section-2'>
            <h2>Sobre Nós</h2>
                <p>
                &nbsp; Bem-vindo à SorrisoPrime Dental, onde a nossa paixão pela odontologia 
                    se une ao compromisso de proporcionar sorrisos saudáveis e radiantes. 
                </p> 
                <p>
                &nbsp; Com uma equipe dedicada de profissionais qualificados, estamos empenhados em 
                    oferecer cuidados odontológicos excepcionais, focados na sua saúde bucal e 
                    no seu bem-estar geral.
                </p>
                <p>
                &nbsp; Na SorrisoPrime, acreditamos que cada sorriso é único, 
                    e nosso objetivo é criar uma experiência personalizada que atenda às necessidades 
                    individuais de cada paciente.
                </p>
            </section>
            <div className='img-section'>
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
            </div>
            <section id='section-3'>
            <h2>Serviços oferecidos</h2>
                <p>
                &nbsp; Na SorrisoPrime Dental, oferecemos uma ampla gama de serviços odontológicos para garantir 
                    que você alcance e mantenha a melhor saúde bucal possível. Nossos serviços incluem:
                </p>
            </section>
            <div className='servicos-section-3'>
                <div className='box-servico'>
                    <div className='titulo-servico'>Odontologia Preventiva</div>
                    <ul>
                        <li>Limpeza e profilaxia</li>
                        <li>Check-ups regulares</li>
                        <li>Radiografias dentárias</li>
                    </ul>
                </div>
                <div className='box-servico'>
                    <div className='titulo-servico'>Restauração e Estética</div>
                    <ul>
                        <li>Obturações estéticas</li>
                        <li>Coroas e pontes</li>
                        <li>Clareamento dental</li>
                    </ul>
                </div>
                <div className='box-servico'>
                    <div className='titulo-servico'>Cirurgia Oral</div>
                    <ul>
                        <li>Extrações dentárias</li>
                        <li>Implantes dentários</li>
                        <li>Cirurgias periodontais</li>
                    </ul>
                </div>
                <div className='box-servico'>
                    <div className='titulo-servico'>Ortodontia</div>
                    <ul>
                        <li>Aparelhos fixos e removíveis</li>
                        <li>Tratamentos ortodônticos personalizados</li>
                    </ul>
                </div>
                <div className='box-servico'>
                    <div className='titulo-servico'>Tratamentos Especializados</div>
                    <ul>
                        <li>Endodontia (tratamento de canal)</li>
                        <li>Periodontia (tratamento de gengivas)</li>
                        <li>Odontopediatria (odontologia infantil)</li>
                    </ul>
                </div>
                
            </div>
            <section id='section-4'>
                <h2>Satisfação dos Clientes</h2>
                    <p>
                    &nbsp; Na SorrisoPrime, a satisfação dos nossos clientes é a nossa prioridade. Estamos empenhados em oferecer 
                    um ambiente acolhedor e amigável, onde cada paciente se sinta confortável e confiante em seus cuidados 
                    dentários. Nossos profissionais altamente qualificados utilizam tecnologia de ponta e abordagens inovadoras
                    para garantir procedimentos eficazes e resultados excepcionais.
                    </p>
                    <p>
                    &nbsp; Não apenas buscamos criar sorrisos bonitos, mas também cultivar relacionamentos duradouros com nossos pacientes.
                    A satisfação e o bem-estar de cada pessoa que entra em nossa clínica são a nossa maior recompensa.
                    </p>
                    <p>
                    &nbsp; Venha fazer parte da família SorrisoPrime Dental, onde cuidamos do seu sorriso com dedicação, 
                    expertise e um toque pessoal. Seu sorriso saudável começa aqui!
                    </p>

               
                <div id='section-4-p2'>
                    <div className='box-comentario'>
                        <p>"Encontrei na SorrisoPrime o lugar perfeito para cuidar do meu sorriso. 
                            A equipe é incrivelmente profissional e atenciosa. Cada visita é uma experiência 
                            positiva, e estou muito satisfeita com os resultados dos tratamentos!"</p>
                            <p>~ Ana Carolina M. </p>
                            <span class="material-symbols-outlined">person</span>
                    </div>
                    <div className='box-comentario'>
                        <p>"Desde que comecei a frequentar a SorrisoPrime Dental, minha visão sobre visitar 
                            o dentista mudou completamente. Profissionais competentes, ambiente acolhedor e 
                            resultados que superam as expectativas. Recomendo a todos!"</p>
                        <p>~ Carlos Oliveira</p>
                        <span class="material-symbols-outlined">person</span>
                    </div>
                    <div className='box-comentario'>
                        <p>"A Ortodontia na SorrisoPrime transformou não apenas meu sorriso, mas também 
                            minha autoconfiança. O atendimento personalizado e a abordagem cuidadosa fizeram 
                            toda a diferença. Estou muito grata!"</p>
                        <p>~ Isabela Santos</p>
                        <span class="material-symbols-outlined">person</span>
                    </div>
                    <div className='box-comentario'>
                        <p>"Excelência define a SorrisoPrime Dental! Meu tratamento foi feito com precisão 
                            e atenção aos detalhes. O resultado final superou minhas expectativas, e agora 
                            exibo um sorriso que me deixa orgulhoso. Recomendo sem hesitação!"</p>
                        <p>~ Ricardo Almeida</p>
                        <span class="material-symbols-outlined">person</span>
                    </div>
                    <div className='box-comentario'>
                        <p>"A SorrisoPrime é mais que uma clínica odontológica; é um lugar que se 
                            preocupa verdadeiramente com o paciente. Cada consulta é uma experiência 
                            positiva, e a dedicação da equipe é notável. Estou muito feliz com os cuidados 
                            que recebi!"</p>
                        <p>~ Fernanda Lima</p>
                        <span class="material-symbols-outlined">person</span>
                    </div>
                </div>
            </section>
            <section id='section-5'>
            <p className='sub-titulo'>Agende Já Via WhatsApp!</p>
            <p className='descr-titulo'>
            Você está a um passo de garantir o seu sorriso perfeito! Agende sua consulta na SorrisoPrime Dental 
            de maneira rápida e fácil pelo WhatsApp. Nossa equipe está pronta para atendê-lo e proporcionar a você 
            a melhor experiência em cuidados odontológicos.
            </p>
            <p className='descr-titulo'>
                📍 Endereço: Rua Fictícia, 123 - Bairro Imaginário
                Cidade dos Sorrisos, Estado dos Sonhos
            </p>
            </section>
            <a href='https://web.whatsapp.com/'><img id='logo-zap' src={logo1}/></a>
        </main>
    )

}

export default Home;