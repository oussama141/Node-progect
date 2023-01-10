import React from 'react'
import '../styles/categories.css'
import a from "../assets/images/a.jpg";
import e from "../assets/images/e.jpeg";
import c from "../assets/images/c.jpeg";
import f from "../assets/images/f.jpeg";

function Categories() {
    return (
        <section className='categoriez' id="categories">
            <div className='titlectg'>
                Here some available properties in some cities.
            </div>

            <div className='cardz'>

                <div className='carde'>
                    <img src={a} alt="" />
                    <div className="text">New York</div>
                    <div className="nbr">182</div>
                </div>

                <div className='carde'>
                    <img src={e} alt="" />
                    <div className="text">Tokyo</div>
                    <div className="nbr">188</div>
                </div>

                <div className='carde'>
                    <img src={c} alt="" />
                    <div className="text">Paris</div>
                    <div className="nbr">114</div>

                </div>

                <div className='carde'>
                    <img src={f} alt="" />
                    <div className="text">Maldives</div>
                    <div className="nbr">75</div>

                </div>

            </div>

        </section>
    )
}

export default Categories