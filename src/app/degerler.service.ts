import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 1. eklenecek

@Injectable({
  providedIn: 'root'
})
export class DegerlerService {
  
  apiURL= 'https://arduino-api.herokuapp.com/'; // Server'a yüklediğimiz Apimizin adresini burada verdik.

  constructor(
    private http: HttpClient // 2. eklenecek
  ) {  }

//-----APİ ile haberleşecek metotları oluştur----

//---hepsini getir
getAllDegerler(){
  return this.http.get(this.apiURL + 'degerler'); 
}
//---id ile getir
getIDDegerler(id: any){
  return this.http.get(this.apiURL + 'degerler/'+ id); 
}
//---ekle
PostDegerler(obj :any){
  return this.http.post(this.apiURL + 'degerler', obj); 
}
//---duzenle
UpdateDegerler(obj :any){
  return this.http.put(this.apiURL + 'degerler', obj); 
}
//---sil
DeleteDegerler(id: any){
  return this.http.delete(this.apiURL + 'degerler/'+ id); 
}

 
//------------------------------------------------

}
