import axios from 'axios'
axios.defaults.baseURL="http://localhost:61500/"

class GenericService{

    get=(url)=> new Promise((resolve,reject)=>{
        axios.get(url).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>{
            reject(err)
        })
    })


    post=(url,data)=> new Promise((resolve,reject)=>{
        axios.post(url,data).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>{
            reject(err)
        })
    })

   delete=(url)=> new Promise((resolve,reject)=>{
        axios.delete(url).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>{
            reject(err)
        })
    })
    

}
export default GenericService;