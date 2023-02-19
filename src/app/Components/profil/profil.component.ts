import { Component, OnInit } from '@angular/core';
import { DegerlerService } from '../../degerler.service'; // apiden çağırmak için 1. adım


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit{

  degerler2: any = []; // Bunu biz ekledik, değerleri içine atacağız...

  constructor(
    private degerlerServis: DegerlerService // // apiden çağırmak için 2. adım
  ) {  }

  ngOnInit(){
    this.getSirala2(); // sayfa açıldığında direkt sıralansın
  }

    //--- sıralama metotu------------
    getSirala2(){
      this.degerlerServis.getAllDegerler().subscribe(data=>{ this.degerler2= data  },
      (err)=>{ console.log(err); }); }
    //------------------------------

    

}
