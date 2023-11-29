import pandavar from './images/pandvavar.jpg'
import vanam from './images/vana.jpg'
import Azhagu from './images/azha.jpg'
import chiti from './images/chiti.jpg'
function Works() {
    return (
        <div>
             <h1 className='logo text-center'>Works</h1>
             <div id="works">
           
            <div className='conatiner'>
                <div>
                    <img src={pandavar} className='container'></img>
                    <div className='container-detail'>
                        <h1>Pandavar Illam</h1>
                        <h2>Naresh Eswar as Kutty Sundaram alias Kutty: KadaiKutty younger son of Pandavas family; Kayal's husband (2019 - 2023)</h2>
                    </div>
                </div>
            </div>

            <div className='container'>
                <img src={vanam} className='container'></img>
                <div className='container-detail '>
                    <h1>Vanathai Pola</h1>
                    <h2>Naresh Eswar as Radhakrishnan alias Krishna: Muthaiah's paternal nephew; Meera's widower (2023 - present)</h2>
                </div>
            </div>

            <div className='container'>
                <img src={Azhagu} className='container'></img>
                <div className='container-detail'>
                    <h1>Azhagu</h1>
                    <h2>Naresh Eswar as Sathyamurthy alias ("Sathya") Sethuraman: Ganesh's younger brother</h2>
                </div>
            </div>

            <div className='container'>
                <img src={chiti} className='container'></img>
                <div className='container-detail'>
                    <h1>Chithi 2</h1>
                    <h2>Naresh Eswar as Kuttisundaram Pandavar</h2>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Works;