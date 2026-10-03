const getBooks = (req,res)=>{
    res.send("HIIIII")
}
const updateBooks=(res,req)=>{
    res.send("HLOOOO")
}

const deleteBooks=(res,req)=>{
    res.send("HHIIIII")
}
const addBooks=(res,req)=>{
    res.send("ADDED BOOKS")
}

module.exports = {
    getBooks,
    addBooks,
    deleteBooks,
    updateBooks
}