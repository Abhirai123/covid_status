import React, {useEffect, useState} from 'react'


const Covid_Data = () => {

    const [data, setData] = useState([]);

    const getData = async () => {

        try {       
        const res = await  fetch('https://data.covid19india.org/data.json');
        const actData = await res.json();
        // console.log(actData.statewise[0]);
        setData(actData.statewise[0]);
       
    } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <h3>Covid Live Status</h3>
            <h1>Covid-19 Tracker</h1>
            <br/><br/>
            <ul>
                <li>
                    <h3>Our Country 
                    <br/><span>India</span></h3>
                </li>
                <li>
                    <h3>Total Recoverd 
                        <br/><span>{data.recovered}</span></h3>
                </li>
                <li>
                    <h3>Total Confirmed 
                        <br/><span>{data.confirmed}</span></h3>
                </li>
                <li>
                    <h3>Total Death 
                        <br/><span>{data.deaths}</span></h3>
                </li>
                <li>
                    <h3>Total Active 
                        <br/><span>{data.active}</span></h3>
                </li>
                <li>
                    <h3>Last Updated 
                        <br/><span>{data.lastupdatedtime}</span></h3>
                </li>
            </ul>
        </div>
    )
}

export default Covid_Data
