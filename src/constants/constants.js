export const month_data = [
    { key: 1, value: "Jan" }, { key: 2, value: "Feb" }, { key: 3, value: "Mar" }, { key: 4, value: "Apr" }, { key: 5, value: "May" }, { key: 6, value: "June" }, { key: 7, value: "Jul" }, { key: 8, value: "Aug" }, { key: 9, value: "Sep" }, { key: 10, value: "Oct" }, { key: 11, value: "Nov" }, { key: 12, value: "Dec" }
];

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const getMonth = (month)=>{
    let ans;
    month_data.forEach((item)=>{
        if(item.key === month)
            ans = item.value;
    })
    return ans;
}


export const columns = [
    { id: 'id', label: 'ID', align: "center" },
    { id: 'title', label: 'Title', minWidth: 200, align: "center" },
    { id: 'description', label: 'Description', minWidth: 600, align: 'center' },
    { id: 'price', label: 'Price', align: 'right' },
    { id: 'category', label: 'Category', minWidth: 100, align: 'center' },
    { id: 'sold', label: 'Sold', align: "center" },
    { id: 'image', label: 'Image', minWidth: 400, align: 'center' }
];