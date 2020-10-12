import { Component, OnInit} from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

@Component ({
    selector: 'app-product-trackListing',
    templateUrl: './product-trackListing.component.html',
    styleUrls: ['./product-trackListing.component.css']
})

export class ProductTrackListingComponent implements OnInit {
    
    albumInfo: Album;

    constructor(private _productService: ProductService) { }

    ngOnInit() {
        this._productService.getAlbum(1).subscribe(response =>
        this.albumInfo = response);
    }
}