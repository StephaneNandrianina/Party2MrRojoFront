import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import {ListeFavorie} from '../component/ListeAnnonceFavorie';
import {NavBar} from '../component/NavBar';

function selectAnnonceFavorie(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><ListeFavorie/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default selectAnnonceFavorie;