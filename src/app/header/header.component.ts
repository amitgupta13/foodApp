import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
    constructor(private dataStorage: DataStorageService){}

    onSaveData(){
        this.dataStorage.storeRecipes()
            .subscribe(
                (response:Response)=>{
                    console.log(response);
                }
            )
    }

    onFetchData(){
        this.dataStorage.getRecipes();
    }
}