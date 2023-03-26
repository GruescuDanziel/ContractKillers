//Addons
import Menu from '../components/menuClass.js'
//Css Style
import homePageStyle from '../css/homePageStyle.module.css';
// Images
import CKLogo from '../public/logoContractKillers.svg'
import CircleDecoration from '../public/Circle-Decoration.svg'

const HomePage = function(component){ 
        return ( 
            <div id={homePageStyle.mainContainer}>

                <div>
                    <img src={CircleDecoration} id={homePageStyle.upperCircle} alt=""/>
                </div>

                <div id="logo">
                    <Menu />
                    <img src ={CKLogo} alt=""/> 
                    <h1 id={homePageStyle.title}> Contract Killers </h1>
                    <h2 id={homePageStyle.slogan}> Consider it Done </h2>
                </div>

                <div>
                    <img src={CircleDecoration} id={homePageStyle.lowerCircle} alt=""/>
                </div>

            </div>
        );
}

export default HomePage
