const questions = [
    {
        type: "exercicis",
        category: "control",
        text: `Es vol dissenyar el circuit que controla l’alarma interior d’avís d’un cotxe. Aquesta alarma ha de sonar quan el cotxe sobrepassa els \\(20\\,\\text{km/h}\\) i es compleix alguna de les condicions següents: que el conductor no porta el cinturó de seguretat cordat o que porta els llums de curt abast apagats quan és fosc. 
            Utilitzant les variables d’estat següents:
            <br>
            <br>Velocitat del cotxe: \\(v = \\{ 1 : \\text{superior a } 20\\,\\text{km/h} ;\\; 0 : \\text{igual o inferior a } 20\\,\\text{km/h} \\)
            <br>Cinturó de seguretat: \\(c = \\{ 1 : \\text{cordat} ;\\; 0 : \\text{descordat} \\)
            <br>Llums quan és fosc: \\(l = \\{ 1 : \\text{encesos} ;\\; 0 : \\text{apagats} \\)
            <br>Alarma: \\(a = \\{ 1 : \\text{sona} ;\\; 0 : \\text{no sona} \\)
            <br><br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
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
        type: "exercicis",
        category: "energia",
        text: `S’instaŀla en una cadira de rodes manual un sistema electromecànic dissenyat per a ajudar l’assistent que empeny la cadira. El sistema d’accionament està format per una bateria ideal d’ió liti de tensió \\(U_{bat} = 12\\,\\text{V}\\) i energia \\(E_{bat} = 240\\,\\text{Wh}\\), un motor de rendiment \\(\\eta_{mot} = 0{,}87\\), un reductor de rendiment \\(\\eta_{red} = 0{,}95\\) i dues rodes auxiliars de diàmetre \\(d = 200\\,\\text{mm}\\) que toquen a terra. La relació de transmissió entre la velocitat de rotació de les rodes \\(n_r\\) i la velocitat de rotació del motor \\(n_{mot}\\) és \\(\\tau = \\dfrac{n_r}{n_{mot}} = 0{,}08\\).
            En les condicions d’estudi, es fa avançar la cadira en línia recta a una velocitat constant \\(v = 3{,}7\\,\\text{km/h}\\) per un terreny horitzontal i sense que les rodes llisquin. El motor consumeix una potència \\(P_{cons} = 75\\,\\text{W}\\). Determineu, per a aquestes condicions:
            <br>
            <br><strong>a)</strong> La velocitat angular de les rodes auxiliars \\(\\omega_r\\) i la velocitat angular a l’eix del motor \\(\\omega_{mot}\\). [0,5 punts]
            <br><strong>b)</strong> La potència a l’eix de les rodes \\(P_{subm}\\). [0,5 punts]
            <br><strong>c)</strong> El parell \\(\\Gamma\\) a l’eix del motor. [0,5 punts]
            <br><strong>d)</strong> El temps màxim de funcionament \\(t\\) del conjunt i la distància màxima recorreguda \\(s_{rec}\\). [1 punt]
            <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Velocitat angular de les rodes i del motor:</strong>
            <br>
            - Velocitat angular de les rodes auxiliars:
            \\[
            \\omega_r = \\frac{v}{r} = \\frac{1,028\\,\\text{m/s}}{0,1\\,\\text{m}} = 10,28\\,\\text{rad/s}
            \\]
            - Velocitat angular del motor:
            \\[
            \\omega_{mot} = \\frac{\\omega_r}{\\tau} = \\frac{10,28\\,\\text{rad/s}}{0,08} = 128,5\\,\\text{rad/s}
            \\]
            <br><strong>b) Potència a l’eix de les rodes:</strong>
            <br>
            - Aplicant rendiment del motor i del reductor:
            \\[
            P_{subm} = P_{cons} \\times \\eta_{mot} \\times \\eta_{red} = 75\\,\\text{W} \\times 0,87 \\times 0,95 = 62,06\\,\\text{W}
            \\]
            <br><strong>c) Parell a l’eix del motor:</strong>
            <br>
            - Potència útil a l’eix del motor:
            \\[
            P_{mot} = P_{cons} \\times \\eta_{mot} = 75\\,\\text{W} \\times 0,87 = 65,25\\,\\text{W}
            \\]
            - Parell:
            \\[
            \\Gamma_{mot} = \\frac{P_{mot}}{\\omega_{mot}} = \\frac{65,25\\,\\text{W}}{128,5\\,\\text{rad/s}} = 0,5077\\,\\text{N·m}
            \\]
            <br><strong>d) Temps màxim de funcionament i distància recorreguda:</strong>
            <br>
            - Energia de la bateria:
            \\[
            E_{bat} = 240\\,\\text{Wh} = 240 \\times 3600\\,\\text{W·s} = 864000\\,\\text{J}
            \\]
            - Temps de funcionament:
            \\[
            t = \\frac{E_{bat}}{P_{cons}} = \\frac{864000\\,\\text{J}}{75\\,\\text{W}} = 11520\\,\\text{s} = 3,2\\,\\text{h}
            \\]
            - Distància màxima recorreguda:
            \\[
            s_{rec} = v \\times t = 1,028\\,\\text{m/s} \\times 11520\\,\\text{s} = 11830\\,\\text{m} = 11,83\\,\\text{km}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Una estufa d’exterior alimentada amb gas butà té un consum regulable d’entre 
            \\(c_{m\\text{ín}} = 450\\,\\text{g/h}\\) i \\(c_{m\\text{àx}} = 800\\,\\text{g/h}\\) de butà. El poder calorífic del butà és \\(p_b = 49,61\\,\\text{MJ/kg}\\) i es distribueix en bombones que contenen una massa de butà de \\(m_b = 12,5\\,\\text{kg}\\). Determineu:
            <br><br>
            <strong>a)</strong> La potència mínima \\(P_{\\text{mín}}\\) i màxima \\(P_{\\text{màx}}\\) de l’estufa. [0,5 punts]
            <br>
            <strong>b)</strong> La durada de funcionament màxima d’una bombona \\(t_{\\text{màx}}\\). [0,5 punts]
            <br>
            <strong>c)</strong> El gràfic de la durada \\(t\\) d’una bombona en hores, en funció del consum \\(c\\) de butà, i indiqueu-ne les escales. [1 punt]
            <br><br>
            Una terrassa de bar té instal·lades \\(n = 3\\) d’aquestes estufes que funcionen durant \\(t_{\\text{bar}} = 10\\,\\text{h/dia}\\) a potència màxima. L’Oficina Catalana del Canvi Climàtic estima un factor d’emissió \\(FE = 2,96\\,\\text{kg CO2/kg butà}\\). Determineu:
            <br>
            <br><strong>d)</strong> La massa de CO2 emesa en un dia de funcionament \\(m_{CO2}\\).
            <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Velocitat angular de les rodes i del motor:</strong>
            <br>
            - Velocitat angular de les rodes auxiliars:
            \\[
            \\omega_r = \\frac{v}{r} = \\frac{1,028\\,\\text{m/s}}{0,1\\,\\text{m}} = 10,28\\,\\text{rad/s}
            \\]
            - Velocitat angular del motor:
            \\[
            \\omega_{mot} = \\frac{\\omega_r}{\\tau} = \\frac{10,28\\,\\text{rad/s}}{0,08} = 128,5\\,\\text{rad/s}
            \\]
            <br><strong>b) Potència a l’eix de les rodes:</strong>
            <br>
            - Aplicant rendiment del motor i del reductor:
            \\[
            P_{subm} = P_{cons} \\times \\eta_{mot} \\times \\eta_{red} = 75\\,\\text{W} \\times 0,87 \\times 0,95 = 62,06\\,\\text{W}
            \\]
            <br><strong>c) Parell a l’eix del motor:</strong>
            <br>
            - Potència útil a l’eix del motor:
            \\[
            P_{mot} = P_{cons} \\times \\eta_{mot} = 75\\,\\text{W} \\times 0,87 = 65,25\\,\\text{W}
            \\]
            - Parell:
            \\[
            \\Gamma_{mot} = \\frac{P_{mot}}{\\omega_{mot}} = \\frac{65,25\\,\\text{W}}{128,5\\,\\text{rad/s}} = 0,5077\\,\\text{N·m}
            \\]
            <br><strong>d) Temps màxim de funcionament i distància recorreguda:</strong>
            <br>
            - Energia de la bateria:
            \\[
            E_{bat} = 240\\,\\text{Wh} = 240 \\times 3600\\,\\text{W·s} = 864000\\,\\text{J}
            \\]
            - Temps de funcionament:
            \\[
            t = \\frac{E_{bat}}{P_{cons}} = \\frac{864000\\,\\text{J}}{75\\,\\text{W}} = 11520\\,\\text{s} = 3,2\\,\\text{h}
            \\]
            - Distància màxima recorreguda:
            \\[
            s_{rec} = v \\times t = 1,028\\,\\text{m/s} \\times 11520\\,\\text{s} = 11830\\,\\text{m} = 11,83\\,\\text{km}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
    type: "exercicis",
    category: "maquines",
    text: `El fanal de massa \\(m = 30\\,\\text{kg}\\) penja del punt mitjà de la barra \\(BO\\) de longitud \\(L_{BO} = 2L\\), que està articulada a la paret en el punt \\(O\\). El tirant \\(AB\\) és d’acer (de límit elàstic \\(\\sigma = 250\\,\\text{MPa}\\)) i té un diàmetre \\(d = 4\\,\\text{mm}\\) que manté el sistema en equilibri (vegeu la figura). Les masses de tots els elements excepte la del fanal són negligibles.<br>
    Determineu:
    <br><br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la barra \\(BO\\). [0,5 punts]
    <br><strong>b)</strong> La força \\(T_{AB}\\) a la qual està sotmès el tirant. [0,5 punts]
    <br><strong>c)</strong> La tensió \\(\\sigma_{AB}\\) del tirant. [0,5 punts]
    <br><strong>d)</strong> Les forces horitzontal \\(F_H\\) i vertical \\(F_V\\) a l’articulació \\(O\\). [0,5 punts]
    <br><strong>e)</strong> Què passaria si el diàmetre del cable d’acer fos \\(d' = 1\\,\\text{mm}\\)? Justifiqueu breument la resposta. [0,5 punts]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge del diagrama de la barra amb fanal">`,
    correctAnswer: "",  // Exercici obert
    steps: `
        <strong>a) Diagrama de cos lliure:</strong>
        <br>
        <img src="ruta/a/imatgeDiagrama.jpg" alt="Imatge per al diagrama de cos lliure">
        <br><br><strong>b) Força al tirant \\(T_{AB}\\):</strong>
        <br>
        - Calculant l’equilibri de moments respecte al punt \\(O\\):<br>
        \\[
        T_{AB} = 254,8\\,\\text{N}
        \\]
        <br><strong>c) Tensió del tirant \\(\\sigma_{AB}\\):</strong>
        <br>
        - Tensió en el tirant d’acer (àrea transversal \\(A = \\pi d^2/4\\)):<br>
        \\[
        \\sigma_{AB} = 20,28\\,\\text{MPa}
        \\]
        <br><strong>d) Forces a l’articulació \\(O\\):</strong>
        <br>
        \\[
        F_H = 254,8\\,\\text{N}, \\quad F_V = 294,2\\,\\text{N}
        \\]
        <br><strong>e) Diàmetre reduït \\(d' = 1\\,\\text{mm}\\):</strong>
        <br>
        - Nova tensió al tirant:<br>
        \\[
        \\sigma'_{AB} = 324,4\\,\\text{MPa}
        \\]<br>
        - Com que \\(\\sigma'_{AB}\\) és superior al límit elàstic del material (250 MPa), el tirant es deformaria permanentment i de manera irreversible. No podria mantenir la posició d’equilibri estudiada.
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`
},
    {
    type: "exercicis",
    category: "electrics",
    text: `Un calefactor elèctric consta de dues resistències idèntiques \\(R_1\\) i \\(R_2\\) que es poden connectar en sèrie o en paral·lel en funció d’un selector que permet triar dos nivells de potència diferents. El fil de cada resistència té una llargària \\(L = 20\\,\\text{m}\\), un diàmetre \\(d = 0,1\\,\\text{mm}\\) i una resistivitat \\(\\rho = 16 \\times 10^{-9}\\,\\Omega\\,\\text{m}\\). El calefactor es connecta a una tensió \\(U = 230\\,\\text{V}\\). Determineu:
    <br><br><strong>a)</strong> La resistència \\(R_1\\). [0,5 punt]
    <br><strong>b)</strong> La resistència màxima \\(R_{màx}\\) i mínima \\(R_{mín}\\) del circuit elèctric. [1 punt]
    <br><strong>c)</strong> La potència màxima que consumeix el calefactor \\(P_{màx}\\). [0,5 punts]
    <br><strong>d)</strong> Si el calefactor funciona a potència màxima durant 1 hora al dia, 30 dies al mes, i el preu del kW·h consumit és \\(p = 0,15\\,\\text{€}\\,\\text{per}\\,\\text{kW·h} = 0,15\\,\\text{€/kW·h}\\), determineu el cost mensual \\(c\\). [0,5 punts]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge del calefactor">`,
    correctAnswer: "",  // Exercici obert
    steps: `
        <strong>a) Resistència de cada fil \\(R_1\\):</strong>
        <br>
        - Fórmula de resistència d’un conductor:
        \\[
        R_1 = \\rho \\frac{L}{A} = \\rho \\frac{L}{\\pi (d/2)^2}
        \\]<br>
        \\[
        R_1 = 16 \\times 10^{-9} \\frac{20}{\\pi (0,0001/2)^2} \\approx 40,74\\,\\Omega
        \\]
        <br><strong>b) Resistència màxima i mínima del circuit:</strong>
        <br>
        - Connexió en sèrie: \\(R_{màx} = R_1 + R_2 = 40,74 + 40,74 = 81,49\\,\\Omega\\)<br>
        - Connexió en paral·lel: \\(R_{mín} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{40,74^2}{81,49} \\approx 20,37\\,\\Omega\\)
        <br><strong>c) Potència màxima consumida \\(P_{màx}\\):</strong>
        <br>
        - Potència elèctrica:
        \\[
        P_{màx} = \\frac{U^2}{R_{mín}} = \\frac{230^2}{20,37} \\approx 2597\\,\\text{W} = 2,597\\,\\text{kW}
        \\]
        <br><strong>d) Cost mensual del consum:</strong>
        <br>
        - Energia consumida en un mes:
        \\[
        E = P_{màx} \\cdot t_{mes} = 2,597\\,\\text{kW} \\times 30\\,\\text{h} = 77,91\\,\\text{kW·h}
        \\]<br>
        - Cost mensual:
        \\[
        c = E \\cdot p = 77,91 \\times 0,15 \\approx 11,69\\,\\text{€}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`
},
    {
    type: "exercicis",
    category: "control",
    text: `Es té un sistema combinatori binari de 3 entrades que controla l’encesa d’un cartell lluminós. El cartell s’il·lumina si el conjunt dels 3 dígits d’entrada és un número capicua.
    <br><br>
    Utilitzant les variables d’estat següents:<br>
    \\[
    x_1 \\in \\{0,1\\}, \\quad x_2 \\in \\{0,1\\}, \\quad x_3 \\in \\{0,1\\}
    \\]
    Estat del cartell:<br>
    \\[
    c \\in \\{1: \\text{il·luminat},\\; 0: \\text{apagat}\\}
    \\]
    <br>
    Determineu:
    <br><br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
    <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
    <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge del sistema combinatori">`,
    correctAnswer: "",  // Exercici obert
    steps: `
        <strong>a) Taula de veritat del sistema:</strong>
        <br>
        <img src="ruta/a/imatgeTaulaVeritat.jpg" alt="Imatge de la taula de veritat">
        <br><br>
        <strong>b) Funció lògica del sistema:</strong>
        <br>
        - Un nombre capicua de 3 bits compleix que el primer i l’últim bit són iguals.<br>
        - Per tant, el cartell s’il·lumina quan \\(x_1 = x_3\\).<br><br>
        Expressió lògica:
        \\[
        c = x_1 \\cdot x_3 + \\overline{x_1} \\cdot \\overline{x_3}
        \\]
        <br><br>
        <strong>c) Esquema de portes lògiques equivalent:</strong>
        <br>
        <img src="ruta/a/imatgePortesLogiques.jpg" alt="Imatge de l'esquema de portes lògiques">
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`
},
    {
    type: "exercicis",
    category: "maquines",
    text: `Un mòbil de joguina penja de la barra en forma de colze \\(OC\\) articulada al punt \\(O\\). El tirant \\(AB\\) manté el sistema en equilibri.
    <br><br>
    En les condicions d’anàlisi, la massa \\(m_2\\) té un valor \\(m_2 = 0,2\\,\\text{kg}\\).
    Considerant la massa de totes les barres i cables negligible, determineu:
    <br><br>
    <strong>a)</strong> El valor de les masses \\(m_1\\), \\(m_3\\) i \\(m_4\\) perquè el sistema estigui en equilibri en la posició que mostra la figura i la força \\(T_{CD}\\) del cable \\(CD\\). [1 punt]
    <br>
    <strong>b)</strong> El diagrama de sòlid lliure de la barra \\(OBC\\). [0,5 punts]
    <br>
    <strong>c)</strong> La força \\(T_{AB}\\) a la qual està sotmès el tirant \\(AB\\). [0,5 punts]
    <br>
    <strong>d)</strong> Les forces vertical \\(F_V\\) i horitzontal \\(F_H\\) a l’articulació \\(O\\). [0,5 punts]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge del sistema mecànic">`,
    correctAnswer: "",
    steps: `
        <strong>a) Condicions d’equilibri:</strong><br>
        S’apliquen les equacions d’equilibri estàtic:
        \\[
        \\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0
        \\]
        <br><br>
        Resultats:
        \\[
        m_1 = \\frac{2}{3}\\,\\text{kg}, \\quad
        m_3 = 0,1\\,\\text{kg}, \\quad
        m_4 = 0,2\\,\\text{kg}
        \\]
        \\[
        T_{CD} = 11,44\\,\\text{N}
        \\]
        <br><br>
        <strong>b) Diagrama de sòlid lliure de la barra \\(OBC\\):</strong><br>
        <img src="ruta/a/imatgeDiagramaSLL.jpg" alt="Diagrama de sòlid lliure de la barra OBC">
        <br><br>
        <strong>c) Força al tirant \\(AB\\):</strong>
        \\[
        T_{AB} = 18,31\\,\\text{N}
        \\]
        <br><br>
        <strong>d) Forces a l’articulació \\(O\\):</strong>
        \\[
        F_H = 18,31\\,\\text{N}, \\quad
        F_V = 11,44\\,\\text{N}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "energia",
    text: `Un cotxe de benzina de massa \\(m = 1\\,650\\,\\text{kg}\\) es desplaça per un terreny horitzontal i accelera de \\(v_1 = 80\\,\\text{km/h}\\) a \\(v_2 = 120\\,\\text{km/h}\\) en un temps \\(t = 6,9\\,\\text{s}\\).
    <br><br>
    El poder calorífic de la benzina és \\(p = 46\\,\\text{MJ/kg}\\) i la seva densitat és \\(\\rho = 0,72\\,\\text{g/cm}^3\\).
    El rendiment del conjunt motor–transmissió és \\(\\eta = 0,4\\).
    Suposant negligible la fricció amb l’aire, determineu:
    <br><br>
    <strong>a)</strong> La potència mitjana desenvolupada pel motor \\(P_{\\text{útil}}\\). [1 punt]
    <br>
    <strong>b)</strong> L’energia consumida \\(E_{\\text{cons}}\\). [0,5 punts]
    <br>
    <strong>c)</strong> El volum de combustible utilitzat \\(V\\). [1 punt]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb el moviment del vehicle">`,
    correctAnswer: "",
    steps: `
        <strong>a) Potència mitjana desenvolupada pel motor:</strong><br>
        <br>
        - Conversió de velocitats a unitats del SI:
        \\[
        v_1 = 80\\,\\text{km/h} = 22,22\\,\\text{m/s}, \\quad
        v_2 = 120\\,\\text{km/h} = 33,33\\,\\text{m/s}
        \\]
        <br>
        - Variació de l’energia cinètica:
        \\[
        \\Delta E_c = \\frac{1}{2} m \\left(v_2^2 - v_1^2\\right)
        \\]
        \\[
        \\Delta E_c = \\frac{1}{2} \\cdot 1650 \\cdot (33,33^2 - 22,22^2) = 509\\,300\\,\\text{J}
        \\]
        <br>
        - Potència útil mitjana:
        \\[
        P_{\\text{útil}} = \\frac{\\Delta E_c}{t} = \\frac{509\\,300}{6,9} = 73\\,810\\,\\text{W}
        \\]
        \\[
        P_{\\text{útil}} = 73,81\\,\\text{kW}
        \\]
        <br><br>
        <strong>b) Energia consumida:</strong><br>
        <br>
        - Tenint en compte el rendiment:
        \\[
        E_{\\text{cons}} = \\frac{\\Delta E_c}{\\eta} = \\frac{509\\,300}{0,4} = 1\\,273\\,250\\,\\text{J}
        \\]
        \\[
        E_{\\text{cons}} = 1\\,273\\,\\text{kJ}
        \\]
        <br><br>
        <strong>c) Volum de combustible utilitzat:</strong><br>
        <br>
        - Massa de combustible consumida:
        \\[
        m_{\\text{comb}} = \\frac{E_{\\text{cons}}}{p} = \\frac{1\\,273\\,250}{46 \\times 10^6} = 0,0277\\,\\text{kg}
        \\]
        <br>
        - Conversió de densitat:
        \\[
        \\rho = 0,72\\,\\text{g/cm}^3 = 720\\,\\text{kg/m}^3
        \\]
        <br>
        - Volum de combustible:
        \\[
        V = \\frac{m_{\\text{comb}}}{\\rho} = \\frac{0,0277}{720} = 3,844 \\times 10^{-5}\\,\\text{m}^3
        \\]
        \\[
        V = 38,44\\,\\text{cm}^3
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "motors",
    text: `Una cadira de rodes elèctrica utilitza una bateria ideal de capacitat \\(c = 74\\,\\text{Ah}\\) i tensió \\(U = 12\\,\\text{V}\\) per a avançar per una pujada on l’angle que forma el perfil del carrer amb l’horitzontal és \\(\\alpha_1 = 6°\\).
    <br><br>
    La massa del conjunt persona més cadira és \\(m = 190\\,\\text{kg}\\) i avancen a una velocitat constant \\(v = 5\\,\\text{km/h}\\).
    El rendiment del conjunt motor–reductor és \\(\\eta = 0,81\\).
    Si la fricció amb l’aire es considera negligible, determineu:
    <br><br>
    <strong>a)</strong> La potència consumida pel motor \\(P_{\\text{cons}}\\). [0,5 punts]
    <br>
    <strong>b)</strong> L’energia disponible a la bateria \\(E_{\\text{bat}}\\). [0,5 punts]
    <br>
    <strong>c)</strong> El temps màxim de funcionament \\(t_{\\text{màx}}\\) de la cadira i la distància màxima \\(s_{\\text{màx}}\\) recorreguda en les condicions descrites. [1 punt]
    <br>
    <strong>d)</strong> La reducció de la distància màxima recorreguda \\(\\Delta s\\) si, a la mateixa velocitat, la inclinació fos \\(\\alpha_2 = 10°\\). [0,5 punts]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la cadira de rodes">`,
    correctAnswer: "",
    steps: `
        <strong>a) Potència consumida pel motor:</strong><br>
        <br>
        - Conversió de la velocitat:
        \\[
        v = 5\\,\\text{km/h} = 1,389\\,\\text{m/s}
        \\]
        <br>
        - Força necessària per pujar el pendent:
        \\[
        F = m g \\sin(\\alpha_1)
        \\]
        \\[
        F = 190 \\cdot 9,81 \\cdot \\sin(6°) = 194,9\\,\\text{N}
        \\]
        <br>
        - Potència mecànica útil:
        \\[
        P_{\\text{útil}} = F \\cdot v = 194,9 \\cdot 1,389 = 270,7\\,\\text{W}
        \\]
        <br>
        - Potència consumida:
        \\[
        P_{\\text{cons}} = \\frac{P_{\\text{útil}}}{\\eta} = \\frac{270,7}{0,81} = 334\\,\\text{W}
        \\]
        <br><br>
        <strong>b) Energia disponible a la bateria:</strong><br>
        <br>
        - Energia en Wh:
        \\[
        E_{\\text{bat}} = U \\cdot c = 12 \\cdot 74 = 888\\,\\text{Wh}
        \\]
        <br>
        - Conversió a joules:
        \\[
        E_{\\text{bat}} = 888 \\cdot 3600 = 3\\,196\\,800\\,\\text{J}
        \\]
        \\[
        E_{\\text{bat}} = 3\\,197\\,\\text{kJ}
        \\]
        <br><br>
        <strong>c) Temps i distància màxima recorreguda:</strong><br>
        <br>
        - Temps màxim de funcionament:
        \\[
        t_{\\text{màx}} = \\frac{E_{\\text{bat}}}{P_{\\text{cons}}} = \\frac{3\\,196\\,800}{334} = 9\\,570\\,\\text{s}
        \\]
        \\[
        t_{\\text{màx}} = 2,659\\,\\text{h}
        \\]
        <br>
        - Distància màxima:
        \\[
        s_{\\text{màx}} = v \\cdot t = 5 \\cdot 2,659 = 13,29\\,\\text{km}
        \\]
        <br><br>
        <strong>d) Reducció de la distància amb \\(\\alpha_2 = 10°\\):</strong><br>
        <br>
        - Nova força:
        \\[
        F_2 = m g \\sin(10°) = 323,5\\,\\text{N}
        \\]
        <br>
        - Nova potència consumida:
        \\[
        P_{\\text{cons},2} = \\frac{F_2 \\cdot v}{\\eta} = \\frac{323,5 \\cdot 1,389}{0,81} = 555\\,\\text{W}
        \\]
        <br>
        - Nou temps de funcionament:
        \\[
        t_2 = \\frac{E_{\\text{bat}}}{P_{\\text{cons},2}} = 1,25\\,\\text{h}
        \\]
        <br>
        - Nova distància:
        \\[
        s_2 = 5 \\cdot 1,25 = 8,00\\,\\text{km}
        \\]
        <br>
        - Reducció de distància:
        \\[
        \\Delta s = 13,29 - 8,00 = 5,292\\,\\text{km}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "energia",
    text: `Per a mantenir la temperatura d’un hivernacle entre \\(15\\,°\\text{C}\\) i \\(18\\,°\\text{C}\\), s’utilitza una caldera d’aigua de rendiment \\(\\eta_c = 0,91\\) que funciona amb gasoil com a combustible.
    <br><br>
    De mitjana, la caldera subministra una potència \\(P_{subm} = 1\\,758\\,\\text{kW}\\) durant \\(4\\) hores al dia, \\(170\\) dies l’any.
    El poder calorífic del gasoil és \\(p_c = 44,8\\,\\text{MJ/kg}\\), la seva densitat és \\(\\rho_{gasoil} = 0,85\\,\\text{kg/L}\\), i el seu cost és \\(c_{gasoil} = 0,893\\,\\text{€/L}\\)`,
    correctAnswer: "",
    steps: `
        <strong>a) Energia subministrada i energia consumida:</strong><br>
        <br>
        - Temps total de funcionament anual:
        \\[
        t = 4 \\cdot 170 = 680\\,\\text{h}
        \\]
        <br>
        - Energia subministrada:
        \\[
        E_{subm} = P_{subm} \\cdot t = 1\\,758\\,\\text{kW} \\cdot 680\\,\\text{h}
        \\]
        \\[
        E_{subm} = 4,304 \\times 10^{12}\\,\\text{J}
        \\]
        <br>
        - Energia consumida per la caldera:
        \\[
        E_{cons} = \\frac{E_{subm}}{\\eta_c} = \\frac{4,304 \\times 10^{12}}{0,91} = 4,729 \\times 10^{12}\\,\\text{J}
        \\]
        <br><br>
        <strong>b) Volum anual de gasoil consumit:</strong><br>
        <br>
        - Massa de combustible:
        \\[
        m = \\frac{E_{cons}}{p_c} = \\frac{4,729 \\times 10^{12}}{44,8 \\times 10^6} = 105\\,600\\,\\text{kg}
        \\]
        <br>
        - Volum de gasoil:
        \\[
        V = \\frac{m}{\\rho_{gasoil}} = \\frac{105\\,600}{0,85} = 124\\,200\\,\\text{L} = 124,2\\,\\text{m}^3
        \\]
        <br><br>
        <strong>c) Cost anual del carburant:</strong><br>
        \\[
        c_{tot} = V \\cdot c_{gasoil} = 124\\,200 \\cdot 0,893\\,\\text{€} = 110\\,900\\,\\text{€} = 110,9\\,\\text{k€}
        \\]
        <br><br>
        <strong>d) Emissions anuals de CO\\(_2\\):</strong><br>
        \\[
        m_{CO_2} = V \\cdot FE = 124\\,200 \\cdot 2,79 = 346,5 \\times 10^3\\,\\text{kg}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "control",
    text: `Una màquina de producció en sèrie disposa de dos polsadors: l’un s’activa amb la mà i l’altre amb el peu. Per a posar en marxa la màquina, l’operari ha de prémer, com a mínim, un dels dos polsadors. A més, hi ha un interruptor d’emergència, que quan s’acciona atura la màquina.  
    <br><br>
    Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
    <br>
    polsador de mà: \\(m = \\{ 1:\\text{polsador activat},\\ 0:\\text{polsador no activat} \\}\\)  
    polsador de peu: \\(p = \\{ 1:\\text{polsador activat},\\ 0:\\text{polsador no activat} \\}\\)  
    interruptor d’emergència: \\(e = \\{ 1:\\text{interruptor accionat},\\ 0:\\text{interruptor no accionat} \\}\\)  
    estat de la màquina: \\(c = \\{ 1:\\text{en funcionament},\\ 0:\\text{aturada} \\}\\)
    <br><br>
    <strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]  
    <br>
    <strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]  
    <br>
    <strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]`,
    correctAnswer: "",
    steps: `
        <strong>a) Taula de veritat:</strong><br>
        <br>
        <img src="ruta/a/imatgeTaula.jpg" alt="Espai per a la taula de veritat">
        <br><br>
        <strong>b) Funció lògica simplificada:</strong><br>
        <br>
        \\[
        c = \\overline{e} \\cdot (m + p)
        \\]
        <br><br>
        <strong>c) Esquema de portes lògiques:</strong><br>
        <br>
        <img src="ruta/a/imatgePortes.jpg" alt="Espai per a l’esquema de portes">`
},
    {
    type: "exercicis",
    category: "maquines",
    text: `La barra OB, de massa negligible, sosté una bola de massa \\(m = 200\\,\\text{kg}\\). La barra està articulada a O i el sistema es troba en equilibri gràcies al tirant AC de diàmetre \\(d = 3\\,\\text{mm}\\). El punt C és el punt mitjà de la barra OB.
    <br><br>
    <strong>a)</strong> Dibuixeu el diagrama de sòlid lliure de la barra OB. [0,5 punts]  
    <br>
    <strong>b)</strong> Determineu la força a la qual està sotmès el tirant AC. [0,5 punts]  
    <br>
    <strong>c)</strong> Determineu les forces horitzontal \\(F_H\\) i vertical \\(F_V\\) a l’articulació O. [1 punt]  
    <br>
    <strong>d)</strong> Determineu la tensió normal \\(\\sigma\\) del tirant. [0,5 punts]`,
    correctAnswer: "",
    steps: `
        <strong>a) Diagrama de sòlid lliure:</strong><br>
        <br>
        <img src="ruta/a/imatgeDiagrama.jpg" alt="Espai per al diagrama de sòlid lliure">
        <br><br>
        <strong>b) Força al tirant AC:</strong><br>
        <br>
        - Considerant l’equilibri de moments i la massa de la bola:
        \\[
        F_{AC} = m g \\cdot factor = 3923\\,\\text{N}
        \\]
        <br><br>
        <strong>c) Forces a l’articulació O:</strong><br>
        <br>
        \\[
        F_H = 3923\\,\\text{N}, \\quad F_V = 1961\\,\\text{N}
        \\]
        <br><br>
        <strong>d) Tensió normal del tirant:</strong><br>
        <br>
        \\[
        \\sigma = \\frac{F_{AC}}{A} = \\frac{F_{AC}}{\\pi d^2 / 4} = 555\\,\\text{MPa}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "energia",
    text: `Una central hidroelèctrica aprofita l’energia d’un salt d’aigua d’altura \\(h = 61,9\\,\\text{m}\\). La central funciona 8 hores al dia, 310 dies l’any, amb un cabal mitjà \\(q = 35\\,\\text{m³/s}\\). El rendiment de la central és \\(\\eta_{central} = 0,93\\).  
    Determineu:
    <br><br>
    <strong>a)</strong> La potència \\(P_{aigua}\\) que es pot obtenir amb el salt d’aigua. [0,5 punts]  
    <br>
    <strong>b)</strong> La potència que subministra la central \\(P_{subm}\\). [0,5 punts]  
    <br>
    <strong>c)</strong> L’energia diària útil \\(E_{útil}\\) generada. [0,5 punts]  
    <br>
    <strong>d)</strong> Quants habitatges es podrien abastir amb aquesta central si el consum mitjà elèctric d’un habitatge a Catalunya és \\(E_{cons} = 3\\,487\\,\\text{kW·h/any}\\). [1 punt]  
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge de la central hidroelèctrica">`,
    correctAnswer: "",
    steps: `
        <strong>a) Potència de l’aigua:</strong><br>
        <br>
        - Fórmula de potència hidràulica:
        \\[
        P_{aigua} = \\rho g q h
        \\]
        Amb \\(\\rho = 1000\\,\\text{kg/m³},\\ g = 9,81\\,\\text{m/s²}\\):
        \\[
        P_{aigua} = 1000 \\cdot 9,81 \\cdot 35 \\cdot 61,9
        \\]
        \\[
        P_{aigua} = 21,25\\,\\text{MW}
        \\]
        <br><br>
        <strong>b) Potència subministrada per la central:</strong><br>
        \\[
        P_{subm} = P_{aigua} \\cdot \\eta_{central} = 21,25 \\cdot 0,93
        \\]
        \\[
        P_{subm} = 19,77\\,\\text{MW}
        \\]
        <br><br>
        <strong>c) Energia diària útil generada:</strong><br>
        - Temps de funcionament diari:
        \\[
        t = 8\\,\\text{h} = 8 \\cdot 3600\\,\\text{s} = 28\\,800\\,\\text{s}
        \\]
        - Energia diària:
        \\[
        E_{útil} = P_{subm} \\cdot t = 19,77\\cdot 10^6 \\cdot 28\\,800
        \\]
        \\[
        E_{útil} = 569,1 \\cdot 10^9\\,\\text{J}
        \\]
        <br><br>
        <strong>d) Nombre d’habitatges abastits:</strong><br>
        - Consum anual per habitatge:
        \\[
        E_{cons} = 3\\,487\\,\\text{kW·h} = 3,487 \\cdot 3,6\\cdot 10^6\\,\\text{J} = 12,553 \\cdot 10^6\\,\\text{J}
        \\]
        - Nombre d’habitatges:
        \\[
        N = \\frac{E_{útil\\,anual}}{E_{cons}} = \\frac{569,1 \\cdot 10^9}{12,553 \\cdot 10^6} \\approx 14\\,053
        \\]
        \\[
        N \\approx 14\\,053\\,\\text{habitatges}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "motors",
    text: `Una bicicleta elèctrica està equipada amb una bateria de liti (de comportament ideal) que subministra una energia \\(E_{bat} = 400\\,\\text{Wh}\\). La bateria alimenta un motor de rendiment \\(\\eta_{motor} = 0,957\\) connectat a un reductor de rendiment \\(\\eta_{red} = 0,93\\). La relació de transmissió entre la velocitat de rotació de les rodes \\(n_r\\) i la velocitat de rotació del motor \\(n_{motor}\\) és \\(\\tau = \\dfrac{n_r}{n_{motor}} = 0,065\\). El diàmetre de les rodes és \\(d = 710\\,\\text{mm}\\).  
    <br><br>
    A l’inici del trajecte la bateria està totalment carregada. En les condicions d’estudi, la bicicleta avança sempre a una velocitat constant \\(v = 25\\,\\text{km/h}\\) per un terreny horitzontal, el ciclista no pedala i el reductor subministra a l’eix de la roda una potència \\(P_{subm} = 250\\,\\text{W}\\). Les pèrdues per rodolament i per aerodinàmica es poden negligir. Determineu:
    <br><br>
    <strong>a)</strong> L’energia dissipada \\(E_{diss}\\) en el conjunt motor-reductor quan s’ha esgotat la bateria. [0,5 punts]  
    <br>
    <strong>b)</strong> El temps màxim \\(t_{màx}\\) que pot funcionar la bicicleta i la distància màxima recorreguda \\(s_{màx}\\). [1 punt]  
    <br>
    <strong>c)</strong> La velocitat angular de les rodes \\(\\omega_r\\). [0,5 punts]  
    <br>
    <strong>d)</strong> El parell \\(\\Gamma\\) a l’eix de sortida del motor. [0,5 punts]
    <br><br>
    <img src="ruta/a/imatgePregunta.jpg" alt="Imatge de la bicicleta elèctrica">`,
    correctAnswer: "",
    steps: `
        <strong>a) Energia dissipada:</strong><br>
        <br>
        - Energia consumida pel motor-reductor:
        \\[
        E_{diss} = E_{bat} \\cdot (1 - \\eta_{motor} \\cdot \\eta_{red})
        \\]
        - Convertim la bateria a joules:
        \\[
        E_{bat} = 400\\,\\text{Wh} = 400 \\cdot 3600\\,\\text{J} = 1,44 \\times 10^6\\,\\text{J}
        \\]
        - Energia dissipada:
        \\[
        E_{diss} = 1,44\\cdot10^6 \\cdot (1 - 0,957 \\cdot 0,93) \\approx 158,4\\,\\text{kJ}
        \\]
        <br><br>
        <strong>b) Temps i distància màxima:</strong><br>
        <br>
        - Potència subministrada:
        \\[
        P_{subm} = 250\\,\\text{W}
        \\]
        - Temps màxim:
        \\[
        t_{màx} = \\frac{E_{bat}}{P_{subm}} = \\frac{1,44\\cdot10^6}{250} \\approx 5760\\,\\text{s} = 1,424\\,\\text{h}
        \\]
        - Distància màxima:
        \\[
        s_{màx} = v \\cdot t_{màx} = 25\\,\\text{km/h} \\cdot 1,424\\,\\text{h} \\approx 35,6\\,\\text{km}
        \\]
        <br><br>
        <strong>c) Velocitat angular de les rodes:</strong><br>
        \\[
        \\omega_r = \\frac{v}{r} = \\frac{25\\,\\text{km/h} \\cdot 1000/3600}{0,710/2\\,\\text{m}} \\approx 19,56\\,\\text{rad/s}
        \\]
        <br><br>
        <strong>d) Parell a l’eix del motor:</strong><br>
        \\[
        \\Gamma = \\frac{P_{subm}}{\\omega_{motor}} = \\frac{P_{subm}}{\\omega_r / \\tau} = \\frac{250}{19,56/0,065} \\approx 0,8932\\,\\text{N·m}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resolució">`
},
    {
    type: "exercicis",
    category: "electrics",
    text: `Una planxa de cabells professional està formada per dues resistències de valor \\(R_1 = R_2 = 70\\,\\Omega\\) connectades en paral·lel. La planxa es connecta a \\(U = 230\\,\\text{V}\\) i s’estima que està en funcionament un temps de 6 hores diàries. Determineu:
    <br><br>
    <strong>a)</strong> El corrent total \\(I_{tot}\\) que consumeix la planxa. [1 punt]  
    <br>
    <strong>b)</strong> La potència elèctrica \\(P_{elèctr}\\) necessària perquè funcioni. [0,5 punts]  
    <br>
    <strong>c)</strong> L’energia que consumirà diàriament \\(E_{cons}\\). [0,5 punts]  
    <br>
    <strong>d)</strong> El cost diari de l’energia consumida \\(c_{diari}\\) per la planxa de cabells si el cost del kilowatt hora és \\(c = 0,12\\,€/(\\text{kWh})\\). [0,5 punts]`,
    correctAnswer: "",
    steps: `
        <strong>a) Corrent total:</strong><br>
        - Resistència equivalent en paral·lel:
        \\[
        R_{eq} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{70 \\cdot 70}{70 + 70} = 35\\,\\Omega
        \\]<br>
        - Corrent total:
        \\[
        I_{tot} = \\frac{U}{R_{eq}} = \\frac{230}{35} \\approx 6,571\\,\\text{A}
        \\]
        <br><br>
        <strong>b) Potència elèctrica:</strong><br>
        \\[
        P_{elèctr} = U \\cdot I_{tot} = 230 \\cdot 6,571 \\approx 1411\\,\\text{W}
        \\]
        <br><br>
        <strong>c) Energia diària consumida:</strong><br>
        \\[
        E_{cons} = P_{elèctr} \\cdot t = 1411\\,\\text{W} \\cdot 6\\,\\text{h} \\cdot 3600\\,\\text{s/h} \\approx 32,65\\,\\text{MJ}
        \\]
        <br><br>
        <strong>d) Cost diari:</strong><br>
        - Energia en kWh:
        \\[
        E_{kWh} = \\frac{E_{cons}}{3,6 \\cdot 10^6} = \\frac{32,65 \\cdot 10^6}{3,6 \\cdot 10^6} \\approx 9,07\\,\\text{kWh}
        \\]<br>
        - Cost diari:
        \\[
        c_{diari} = E_{kWh} \\cdot 0,12\\,€ \\approx 1,088\\,€
        \\]
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
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
        images: `<img src="https://mcoronil4.github.io/images/2020junyserie1q1.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Un cotxe està equipat amb un motor de combustió interna de quatre cilindres en línia de diàmetre \\(\\mathbf{79,5\\,mm}\\) i cursa \\(\\mathbf{80,5\\,mm}\\). Quina és la cilindrada del motor?`,
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
        category: "motors",
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
        category: "pneumatica",
        text: `Es vol aixecar una massa \\(m = 1\,200\\,\\text{kg}\\) utilitzant una premsa hidràulica. La secció transversal de l’èmbol gran és \\(A_{gran} = 30\,000\\,\\text{mm}^2\\) i la del petit és \\(A_{petit} = 1\,000\\,\\text{mm}^2\\). Preneu \\(g = 9,807\\,\\text{m/s}^2\\). Determineu la força \\(F\\) que cal exercir sobre l’èmbol petit:`,
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
            g = 9,807\\,\\text{m·s²}
            \\]<br>
            Força sobre l'èmbol gran:<br>
            \\[
            F_2 = m \\cdot g = 1200\\,\\text{kg} \\times 9,807\\,\\text{m·s²} = 11768,4\\,\\text{N}
            \\]<br>
            Àrea de l'èmbol petit:<br>
            \\[
            A_1 = 1000\\,\\text{mm²} = 1000 \\times 10⁻⁶\\,\\text{m²} = 0,001\\,\\text{m²}
            \\]<br>
            Àrea de l'èmbol gran:<br>
            \\[
            A_2 = 30000\\,\\text{mm²} = 30000 \\times 10⁻⁶\\,\\text{m²} = 0,03\\,\\text{m²}
            \\]<br>
            Força sobre l'èmbol petit:<br>
            \\[
            F_1 = F_2 \\cdot \\frac{A_1}{A_2} = 11768,4\\,\\text{N} \\cdot \\frac{0,001\\,\\text{m²}}{0,03\\,\\text{m²}}
            \\]<br>
            \\[
            F_1 = 392,28\\,\\text{N}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El Ti-6Al-7Nb és un aliatge biocompatible de titani àmpliament utilitzat en aplicacions quirúrgiques. Conté un \\(\\mathbf{5,5\\%}\\) d’alumini (Al), un \\(\\mathbf{6,5\\%}\\) de niobi (Nb), \\(\\mathbf{0,25\\%}\\) de ferro (Fe), un \\(\\mathbf{0,08\\%}\\) de carboni (C) i la resta és titani (Ti). En l’obtenció d’aquest aliatge, quina quantitat de niobi cal per a aliar-lo amb \\(\\mathbf{250\\,kg}\\) de titani?`,
        options: [
            { text: "18,54 kg", value: "a" },
            { text: "15,68 kg", value: "b" },
            { text: "16,25 kg", value: "c" },
            { text: "21,92 kg", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>Càlcul de la quantitat de niobi:</strong><br>
            Percentatges components:<br>
            \\[
            \\%_{\\mathrm{Ti}} = 100\\% - (5{,}5\\% + 6{,}5\\% + 0{,}25\\% + 0{,}08\\%) = 87{,}67\\%
            \\]<br>
            Massa de titani disponible:<br>
            \\[
            m_{\\mathrm{Ti}} = 250\\,\\text{kg}
            \\]<br>
            Massa total de l'aliatge (convertint el % de Ti a fracció):<br>
            \\[
            m_{\\mathrm{total}} = \\frac{m_{\\mathrm{Ti}}}{0{,}8767}
            = \\frac{250\\,\\text{kg}}{0{,}8767}
            = 285{,}16026006615715\\,\\text{kg}
            \\]<br>
            Percentatge de niobi:<br>
            \\[
            \\%_{\\mathrm{Nb}} = 6{,}5\\% = 0{,}065
            \\]<br>
            Massa de niobi necessària:<br>
            \\[
            m_{\\mathrm{Nb}} = 0{,}065 \\times 285{,}16026006615715\\,\\text{kg}
            = 18{,}535416904300217\\,\\text{kg}
            \\]<br>
            Resultat arrodonit:<br>
            \\[
            m_{\\mathrm{Nb}} \\approx 18{,}54\\,\\text{kg}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `Es disposa d’un cable d’acer de \\(L = 10\\,\\text{m}\\) de longitud i \\(A = 1\\,000\\,\\text{mm}^2\\) de secció. Quina força \\(F\\) cal aplicar perquè s’allargui \\(\\Delta L = 10\\,\\text{mm}\\)? El mòdul elàstic del material és \\(E = 207\\,\\text{GPa}\\).`,
    options: [
        { text: "207 kN", value: "a" },
        { text: "20,7 kN", value: "b" },
        { text: "2,07 kN", value: "c" },
        { text: "2,07 MN", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Càlcul de la força aplicada al cable:</strong><br>
        Relació entre allargament i força (Llei de Hooke):<br>
        \\[
        \\Delta L = \\frac{F \\cdot L}{E \\cdot A}
        \\]<br>
        Despejant la força:<br>
        \\[
        F = \\frac{\\Delta L \\cdot E \\cdot A}{L}
        \\]<br>
        Dades del problema:<br>
        \\[
        \\Delta L = 10\\,\\text{mm} = 0,01\\,\\text{m}
        \\]<br>
        \\[
        A = 1000\\,\\text{mm}^2 = 1000 \\times 10^{-6}\\,\\text{m}^2 = 0,001\\,\\text{m}^2
        \\]<br>
        \\[
        E = 207\\,\\text{GPa} = 207 \\times 10^9\\,\\text{Pa}
        \\]<br>
        \\[
        L = 10\\,\\text{m}
        \\]<br>
        Substitució a la fórmula:<br>
        \\[
        F = \\frac{0,01 \\cdot 207 \\times 10^9 \\cdot 0,001}{10}
        \\]<br>
        \\[
        F = 207000\\,\\text{N} = 207\\,\\text{kN}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `Quin serà el valor de \\(L\\) si la figura compleix les toleràncies indicades?`,
    options: [
        { text: "14\\(^{+0,105}_{-0,02}\\)", value: "a" },
        { text: "14\\(^{+0,008}_{-0,02}\\)", value: "b" },
        { text: "14\\(^{+0,005}_{-0,02}\\)", value: "c" },
        { text: "14\\(^{+0,005}_{-0,05}\\)", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Càlcul de la dimensió \\(L\\) amb toleràncies:</strong><br>
        De la figura es dedueix que la longitud total és:<br>
        \\[
        31 = 17 + L
        \\]<br>
        Per tant, el valor nominal de \\(L\\) és:<br>
        \\[
        L = 31 - 17 = 14\\,\\text{mm}
        \\]<br><br>
        <strong>Càlcul de les toleràncies:</strong><br>
        Tolerància superior de 31:<br>
        \\[
        +0,1\\,\\text{mm}
        \\]<br>
        Tolerància inferior de 31:<br>
        \\[
        0\\,\\text{mm}
        \\]<br><br>
        Tolerància superior de 17:<br>
        \\[
        +0,02\\,\\text{mm}
        \\]<br>
        Tolerància inferior de 17:<br>
        \\[
        -0,005\\,\\text{mm}
        \\]<br><br>
        Tolerància superior de \\(L\\):<br>
        \\[
        +0,1 - (-0,005) = +0,105\\,\\text{mm}
        \\]<br>
        Tolerància inferior de \\(L\\):<br>
        \\[
        0 - 0,02 = -0,02\\,\\text{mm}
        \\]<br><br>
        Resultat final:<br>
        \\[
        L = 14^{+0,105}_{-0,02}\\,\\text{mm}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge de la figura amb toleràncies">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "energia",
    text: `Un cotxe elèctric disposa d’una bateria ideal de capacitat \\(41\\,\\text{kW·h}\\). El motor, quan treballa en el règim de potència màxima, subministra \\(80\\,\\text{kW}\\) i consumeix \\(172\\,\\text{W·h/km}\\). En aquestes condicions, quina distància podrà recórrer el vehicle utilitzant el \\(50\\,\\%\\) de la capacitat de la bateria?`,
    options: [
        { text: "9,535 km", value: "a" },
        { text: "238,4 km", value: "b" },
        { text: "256,3 km", value: "c" },
        { text: "119,2 km", value: "d" }
    ],
    correctAnswer: "d",
    steps: `
        <strong>Càlcul de la distància recorreguda:</strong><br>
        Capacitat total de la bateria:<br>
        \\[
        41\\,\\text{kW·h}
        \\]<br>
        Energia utilitzada (50 % de la capacitat):<br>
        \\[
        E = 0,5 \\cdot 41 = 20,5\\,\\text{kW·h}
        \\]<br>
        Conversió a watts hora:<br>
        \\[
        20,5\\,\\text{kW·h} = 20500\\,\\text{W·h}
        \\]<br>
        Consum del vehicle:<br>
        \\[
        172\\,\\text{W·h/km}
        \\]<br>
        Distància recorreguda:<br>
        \\[
        d = \\frac{20500\\,\\text{W·h}}{172\\,\\text{W·h/km}}
        \\]<br>
        \\[
        d = 119,19\\,\\text{km}
        \\]<br><br>
        Resultat final:<br>
        \\[
        d \\approx 119,2\\,\\text{km}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb el vehicle elèctric">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "energia",
    text: `En una terrassa de bar hi ha instaŀlades \\(4\\) estufes de butà que funcionen \\(8\\) hores cada dia. El consum de cadascuna d’elles és de \\(600\\,\\text{g/h}\\) de butà. L’Oficina Catalana del Canvi Climàtic estima un factor d’emissió de \\(2,96\\,\\text{kg de CO}_2/\\text{kg de butà}\\) i un factor de \\(2,79\\,\\text{kg de CO}_2/\\text{L de gasoil}\\). Quants quilòmetres es podran recórrer amb un cotxe de gasoil que té un consum de \\(5,4\\,\\text{L}/100\\,\\text{km}\\) fins a emetre la mateixa quantitat de \\(\\text{CO}_2\\) que les \\(4\\) estufes del bar funcionant \\(1\\) dia?`,
    options: [
        { text: "355,6 km", value: "a" },
        { text: "94,31 km", value: "b" },
        { text: "377,2 km", value: "c" },
        { text: "47,15 km", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        <strong>Càlcul de les emissions de CO₂ de les estufes:</strong><br>
        Consum diari d’una estufa:<br>
        \\[
        600\\,\\text{g/h} \\cdot 8\\,\\text{h} = 4800\\,\\text{g} = 4,8\\,\\text{kg}
        \\]<br>
        Consum total de les 4 estufes:<br>
        \\[
        4 \\cdot 4,8 = 19,2\\,\\text{kg de butà}
        \\]<br>
        Emissions de CO₂ del butà:<br>
        \\[
        19,2\\,\\text{kg} \\cdot 2,96 = 56,83\\,\\text{kg de CO}_2
        \\]<br><br>
        <strong>Equivalent en gasoil:</strong><br>
        Litres de gasoil necessaris per emetre la mateixa quantitat de CO₂:<br>
        \\[
        L = \\frac{56,83}{2,79} = 20,37\\,\\text{L}
        \\]<br><br>
        <strong>Distància recorreguda amb el cotxe:</strong><br>
        Consum del vehicle:<br>
        \\[
        5,4\\,\\text{L}/100\\,\\text{km}
        \\]<br>
        Distància recorreguda:<br>
        \\[
        d = \\frac{20,37}{5,4} \\cdot 100
        \\]<br>
        \\[
        d = 377,2\\,\\text{km}
        \\]<br><br>
        Resultat final:<br>
        \\[
        d = 377,2\\,\\text{km}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb les estufes de butà">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "pneumatica",
    text: `Una bombona d’aire de busseig conté \\(15\\,\\text{L}\\) a \\(20\\,°\\text{C}\\) i \\(22\\,\\text{MPa}\\). Considerant que té un comportament de gas ideal, determineu el volum d’aquest aire quan es troba a la mateixa temperatura, però a una pressió de \\(1\\,013\\,\\text{hPa}\\).`,
    options: [
        { text: "217,2 L", value: "a" },
        { text: "3,258 m³", value: "b" },
        { text: "2,962 m³", value: "c" },
        { text: "3,258 L", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
        <strong>Càlcul del volum amb gas ideal:</strong><br>
        Utilitzem la llei de Boyle (a temperatura constant):<br>
        \\[
        P_1 V_1 = P_2 V_2
        \\]<br>
        On:<br>
        \\[
        P_1 = 22\\,\\text{MPa} = 22 \\times 10^6\\,\\text{Pa}, \\quad V_1 = 15\\,\\text{L} = 0,015\\,\\text{m³}
        \\]<br>
        \\[
        P_2 = 1\\,013\\,\\text{hPa} = 1,013 \\times 10^5\\,\\text{Pa}
        \\]<br>
        Despejant \\(V_2\\):<br>
        \\[
        V_2 = \\frac{P_1 V_1}{P_2} = \\frac{22 \\times 10^6 \\cdot 0,015}{1,013 \\times 10^5}
        \\]<br>
        \\[
        V_2 ≈ 3,258 m³
        \\]<br><br>
        Resultat final:<br>
        \\[
        V_2 = 3,258 m³
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge de la bombona d'aire">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `Un acer té un mòdul elàstic de \\(210\\,\\text{GPa}\\), un límit elàstic de \\(350\\,\\text{MPa}\\) i un límit de ruptura de \\(520\\,\\text{MPa}\\). Si una proveta d’aquest material se sotmet a una càrrega de tracció de \\(80\\,\\text{kN}\\), quin diàmetre mínim ha de tenir la proveta perquè no experimenti cap deformació permanent?`,
    options: [
        { text: "12,06 mm", value: "a" },
        { text: "8,531 mm", value: "b" },
        { text: "17,06 mm", value: "c" },
        { text: "12,93 mm", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        <strong>Càlcul del diàmetre mínim de la proveta:</strong><br>
        Per a evitar deformació permanent, la tensió de tracció \\(\\sigma\\) ha de ser menor o igual al límit elàstic \\(\\sigma_e\\):<br>
        \\[
        \\sigma = \\frac{F}{A} \\leq \\sigma_e
        \\]<br>
        On:<br>
        \\[
        F = 80\\,\\text{kN} = 80 \\times 10^3\\,\\text{N}, \\quad \\sigma_e = 350\\,\\text{MPa} = 350 \\times 10^6\\,\\text{Pa}
        \\]<br>
        L'àrea de la secció transversal d'una proveta circular:<br>
        \\[
        A = \\frac{\\pi d^2}{4}
        \\]<br>
        Despejant \\(d\\):<br>
        \\[
        d = \\sqrt{\\frac{4 F}{\\pi \\sigma_e}} = \\sqrt{\\frac{4 \\cdot 80 \\times 10^3}{\\pi \\cdot 350 \\times 10^6}}
        \\]<br>
        \\[
        d \\approx 0,01706\\,\\text{m} = 17,06\\,\\text{mm}
        \\]<br><br>
        Resultat final:<br>
        \\[
        d_{min} = 17,06\\,\\text{mm}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge de la proveta d'acer">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `En un ajust \\(100\\,E11/f7\\), la tolerància del forat és \\(100^{+292}_{+72}\\,\\mu\\text{m}\\) i la de l’eix \\(100^{-36}_{-71}\\,\\mu\\text{m}\\). Per tant, es pot afirmar que:`,
    options: [
        { text: "El diàmetre mínim del forat és 100 mm", value: "a" },
        { text: "El diàmetre màxim del forat és 102,92 mm", value: "b" },
        { text: "El diàmetre mínim de l’eix és 99,929 mm", value: "c" },
        { text: "El diàmetre màxim de l’eix és 100 mm", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        <strong>Càlcul del diàmetre mínim de l’eix:</strong><br>
        La tolerància del forat i l’eix s’expressa amb superíndex (+) i subíndex (-) respecte al valor nominal:<br>
        \\[
        D_{min\\,eix} = 100\\,\\text{mm} + (-71\\,\\mu\\text{m}) = 100\\,\\text{mm} - 0,071\\,\\text{mm}
        \\]<br>
        \\[
        D_{min\\,eix} = 99,929\\,\\text{mm}
        \\]<br><br>
        Resultat final:<br>
        \\[
        D_{min\\,eix} = 99,929\\,\\text{mm}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge de l'ajust 100 E11/f7">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "energia",
    text: `Una persona recorre, cada dia, \\(126\\,\\text{km}\\) en cotxe per anar i tornar de la feina. Fa aquest recorregut 5 vegades a la setmana. Si utilitza un cotxe de gasolina amb un consum mitjà de \\(6,7\\,\\text{L/100 km}\\) i que emet \\(145\\,\\text{g CO2}\\) per quilòmetre, quants kilograms de CO2 (petjada de carboni) emetrà setmanalment?`,
    options: [
        { text: "91,35 kg", value: "a" },
        { text: "612,1 kg", value: "b" },
        { text: "13,63 kg", value: "c" },
        { text: "9,14 kg", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Càlcul de la petjada de carboni setmanal:</strong><br>
        Distància setmanal recorreguda:<br>
        \\[
        d_{setmana} = 126\\,\\text{km/dia} \\times 5\\,\\text{dies} = 630\\,\\text{km}
        \\]<br>
        Emissions per km:<br>
        \\[
        e = 145\\,\\text{g CO2/km} = 0,145\\,\\text{kg CO2/km}
        \\]<br>
        Emissions setmanals:<br>
        \\[
        E_{setmana} = d_{setmana} \\cdot e = 630 \\times 0,145
        \\]<br>
        \\[
        E_{setmana} \\approx 91,35\\,\\text{kg CO2}
        \\]<br><br>
        Resultat final:<br>
        \\[
        E_{setmana} = 91,35\\,\\text{kg CO2}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge del cotxe i recorregut">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "pneumatica",
    text: `Una motocicleta té un motor de quatre temps amb un sol cilindre de \\(52,4\\,\\text{mm}\\) de diàmetre i una cursa de \\(57,8\\,\\text{mm}\\). A quina categoria de cilindrada pertany la motocicleta?`,
    options: [
        { text: "125 cm³", value: "a" },
        { text: "250 cm³", value: "b" },
        { text: "1 000 cm³", value: "c" },
        { text: "50 cm³", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>Càlcul de la cilindrada del cilindre:</strong><br>
        La cilindrada d'un cilindre es calcula com:<br>
        \\[
        V = \\pi \\frac{D^2}{4} \\cdot C
        \\]<br>
        On:<br>
        \\[
        D = 52,4\\,\\text{mm} = 5,24\\,\\text{cm}, \\quad C = 57,8\\,\\text{mm} = 5,78\\,\\text{cm}
        \\]<br>
        \\[
        V = \\pi \\cdot \\frac{5,24^2}{4} \\cdot 5,78
        \\]<br>
        \\[
        V \\approx 125\\,\\text{cm³}
        \\]<br><br>
        Resultat final:<br>
        \\[
        V = 125\\,\\text{cm³}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge de la motocicleta">`
},
    {
    type: "questions", // Tipus de pregunta
    category: "electrics",
    text: `Es disposa de dos generadors síncrons. El primer té 10 pols i es connecta a \\(50\\,\\text{Hz}\\). El segon té 12 pols i es connecta a \\(60\\,\\text{Hz}\\). Pel que fa a les velocitats de gir dels seus eixos, es pot afirmar que:`,
    options: [
        { text: "La del primer és més gran que la del segon", value: "a" },
        { text: "La del primer és més petita que la del segon", value: "b" },
        { text: "Les dues són iguals", value: "c" },
        { text: "No es poden calcular sense saber si la connexió és en estrella o en triangle", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        <strong>Càlcul de la velocitat síncrona:</strong><br>
        La velocitat síncrona \\(n_s\\) d'un generador es calcula amb:<br>
        \\[
        n_s = \\frac{120 f}{p} \\quad [\\text{rev/min}]
        \\]<br>
        On:<br>
        \\(f\\) = freqüència en Hz<br>
        \\(p\\) = nombre de pols<br><br>
        Primer generador:<br>
        \\[
        n_1 = \\frac{120 \\cdot 50}{10} = 600\\,\\text{rev/min}
        \\]<br>
        Segon generador:<br>
        \\[
        n_2 = \\frac{120 \\cdot 60}{12} = 600\\,\\text{rev/min}
        \\]<br><br>
        Per tant, les dues velocitats són iguals.<br><br>
        Resultat final:<br>
        \\[
        n_1 = n_2 = 600\\,\\text{rev/min}
        \\]
        <br><br>
        <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
    images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge dels generadors síncrons">`
}
];
