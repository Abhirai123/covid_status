import React, { useEffect, useState } from 'react'

const State_wise = () => {

    const [data, setData] = useState([]);

    const getData = async () =>{
        const res = await fetch("https://data.covid19india.org/data.json");
        const realData = await res.json();
        console.log(realData.statewise);
        setData(realData.statewise)
    }

    useEffect(()=>{
        getData();
    }, [])

    return (
        <div>
            <br/>
            <h1>Statewise Covid-19 Status</h1>
            <br/><br/>
            <table className="table" width="100%">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirm Case</th>
                        <th>Active Case</th>
                        <th>Recoverd</th>
                        <th>Death</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map((item, index)=>{
                        return (
                            <tr>
                                 <th>{item.state}</th>
                                 <td>{item.confirmed}</td>
                                <td>{item.active}</td>
                                <td>{item.recovered}</td>
                                <td>{item.deaths}</td>
                                <td>{item.lastupdatedtime}</td>
                         </tr>
                        )
                    })}
                    
                </tbody>
            </table>

        </div>
    )
}

export default State_wise
