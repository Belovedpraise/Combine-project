import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public errorMessageStatus = false
  public errorMessage = ''

  public messageStatus = false;
  public message = ''

  public cart = []
  public cartLength = 0
  public check = true;
  public courseDetails = []
  public total = 0
  public loading: boolean = false;


  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this._cartService.getItemsFromCart({}).subscribe((res)=> {
      if(res.status == false) {
        this.errorMessageStatus = true;
        alert(res.message)
        this.messageStatus = true;
        alert(res.message)
      }else {
        console.log(res);

        this.cart = res.cart;
        this.cartLength = this.cart.length;
        this.check = false;

        let newCart = this.cart.reduce(function(sum, current) {
          return sum + current.total_price;
        }, 0)
        this.total = newCart;

      }
    },
    err=>(console.log(err))
    )
  }
  setTotal() {

  }
  setTotalItems() {
    let newCart = this.cart.reduce(function(sum, current) {
      return sum + current.quantity;
    }, 0)
    this.cartLength = newCart;
  }

 addRemove(_id) {
    this._cartService.deleteFromCart({_id}).subscribe((res: any) => {
      if(res.status == false) {
      console.log(res.message)

      }else {
        this.cart = res.updatedCart;
      }
    })
    this.cart.find((course,_id)=>(course._id ===_id));

  }

  addToCart(course: any) {
    this._cartService.addToCart(course).subscribe((res:any)=> {
      if(res.status == false) {
        this.errorMessageStatus = true;
        alert(res.message)

        this.messageStatus = true;
        alert(res.message)
     }else {
        // this.allCourses = res.allCourses
        // this._resourceService.getCourseResources()
      }
    },
    err=>(console.log(err))
    )
  }


}


