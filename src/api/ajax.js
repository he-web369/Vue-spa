import axios from 'axios'

export default function (path,data={},method='GET') {
    return new Promise((resolve,reject)=>{
        let promise=null
        if(method==='GET'){
            let dataStr=''
            Object.keys(data).forEach(item=>{
                dataStr+=item+'='+data[item]+'&'
            })
            if(dataStr!==''){
                dataStr= dataStr.substring(0,dataStr.lastIndexOf('&'))
                path=path+'?'+dataStr
            }
            promise= axios.get(path)
        }else{
            promise=axios.post(path,data)
        }
        promise.then(res=>{
            resolve(res.data)
        }).catch(error=>{
            reject(error)
        })
    })
}