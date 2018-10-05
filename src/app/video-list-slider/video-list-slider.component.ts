import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list-slider',
  templateUrl: './video-list-slider.component.html',
  styleUrls: ['./video-list-slider.component.scss']
})
export class VideoListSliderComponent implements OnInit {
  @Input() public videoSliderData: any

  // Slider Mechanism Variables
  public carouselContainerWidth: number
  public sliderListFrameWidth: number
  public slideListContWidthLG: number
  public sliderItemWidth: number
  public sliderItemPaddingPX: number = 7
  public sliderButtonWidth: number
  public slidesToShowLG: number = 3 // slides to show in Large size screens
  public slidesToShowMD: number = 3 // slides to show in medium size screens
  public slidesToShowsm: number = 1
  public sliderItemsQuantity: number

  constructor() { }

  getItemContWidth(itemTag: string){
    return document.getElementsByClassName(itemTag)[0].clientWidth
  }

  getItemsContainerWidth(itemsTag){
    return document.getElementsByClassName(itemsTag).length
  }

  setSliderValues(carouselContainerTag: string, buttonsTag: string, sliderItemsTag: string){
    this.carouselContainerWidth = this.getWidthByClass(carouselContainerTag)
    this.sliderButtonWidth = this.getWidthByClass(buttonsTag)
    this.sliderListFrameWidth = this.carouselContainerWidth - ( 2 * this.sliderButtonWidth)
    this.sliderItemsQuantity = document.getElementsByClassName(sliderItemsTag).length
    this.sliderItemWidth = this.sliderListFrameWidth / this.slidesToShowLG
    this.slideListContWidthLG =  this.sliderItemWidth * this.sliderItemsQuantity
  }
  ngOnInit() {}
  
  ngAfterViewInit(){
    this.setSliderValues('jc-carousel-section', 'prev-button', 'slide-container')
    console.log("Calculated Item width: " + this.sliderItemWidth + " -- Slider Items List Container Width: " + this.slideListContWidthLG)
    this.setWidth('slide-list-container', this.slideListContWidthLG )
    this.setWidth('slide-container', this.sliderItemWidth)
    this.sliderItemWidth = this.getItemContWidth('slide-container')
    console.log("Measured Item width: " + this.sliderItemWidth)
  }
  getWidthByClass(elementTag: string){
    return document.getElementsByClassName(elementTag)[0].clientWidth
  }
  setWidth(itemTag:string, widthNumber:number){
    let elementsArray = document.getElementsByClassName(itemTag)
    for(let i = 0; i < elementsArray.length; i++){
      elementsArray[i].style.width = widthNumber+ "px"
    }
    //elementsArray.forEach(function(value){ value.style.width =  widthNumber+ "px"})
  }
}
