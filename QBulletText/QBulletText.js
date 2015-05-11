define( [
],
/**
* @author Ingemar Carlo (ico)
*/
function ( ) {

	return {
	  //Properties	
      definition : {  
        type: "items",
		component: "accordion",
		items: {
            dimensions: {
				uses: "dimensions",
				min: 1,
				max: 1
			},
			sorting: {
				uses: "sorting"
			},
			settings: {
				uses: "settings",
				items: {                                     
                  
                 Prop1: {
                        type: "items",
                   		label: "Size & Color",
                   
                   items: {                  
                    MyDropdownProp: {
						type: "string",
						component: "dropdown",
						label: "Text Size",
						ref: "textsize",
						options: [{
							value: "s",
							label: "Small"
						}, {
							value: "m",
							label: "Medium"
						},
                            {
							value: "l",
							label: "Large"
						}],
						defaultValue: "m"
					},
                     
                    ColorPicker: {
								component: "color-picker",
								translation: "properties.color",
								ref: "bulletColor",
								type: "integer",
								defaultValue: 9,
								show: function ( data ) {
									return !data.useSegments;
								}
						}
      
      			 }
             }
          
           }
          }
         }
        },
      //For use in Stories
      snapshot : {
			canTakeSnapshot : true
		},
       
       initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],				
				qInitialDataFetch : [{
					qWidth : 1,
					qHeight : 20
				}]
			}
		},
      
		paint: function ($element, layout) {                         
			var html = "", qData = layout.qHyperCube.qDataPages[0];
            for (var i=0; i < qData.qMatrix.length; i++ )  {   
              //For each row in the dimension, display the text (color is transparent from the start. Size and Color set when you click on the div)
              html += "<div id='bul'; style='border-width: thin; width: 400px; height: 20px; color: transparent'>" + qData.qMatrix[i][0].qText + "</div><br>";                                                  
            }  
            $element.html(html);			
            
            //When you click on the div or text placeholder
            $( "#bul" ).siblings().andSelf().click(function() {                     
               		  //Apply text size property	
                      switch (layout.textsize) { 
                        case "s":
                         	  $( this ).css( 'fontSize', '13px' );    
                        	 break; 
                        case "m": 
                         	  $( this ).css( 'fontSize', '30px' );    
                         	 break;
                        case "l":
                         	  $( this ).css( 'fontSize', '60px' );    
                         	 break;
                        default:
                      		  $( this ).css( 'fontSize', '13px' );                       
                      }                 
                     //Apply color property
                     switch (layout.bulletColor) { 
                       case 0:
                         	 $( this ).css( 'color', 'LightGray' );    
                        	break;   
                       case 1:
                         	 $( this ).css( 'color', 'Gray' );    
                        	break; 
                       case 2: 
                             $( this ).css( 'color', 'DimGray' );                                                     
                         	break;
                       case 3:
                         	 $( this ).css( 'color', 'SteelBlue' );    
                         	break;
                       case 4:
                         	 $( this ).css( 'color', 'SkyBlue' );    
                        	break; 
                       case 5: 
                             $( this ).css( 'color', 'PaleTurquoise' );                                                     
                         	break;
                       case 6:
                         	 $( this ).css( 'color', 'LimeGreen' );    
                         	break; 
                       case 7:
                         	 $( this ).css( 'color', 'Tomato' );    
                        	break; 
                       case 8: 
                             $( this ).css( 'color', 'Gold' );                                                     
                         	break;
                       case 9:
                         	 $( this ).css( 'color', 'Green' );    
                         	break;
                       case 10: 
                             $( this ).css( 'color', 'White' );                                                     
                         	break;
                       case 11:
                         	 $( this ).css( 'color', 'Black' );    
                         	break;                         
                       default:
                      		 $( this ).css( 'color', 'DimGray' );                       
                     }
              
              		 //Animation
                     $( this ).hide();
 					 $( this ).fadeIn(1500);	              
			});
    
            //To help user find placeholders, change mouse pointer when hovering text area
            $( "#bul" ).siblings().andSelf()
            .mouseover(function() {
 			$(this).css( 'cursor', 'pointer' );
			});
          
 

		}      
      
	};

} );

