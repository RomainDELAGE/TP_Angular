import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  
  @Input() nomEtu : String;
  @Input() prenomEtu : String;
  @Input() statusEtu : String;

  constructor() { 
    this.nomEtu = "Jean";
    this.prenomEtu = "Delon";
  }

  retNomEtu(){
    return this.nomEtu;
  }

  retPrenomEtu(){
    return this.prenomEtu;
  }

  ngOnInit() {
    
  }

 

  

}
