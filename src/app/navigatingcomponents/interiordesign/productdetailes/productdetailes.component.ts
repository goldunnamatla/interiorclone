import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteriodesignService } from 'src/app/services/interiodesign.service';


@Component({
  selector: 'app-productdetailes',
  templateUrl: './productdetailes.component.html',
  styleUrls: ['./productdetailes.component.css']
})
export class ProductdetailesComponent {
  product!:any;
  isloading=true;
constructor(private service:InteriodesignService,private route:ActivatedRoute){

}
ngOnInit():void{
  const productid=this.route.snapshot.paramMap.get('id');
  if (productid){
    this.service.getproducts().subscribe(data =>{
      this.product = data.find(p => p.id === Number(productid));
      this.isloading=false;
    })
  }
}
}
