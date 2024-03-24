

function actualizaCacheDinamico(dynamicCache, req, res){

    if(res.ok){
        return caches.open(dynamicCache).then(cache=>{
            cache.put(req, res.clone());
            return res.clone();
        });//cierre then
    }//cierre if
    else{
        return res;
    }

}//cierre función
