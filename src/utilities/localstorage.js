
const getStoretCart= ()=>{
    const storedCartString=localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}