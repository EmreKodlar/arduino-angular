import { Component , OnInit } from '@angular/core';
 
import { DegerlerService } from '../../degerler.service'; // apiden çağırmak için 1. adım

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 degerler: any = []; // Bunu biz ekledik, değerleri içine atacağız...
 
  constructor(
    private degerlerServis: DegerlerService // // apiden çağırmak için 2. adım
  ) {  }

  ngOnInit(){
    this.getSirala(); // sayfa açıldığında direkt sıralansın
  }

  //--- sıralama metotu------------
  getSirala(){
    this.degerlerServis.getAllDegerler().subscribe(data=>{ this.degerler=data },
    (err)=>{ console.log(err); }); }
  //------------------------------

    //--- silme metotu------------
    DeleteDeger(id: any){ 
      this.degerlerServis.DeleteDegerler(id).subscribe(data=>{ this.getSirala(); },
      (err)=>{ console.log(err); }); }
    //------------------------------

      //--- güncelleme için değeri getir metotu------------
      DegerGetir(id: any){
        this.degerlerServis.getIDDegerler(id).subscribe(data=>{ this.degerler=data },
        (err)=>{ console.log(err); }); }
      //------------------------------
  
  }


 

