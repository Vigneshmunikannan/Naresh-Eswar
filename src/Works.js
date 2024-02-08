import { Link } from "react-router-dom";
function Works() {
    const worksData = [
        { serialName: 'Dosth', channel: 'Kairali TV', leadActor: 'Jeevan', year: 2012 },
        { serialName: 'Avail Appadithan', channel: 'Jaya TV', leadActor: 'Gowtham', year: 2013 },
        { serialName: 'Sowbhagyavathi', channel: 'Surya TV', leadActor: 'Amal', year: 2014 },
        { serialName: 'Ishtam', channel: 'Surya TV', leadActor: 'Karthik', year: 2015 },
        { serialName: 'Aniyathi', channel: 'Mazhavil Manorama', leadActor: 'Deepu', year: 2015 },
        { serialName: 'Amma', channel: 'Asianet', leadActor: 'Chandu', year: 2015 },
        { serialName: 'Sondha Bandham', channel: 'Sun TV', leadActor: 'Saravanan', year: 2015 },
        { serialName: '7 Rathrikal', channel: 'Asianet', leadActor: 'Niranjan', year: 2015 },
        { serialName: 'EMI', channel: 'Sun TV', leadActor: 'Santhosh', year: 2016 },
        { serialName: 'Ponnunjal', channel: 'Sun TV', leadActor: 'Umesh', year: 2016 },
        { serialName: 'Pasamalar', channel: 'Sun TV', leadActor: 'Vikram', year: 2016 },
        { serialName: 'Vijayadhasami', channel: 'Surya TV', leadActor: 'Karthik', year: 2016 },
        { serialName: 'Sthreepadham', channel: 'Mazhavil Manorama', leadActor: 'Harikrishnan', year: 2017 },
        { serialName: 'Azhagu', channel: 'Sun TV', leadActor: 'Sathya', year: 2017 },
        { serialName: 'Parasparam', channel: 'Asianet', leadActor: 'Subhash', year: 2017 },
        { serialName: 'Pandavar Illam', channel: 'Sun TV', leadActor: 'Kutty Sundaram', year: '2019-2023' },
        { serialName: 'Vanathepole', channel: 'Sun TV', leadActor: 'Krishna (Guest)', year: 2023 },
        { serialName: 'Gowri', channel: 'Kalaignar TV', leadActor: 'Ashok (Ongoing)', year: 2024 },
        // Add more works as needed
    ];

    const showsData = [
        { year: 2020, showName: 'Poove Unakake', channel: 'Sun TV', role: 'Kutty Sundaram (Special Appearance)' },
        { year: 2020, showName: 'Chithi 2', channel: 'Sun TV', role: 'Kutty Sundaram (Special Appearance)' },
        { year: 2020, showName: 'Maharasi', channel: 'Sun TV', role: 'Kutty Sundaram (Special Appearance)' },
        { year: 2020, showName: 'Vanakkam Tamizha', channel: 'Sun TV', role: 'Guest' },
        { year: 2021, showName: 'Vanathaipole', channel: 'Sun TV', role: 'Kutty Sundaram (Special Appearance)' },
        { year: 2021, showName: 'Rowdy Baby', channel: 'Sun TV', role: 'Contestant' },
        { year: 2021, showName: 'Vanakkam Tamizha', channel: 'Sun TV', role: 'Guest' },
        { year: 2021, showName: 'Poova Thalaya', channel: 'Sun TV', role: 'Contestant' },
        { year: 2021, showName: 'Nachithira Kondattam', channel: 'Sun TV', role: 'Himself' },
        { year: 2022, showName: 'Aruvi', channel: 'Sun TV', role: 'Kutty Sundaram (Special Appearance)' },
        { year: 2022, showName: 'Vanakkam Tamizha', channel: 'Sun TV', role: 'Guest' },
        { year: 2022, showName: 'Mathiyosi', channel: 'Sun TV', role: 'Contestant' },
        { year: 2022, showName: 'Nachithira Kondattam', channel: 'Sun TV', role: 'Himself' },
        { year: 2023, showName: 'Nachithira Kondattam', channel: 'Sun TV', role: 'Himself' },
        // Add more shows as needed
    ];

    return (
        <div>
            <div className="logo text-center">Works</div>

            <div className="work-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Serial Name</th>
                            <th>TV Channel</th>
                            <th>Lead Actor</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {worksData.map((work, index) => (
                            <tr key={index}>
                                <td>{work.serialName}</td>
                                <td>{work.channel}</td>
                                <td>{work.leadActor}</td>
                                <td>{work.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="logo text-center">Shows</div>
            <div className="work-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Show Name</th>
                            <th>TV Channel</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showsData.map((show, index) => (
                            <tr key={index}>
                                <td>{show.year}</td>
                                <td>{show.showName}</td>
                                <td>{show.channel}</td>
                                <td>{show.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="btn">
                <button>
                    <Link to='/Naresh-Eswar'>Go to Home</Link>
                </button>
            </div>



        </div>
    );
}

export default Works;