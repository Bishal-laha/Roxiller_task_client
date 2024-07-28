import { useState, useEffect } from 'react';
import axios from "axios";
import { month_data, options, getMonth } from '../constants/constants';
import { Bar } from "react-chartjs-2";
import { Chart as chartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import TableCom from './TableCom';
import Stat from './Stat';

chartJs.register(BarElement, Legend, Tooltip, LinearScale, CategoryScale);


function Container() {
    const [page, setPage] = useState(1);
    const [length, setLength] = useState(0);
    const [tableMonth, setTableMonth] = useState(3);
    const [isDisable, setIsDisable] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [rowData, setRowData] = useState([]);
    const [combineData, setCombineData] = useState([]);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });


    const currentMonth = getMonth(tableMonth);

    useEffect(() => {
        const fetchSearchData = async () => {
            try {
                await axios.get(import.meta.env.VITE_INITIALIZE_URI);
                const response = await axios.get(`${import.meta.env.VITE_SEARCH_DATA_URI}?month=${tableMonth}&search=${searchText}&pageNo=${page}&perPage=10`);
                if (response.data.length !== 0) {
                    setIsDisable(false);
                    setRowData([...response.data]);
                    setLength(response.data.length);
                }
                else
                    setIsDisable(true);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };
        fetchSearchData();
    }, [page, searchText, tableMonth])

    useEffect(() => {
        const fetchCombineData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_COMBINE_DATA_URI}/${tableMonth}`);
                setCombineData([...response.data]);
                const labels = response.data[0].priceRanges.map(item => item.range);
                const counts = response.data[0].priceRanges.map(item => item.count);
                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Price Range Count',
                        data: counts,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                })
            } catch (error) {
                console.error('There was an error!', error);
            }
        };
        fetchCombineData();
    }, [tableMonth])

    return (
        <div className='w-full max-w-[90%] mx-auto pb-[5%]'>
            <h1 className='font-bold text-[3rem] text-center bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent'>Transaction Table</h1>
            <div className='flex justify-between py-5 items-center'>
                <input type="text" placeholder='Search transaction' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='w-[30%] py-2 rounded-3xl shadow-xl font-semibold px-5 outline-none' />
                <div className='flex justify-center gap-5 items-center w-[30%]'>
                    <h3 className='font-bold'>Select Month: </h3>
                    <select value={tableMonth} onChange={(e) => setTableMonth(parseInt(e.target.value, 10))} className='w-[30%] py-2 rounded-3xl shadow-xl font-semibold text-center bg-white'>
                        {month_data.map((item) => <option key={item.key} value={item.key} >{item.value}</option>)}
                    </select>
                </div>
            </div>
            <TableCom rowData={rowData} page={page} isDisable={isDisable} setPage={setPage} length={length} />
            <Stat combineData={combineData} currentMonth={currentMonth} />
            <div className='mt-[5%] bg-white w-[70%] mx-auto rounded-lg shadow-2xl p-5'>
                <h1 className='text-[1.5rem] font-bold text-center my-2'>Bar Chart Stats - {currentMonth}</h1>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}

export default Container;