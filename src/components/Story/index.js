import './style.css'
import Fotom from "./img/mm.jpg"
import Fotob from "./img/bat.jpg"
import Fotos from "./img/sm.jpg"
import Fotoc from "./img/cori.jpg"
import Fotoh from "./img/homi.jpg"
import Fotot from "./img/tan.jpg"
import Fotov from "./img/vn.jpg"
import Fotof from "./img/tfla.jpg"

export function Story() {

    return (

        <div className="container" >

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src= {Fotom} />
                </div>

                <span>Mulher</span>
            </div>

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src= {Fotob} />
                </div>

                <span>Batmain</span>



            </div>

            
            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={Fotos}  />
                </div>

                <span>super_</span>



            </div>


            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={Fotoc}  />
                </div>

                <span>curinga</span>



            </div>


            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={Fotoh} />
                </div>

                <span>homi_di</span>



            </div>

            
            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={Fotot}  />
                </div>

                <span>tamus_j</span>



            </div>

            
            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src= {Fotov} />
                </div>

                <span>viuva_ne</span>

            </div>

            
            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src= {Fotof} />
                </div>

                <span>d_flechi</span>

            </div>


        </div>

    )

}