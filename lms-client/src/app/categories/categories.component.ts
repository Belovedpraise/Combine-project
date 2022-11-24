import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  public categories = [
    {
      id: 1,
      name: 'Design',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg',
      path: '/categories/design'
    },
    {
      id: 2,
      name: 'Development',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
      path: '/categories/development'
    },
    {
      id: 3,
      name: 'Marketing',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg',
      path: '/categories/marketing'
    },
    {
      id: 4,
      name: 'IT and Software',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
      path: '/categories/it-and-software'
    },
    {
      id: 5,
      name: 'Personal Development',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
      path: '/categories/personal-development'
    },
    {
      id: 6,
      name: 'Business',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
      path: '/categories/business'
    },
    {
      id: 7,
      name: 'Photography',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg',
      path: '/categories/photography'
    },
    {
      id: 8,
      name: 'Music',
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg',
      path: '/categories/music'
    },
  ]

  goToCategory(name: any) {
    this.router.navigate(["/categories/", name])
    // console.log(name)
  }

}
