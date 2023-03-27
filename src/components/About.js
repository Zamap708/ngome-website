import "./about.css"
import Profile from "./Profile"

export default function About() {
    return (
        <div className="about fade-in">
            
            <div className="header">
                <h1 className="heading">About Ngome</h1>
                <h2 className="sub-heading">
                    This history was carefully researched and compiled in 2007 by Mrs Rose-marie Foxon of Durban, Kwazulu Natal, South Africa
                    Please click on a 'Chapter' button to read each specific chapter in turn.
                </h2>
            </div>

            <div className="content-wrapper">
                <div className="sidebar">
                    <Profile />
                    <div className="link-list">
                    <h1 className="username">Some Useful Links </h1>
 
                        <div className="link-wrapper">
                            <h2 className="link-heading">Diocese Information </h2>
  
                            <a href="https://www.dioceseofeshowe.org.za" className="extra-link">
                                Diocese of Eshowe in South Africa
                            </a>
                        </div>

                        <div className="link-wrapper">
                            <h2 className="link-heading">Oblates Information </h2>

                            <a href="https://www.omiworld.org.za" className="extra-link">
                                Oblates Of Mary Immaculate In Southern Africa
                            </a>
                            <a href="https://www.osb.org/obl/intro.html" className="extra-link">
                                The Order of Saint Benedict
                            </a>
                            <a href="https://www.daughtersofstfrancisofassisikznsouthafrica.co.za" className="extra-link">
                                Franciscan Sisters of Assisi Natal
                            </a>
                        </div>

                        <div className="link-wrapper">
                            <h2 className="link-heading">International Marian Shrines</h2>
                            <a href="https://www.en.lourdes-france.org" className="extra-link">
                            Marian Shrine - Our Lady of Lourdes (France)
                            </a>
                            <a href="https://www.fatima.pt/en" className="extra-link">
                            Marian Shrine - Our Lady of Fatima (Portugal)
                            </a>
                            <a href="https://www.banneux-nd.be/gb/accueil.gb.html" className="extra-link">
                                Mari an Shrine - Our Lady of Banneux (Belguim)
                            </a>
                            <a href="https://www.kibeho.org/en/shrine.php" className="extra-link">
                            Marian Shrine - Our Lady of Kibeho (Rwanda)
                            </a>
                            <a href="https://www.shrineofourladyofgoodhelp.com" className="extra-link">
                            Marian Shrine - Our Lady of Good Help (Wisconsin, USA)
                            </a>
                            <a href="https://https://www.zeitun-eg.org" className="extra-link">
                            The Apparitions Of Virgin Mary At Zeitoun Church (Egypt)
                            </a>
                        </div>
                  
                    </div>
                </div>

                <div className="articles">
                    <div className="page">
                        <h1 className="heading">
                            About Ngome Marian Shrine
                        </h1>
                        <p className="page-content">
                        Ngome Marian Shrine, which is dedicated to 'Our Lady, the Tabernacle of the Most High', is situated in KwaZulu Natal, just 326 kilometers north of the city of Durban and 85 kilometers east of Vryheid.<br />
                        A place of regular, if not near constant, pilgrimage, Ngome is one of many Marian apparition sites around the world.<br />
                        In one of the early apparitions, received by Sister Reinolda, Our Lady said to her:<br />
                        “I wish that a shrine be erected for me in the place where seven springs come together. There I let my graces flow in abundance. Many people shall turn to God.”<br />
                        Ngome was originally a 338 hectare farm bought by the Benedictines, a Catholic monastic order (Order of Saint Benedict (O.S.B.)) in 1944, and was mainly used for cattle ranching as a source of income for the mission station at Nongoma, the closest town, some 46 kilometers away.<br />
                        A small school, known as the Mayime School, was erected on the farm to enable the children in the area to get a basic education.<br />
                        It became known as the Mayime School. The classroom was used as a chapel where the Catholics came together on Sundays to celebrate Holy Mass or to participate in a service conducted by a catechist.<br />
                        In 1966 the building of a small chapel was completed and blessed on the Ngome farm in the area where the seven springs were situated.<br />
                        In 1984 a bigger chapel was built in a hexagonal shape, on a solid rock about one hundred metres away from the small chapel erected in 1966.<br />
                        Sister Reinolda, who was born in 1901 in south-west Germany, entered the convent of the Missionary Benedictine Sisters at Tutzing in 1922 and after receiving the missionary cross, left for South Africa on June 21, 1925.<br />
                        In 1936 Rome allowed the Benedictine Sisters of Tutzing to assist women in childbirth, with Sister Reinolda becoming the first sister in Zululand to take a course in midwifery.<br />
                        In 1938, the Benedictine Mission Hospital opened in Nongoma and the newly qualified Sister Reinolda was put in charge of the maternity department.<br />
                        She won the hearts of the Zulu people by her kindness and generous readiness to help and her expertise as a midwife attracted expectant mothers from afar.<br />
                        The pastor of Nongoma described Sister Reinolda as a very solid missionary sister in the truest sense of the word and of inestimable help.<br />
                        It was in 1955 that Sister Reinolda had her first apparition and encounter with the Blessed Virgin Mary, who said to her:<br />
                        "Call me Tabernacle of the Most High. You too are such a tabernacle, believe it!<br />
                        I wish to be called upon by this title for the glory of my Son.<br />
                        I wish that more such tabernacles be prepared.<br />
                        I wish that the altars be surrounded by praying people more frequently.<br />
                        Don’t be afraid, make it known.”<br />
                        In her fourth encounter Our Lady said:<br />
                        “I wish that a shrine be erected for me in the place where seven springs come together. There I let my graces flow in abundance. Many people shall turn to God.”<br />
                        Over the preceding years, she then had ten encounters with Our Lady; the last being in 1971.<br />
                        These apparitions, coupled with Sister Reinolda's and others dedication to the cause, resulted in Ngome Marian Shrine being what it is today, a place of prayer and grace where 'we thank our Lord and Saviour and His Mother Mary, Tabernacle of the Most High, for the many graces pilgrims receive'.
                        </p>
                    </div>
                    
                </div>
            </div>
            


        </div>
    )
}