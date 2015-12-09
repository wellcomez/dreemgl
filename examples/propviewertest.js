//Pure JS based composition
define.class(function($server$, composition, role, $ui$, cadgrid, splitcontainer, screen, view, label, button, $widgets$, propviewer, colorpicker){	
	this.render = function(){ return [
		role(
			screen({clearcolor:vec4('blue'),flexwrap:"nowrap", flexdirection:"row",bg:
					{
						color:function(){								
							var col1 = vec3(0.1,0.1,0.1);
							var col2= vec3(0.2,0.25,0.5);
							return vec4(mix(col1, col2, 1-uv.y  + noise.noise2d(uv.xy*403.6)*0.02),1.0)
						}
					}
				}
				,cadgrid({flexdirection:"column", bgcolor: "#303030",minorsize:5,majorsize:25,  majorline:"#505040", minorline:"#404040" }
					,splitcontainer({ flex: 1, direction:"horizontal"}
					
						,splitcontainer({flex: 1, bg:0, direction:"vertical"}
							,view({flexdirection:"column", flex:1, bgcolor:"gray", margin:20, padding:4}	
								,view({flexdirection:"column", flex:1, bg:0, margin:0}			
									,label({margin:4,name:"thelabel", fontsize:14,bg:0, text:"this is a label with some example props"})
									,propviewer({target:"thelabel", flex:1, overflow:"scroll"})
								)
							)
							,view({flexdirection:"column", flex:1, bgcolor:"gray", margin:20, padding:4}	
								,view({flexdirection:"column",flex:1, bg:0, margin:0}			
									,button({name:"thebutton", text:"this is a button with some example props"})
									,propviewer({target:"thebutton", flex:1, overflow:"scroll"})
								)
							)
						)
						,splitcontainer({flexdirection:"row", flex: 1, bg:0, direction:"vertical"}
							,view({flexdirection:"column", flex:1, bgcolor:"gray", margin:20, padding:4}	
								,view({flexdirection:"column", flex:1, bg:0, margin:0}			
									,cadgrid({margin:4,name:"thecadgrid",height:10, fontsize:14,text:"this is a label with some example props"})
									,propviewer({target:"thecadgrid", flex:1, overflow:"scroll"})
								)
							)
							,view({flexdirection:"column", flex:1, bgcolor:"gray", margin:20, padding:4}	
								,view({flexdirection:"column",flex:1, bg:0, margin:0}			
									,colorpicker({name:"thepicker", text:"this is a button with some example props"})
									,propviewer({target:"thepicker", flex:1, overflow:"scroll"})
								)
							)
						)
					)
				)
			)
		)
	]}
})