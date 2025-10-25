const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `S’han instal·lat \\(n = 50\\) aerogeneradors de 3 pales en un parc eòlic. 
               El diàmetre de l’àrea d’escombratge de les pales és \\(d = 77 \\, \\text{m}\\) i el rendiment dels aerogeneradors \\(\\eta_{\\text{aerog}} = 0{,}68\\). 
               S’estima que la velocitat mitjana del vent al parc és \\(v = 25 \\, \\text{km/h}\\); el parc està en funcionament 300 dies a l’any i obté energia 18 hores diàries. 
               La potència mitjana del vent \\(P_{\\text{vent}}\\) es pot estimar, per a un aerogenerador, com l’energia cinètica del vent per unitat de temps mitjançant l’expressió:
               \\[
               P_{\\text{vent}} = \\frac{1}{2} \\rho A v^3
               \\]
               en què \\(A\\) és l’àrea que escombren les pales de l’aerogenerador, \\(\\rho\\) és la densitat de l’aire i \\(v\\) és la velocitat del vent. 
               D’aquesta potència, el coeficient d’aprofitament del vent és \\(c_a = 0{,}42\\).
               
               Sabent que \\(1{,}225 \\, \\text{g}\\) d’aire ocupen un volum d’\\(1 \\, \\text{m}^3\\), determineu:
               <br><strong>a)</strong> La potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador. [0,5 punts]
               <br><strong>b)</strong> La potència elèctrica útil \\(P_{\\text{útil}}\\) que generarà cada aerogenerador. [0,5 punts]
               <br><strong>c)</strong> L’energia elèctrica total \\(E_{\\text{total}}\\) que es generarà al parc durant un any. [0,5 punts]
               <br><strong>d)</strong> Els ingressos que tindrà el parc eòlic si el preu de venda de l’energia eòlica és \\(p_{\\text{venda}} = 7{,}624\\) cèntims d’euro per \\(\\text{kWh}\\). [0,5 punts]
               <br><strong>e)</strong> En quin percentatge disminuirien els ingressos anteriors si la velocitat mitjana del vent es reduís un 10 %.
               <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea d’escombratge de les pales:
            \\[
            A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
            \\]
            - Densitat de l’aire:
            \\[
            \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
            \\]
            - Velocitat del vent (en \\(\\text{m/s}\\)):
            \\[
            v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
            \\]
            - Potència del vent:
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Aplicant el rendiment de l’aerogenerador:
            \\[
            P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Nombre total d'hores operatives a l'any:
            \\[
            h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
            \\]
            - Energia generada per un aerogenerador:
            \\[
            E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
            \\]
            - Energia total generada per 50 aerogeneradors:
            \\[
            E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Ingressos totals:
            \\[
            Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            - Nova velocitat del vent:
            \\[
            v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
            \\]
            - Nova potència del vent:
            \\[
            P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
            \\]
            - Nova potència útil:
            \\[
            P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
            \\]
            - Nova energia total:
            \\[
            E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
            \\]
            - Nous ingressos:
            \\[
            Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
            \\]
            - Percentatge de disminució:
            \\[
            \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials_i_assaigs",
        text: `La figura mostra la corba tensió-deformació obtinguda en un assaig de tracció. Quin valor aproximat té el mòdul elàstic del material?`,
        options: [
            { text: "250 GPa", value: "a" },
            { text: "110 GPa", value: "b" },
            { text: "265 GPa", value: "c" },
            { text: "62,5 GPa", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>Càlcul del mòdul elàstic:</strong>
            <br><br>
            Tensió aplicada:
            \\[
            \\sigma = 250\\ \\text{MPa}
            \\]
            \\[
            250\\ \\text{MPa} = 250 \\times 10^6\\ \\text{Pa}
            \\]
            <br>
            Deformació:
            \\[
            \\varepsilon = 0,00227
            \\]
            <br>
            Mòdul elàstic:
            \\[
            E = \\frac{\\sigma}{\\varepsilon}
            \\]
            \\[
            E = \\frac{250 \\times 10^6\\ \\text{Pa}}{0,00227}
            \\]
            \\[
            E = 110132158590,30838\\ \\text{Pa}
            \\]
            \\[
            E = 110,13215859030838\\ \\text{GPa}
            \\]
            \\[
            E \\approx 110\\ \\text{GPa}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `Un cotxe està equipat amb un motor de combustió interna de quatre cilindres en línia de 79,5 mm de diàmetre i 80,5 mm de cursa. Quina és la cilindrada del motor?`,
        options: [
            { text: "399,6 cm³", value: "a" },
            { text: "3 196 cm³", value: "b" },
            { text: "1 598 cm³", value: "c" },
            { text: "8 042 cm³", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <strong>Càlcul del volum total:</strong>
            <br>
            Diàmetre del cilindre: \\(D = 79,5 \\, \\text{mm} = 0,0795 \\, \\text{m}\\)  
            <br>
            Cursa del pistó: \\(C = 80,5 \\, \\text{mm} = 0,0805 \\, \\text{m}\\)
            <br><br>
            Volum d'un cilindre:  
            \\[
            V_{1 \\, cilindre} = \\frac{\\pi}{4} \\times D^2 \\times C
            \\]
            \\[
            V_{1 \\, cilindre} = \\frac{\\pi}{4} \\times (0,0795 \\, \\text{m})^2 \\times (0,0805 \\, \\text{m})
            \\]
            \\[
            V_{1 \\, cilindre} = 0,00040084 \\, \\text{m}^3
            \\]
            <br>
            Volum total per 4 cilindres:  
            \\[
            V_{total} = 4 \\times 0,00040084 \\, \\text{m}^3 = 0,00160336 \\, \\text{m}^3
            \\]
            \\[
            V_{total} \\times 10^6 = 1,603,36 \\, \\text{cm}^3
            \\]
            \\[
            V_{total} \\approx 1,598 \\, \\text{cm}^3
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "motors_reductors",
        text: `Una porta corredissa automàtica és accionada mitjançant un motor que gira a \\(n_{\\text{mot}} = 1\,500\\,\\text{min}^{-1}\\) i un reductor. L’eix de sortida del reductor és un pinyó de radi primitiu \\(r = 30\\,\\text{mm}\\) que acciona una cremallera fixa a la porta. En règim nominal, la porta es trasllada a una velocitat constant \\(v_{\\text{nom}} = 0,12\\,\\text{m/s}\\). Determineu la relació de transmissió entre la velocitat angular de l’eix de sortida del reductor i la velocitat angular de l’eix del motor: \\(\\tau = \\frac{\\omega_{\\text{red}}}{\\omega_{\\text{mot}}}\\).`,
        options: [
            { text: "39,27", value: "a" },
            { text: "0,7639 × 10^{-3}", value: "b" },
            { text: "25,46 × 10^{-3}", value: "c" },
            { text: "infinit", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <strong>Càlcul de la relació de transmissió:</strong><br>
            \\[
            \\tau = \\frac{\\omega_{red}}{\\omega_{mot}}
            \\]<br>
            Motor nominal:<br>
            \\[
            n_{mot} = 1500\\,\\text{min}^{-1}
            \\]<br>
            Velocitat angular motor:<br>
            \\[
            \\omega_{mot} = \\frac{2\\pi \\times n_{mot}}{60\\,\\text{s/min}} = \\frac{2\\pi \\times 1500\\,\\text{min}^{-1}}{60\\,\\text{s/min}} = 157,08\\,\\text{rad/s}
            \\]<br>
            Velocitat de la porta:<br>
            \\[
            v_{nom} = 0,12\\,\\text{m/s}
            \\]<br>
            Radi del pinyó:<br>
            \\[
            r = 30\\,\\text{mm} = 0,03\\,\\text{m}
            \\]<br>
            Velocitat angular reductor:<br>
            \\[
            \\omega_{red} = \\frac{v_{nom}}{r} = \\frac{0,12\\,\\text{m/s}}{0,03\\,\\text{m}} = 4\\,\\text{rad/s}
            \\]<br>
            Relació de transmissió:<br>
            \\[
            \\tau = \\frac{\\omega_{red}}{\\omega_{mot}} = \\frac{4\\,\\text{rad/s}}{157,08\\,\\text{rad/s}} = 0,02546 = 25,46 \\times 10^{-3}
            \\]<br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "motors_reductors",
        text: `Es vol aixecar una massa \\(m = 1\,200\\,\\text{kg}\\) utilitzant una premsa hidràulica. La secció transversal de l’èmbol gran és \\(A_{gran} = 30\,000\\,\\text{mm}^2\\) i la del petit és \\(A_{petit} = 1\,000\\,\\text{mm}^2\\). Preneu \\(g = 9,807\\,\\text{m/s}^2\\). Determineu la força \\(F\\) que cal exercir sobre l’èmbol petit: \\(F = ?\\).`,
        options: [
            { text: "353,1 kN", value: "a" },
            { text: "392,3 N", value: "b" },
            { text: "40 N", value: "c" },
            { text: "36 kN", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>Càlcul de la força sobre l'èmbol petit:</strong><br>
Pressió hidràulica:<br>
\\[
F_1 = F_2 \\cdot \\frac{A_1}{A_2}
\\]<br>
Massa a aixecar:<br>
\\[
m = 1200\\,\\text{kg}
\\]<br>
Gravetat:<br>
\\[
g = 9,807\\,\\text{m/s^2}
\\]<br>
Força sobre l'èmbol gran:<br>
\\[
F_2 = m \\cdot g = 1200\\,\\text{kg} \\times 9,807\\,\\text{m/s^2} = 11768,4\\,\\text{N}
\\]<br>
Àrea de l'èmbol petit:<br>
\\[
A_1 = 1000\\,\\text{mm^2} = 1000 \\times 10^{-6}\\,\\text{m^2} = 0,001\\,\\text{m^2}
\\]<br>
Àrea de l'èmbol gran:<br>
\\[
A_2 = 30000\\,\\text{mm^2} = 30000 \\times 10^{-6}\\,\\text{m^2} = 0,03\\,\\text{m^2}
\\]<br>
Força sobre l'èmbol petit:<br>
\\[
F_1 = F_2 \\cdot \\frac{A_1}{A_2} = 11768,4\\,\\text{N} \\cdot \\frac{0,001\\,\\text{m^2}}{0,03\\,\\text{m^2}} 
\\]\\
\\[
F_1 = 392,28\\,\\text{N}
\\]
<br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    }
];

