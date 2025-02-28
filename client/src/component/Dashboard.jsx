import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Dashboard = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [number, setNumber] = useState(8);

    const filterData = data.filter((item) => 
        item.name.english.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(() => {
        getData();
    }, [number])


    const getData = async () => {
        try {
            let token = localStorage.getItem('token');

            const responce = await axios.get('http://localhost:5000/v3/pokemon', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    per_page: number
                }
            },);

            if (responce.status == 200) {
                setData(responce.data.data)
            }
        } catch (error) {
            alert(error);
        }
    }

    const loadMoreData = () => {
        setNumber(number + 8);
    }

    return (
        <div>
            <div className='mainNav'>
                <p className='title'>Pokédex</p>
            </div>

            <div className='setSearchBar'>
                <input type="text" className='search-inp' placeholder='Search by name' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container >
                    {
                        filterData.length > 0 ?
                        filterData.map((item, index) => (
                            <Grid key={index} item xs={3}>
                                <div style={{
                                    background : 
                                    item.type[0] == "Grass" ? '#63bc5a' :
                                    item.type[0] == "Fire" ? '#ff9d55' :
                                    item.type[0] == "Fighting" ? '#ce416b' :
                                    item.type[0] == "Flying" ? '#8fa9de' :
                                    item.type[0] == "Poison" ? '#aa6bc8' :
                                    item.type[0] == "Ground" ? '#d97845' :
                                    item.type[0] == "Rock" ? '#c5b78c' : 
                                    item.type[0] == "Ghost" ? '#5269ad' :
                                    item.type[0] == "Steel" ? '#5a8ea2' :
                                    item.type[0] == "Water" ? '#5090d6' :
                                    item.type[0] == "Electric" ? '#f4d23c' :
                                    item.type[0] == "Psychic" ? '#fa7179' :
                                    item.type[0] == "Ice" ? '#73cec0' :
                                    item.type[0] == "Dragon" ? '#0b6dc3' :
                                    item.type[0] == "Dark" ? "#5a5465" :
                                    item.type[0] == "Fairy" ? "#ec8fe6" :
                                    item.type[0] == "Physical" ? "#ea551e" :
                                    item.type[0] == "Special" ? "#1c4684" :
                                    item.type[0] == "Status" ? "#99999" : '#929da3'
                                }} 
                                className='innerBox'>
                                    <p style={{ textAlign: 'end', color: 'white' }}>
                                       {item.id < 10 ? `#00${item.id}` : `#0${item.id}`} 
                                    </p>
                                    <img style={{ width: '100%', textAlign: 'center' }} src={item.image.hires} alt="dummyimg" />
                                    <p style={{
                                        background: 'white',
                                        padding: '20px 0px',
                                        textAlign: 'center',
                                         color: 
                                            item.type[0] == "Grass" ? '#63bc5a' :
                                            item.type[0] == "Fire" ? '#ff9d55' :
                                            item.type[0] == "Fighting" ? '#ce416b' :
                                            item.type[0] == "Flying" ? '#8fa9de' :
                                            item.type[0] == "Poison" ? '#aa6bc8' :
                                            item.type[0] == "Ground" ? '#d97845' :
                                            item.type[0] == "Rock" ? '#c5b78c' : 
                                            item.type[0] == "Ghost" ? '#5269ad' :
                                            item.type[0] == "Steel" ? '#5a8ea2' :
                                            item.type[0] == "Water" ? '#5090d6' :
                                            item.type[0] == "Electric" ? '#f4d23c' :
                                            item.type[0] == "Psychic" ? '#fa7179' :
                                            item.type[0] == "Ice" ? '#73cec0' :
                                            item.type[0] == "Dragon" ? '#0b6dc3' :
                                            item.type[0] == "Dark" ? "#5a5465" :
                                            item.type[0] == "Fairy" ? "#ec8fe6" :
                                            item.type[0] == "Physical" ? "#ea551e" :
                                            item.type[0] == "Special" ? "#1c4684" :
                                            item.type[0] == "Status" ? "#99999" : '#929da3'
                                          }}>
                                        {item.name.english}
                                        </p>
                                    {
                                        item.type.map((item,index) => (
                                            <button
                                                key={index}
                                                style={{
                                                    textAlign: 'center',
                                                    color: 'white',
                                                    margin: '0px 10px',
                                                    borderRadius: '10px',
                                                    background:
                                                    item == "Grass" ? '#63bc5a' :
                                                    item == "Fire" ? '#ff9d55' :
                                                    item == "Fighting" ? '#ce416b' :
                                                    item == "Flying" ? '#8fa9de' :
                                                    item == "Poison" ? '#aa6bc8' :
                                                    item == "Ground" ? '#d97845' :
                                                    item == "Rock" ? '#c5b78c' : 
                                                    item == "Ghost" ? '#5269ad' :
                                                    item == "Steel" ? '#5a8ea2' :
                                                    item == "Water" ? '#5090d6' :
                                                    item == "Electric" ? '#f4d23c' :
                                                    item == "Psychic" ? '#fa7179' :
                                                    item == "Ice" ? '#73cec0' :
                                                    item == "Dragon" ? '#0b6dc3' :
                                                    item == "Dark" ? "#5a5465" :
                                                    item == "Fairy" ? "#ec8fe6" :
                                                    item == "Physical" ? "#ea551e" :
                                                    item == "Special" ? "#1c4684" :
                                                    item == "Status" ? "#99999" : '#929da3'
                                                }}>
                                                {item}
                                            </button>
                                        ))
                                    }
                                </div>
                            </Grid>
                        ))
                        :
                        <h2>No Data Found..</h2>
                    }  
                    </Grid>
                </Box>
            <div style={{ textAlign:'center' }}>
                <button className='load-btn' onClick={loadMoreData}>Load More</button>
            </div>
        </div>
    )
}

export default Dashboard