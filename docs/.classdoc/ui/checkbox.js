/**
 * @class checkbox
 * @extends view
 * Simple toggle button: a rectangle with a textlabel and an icon
 * 
 * <iframe style="border:0;width:900px;height:300px" src="http://localhost:2000/apps/docs/example#path=$root/ui/checkbox.js"></iframe>
 * 
 */
/**
 * @attribute {String} [text="undefined"]
 * The label for the button
 */
/**
 * @attribute {float32} [fontsize="14"]
 * Font size in device-pixels.
 */
/**
 * @attribute {vec4} [col1="0.250980406999588,0.250980406999588,0.250980406999588,1"]
 * Gradient color 1
 */
/**
 * @attribute {vec4} [col2="0.250980406999588,0.250980406999588,0.250980406999588,1"]
 * Gradient color 2
 */
/**
 * @attribute {vec4} [inactivecolor="0.9333333373069763,0.9333333373069763,0.9333333373069763,1"]
 * Color of the inactive icon
 */
/**
 * @attribute {vec4} [textcolor="0.250980406999588,0.250980406999588,0.250980406999588,1"]
 * Color of the label text in neutral state
 */
/**
 * @attribute {vec4} [textactivecolor="0,0.501960813999176,0,1"]
 * Color of the label text in pressed-down state
 */
/**
 * @attribute {vec4} [buttoncolor1="1,1,0.9411764740943909,1"]
 * First gradient color for the button background in neutral state
 */
/**
 * @attribute {vec4} [buttoncolor2="1,1,1,1"]
 * Second gradient color for the button background in neutral state
 */
/**
 * @attribute {vec4} [hovercolor1="0.9411764740943909,0.9411764740943909,0.9411764740943909,1"]
 * First gradient color for the button background in hovered state
 */
/**
 * @attribute {vec4} [hovercolor2="0.9725490212440491,0.9725490212440491,0.9725490212440491,1"]
 * Second gradient color for the button background in hovered state
 */
/**
 * @attribute {vec4} [pressedcolor1="0.8156862854957581,0.8156862854957581,0.9411764740943909,1"]
 * First gradient color for the button background in pressed state
 */
/**
 * @attribute {vec4} [pressedcolor2="0.8156862854957581,0.8156862854957581,0.9411764740943909,1"]
 * Second gradient color for the button background in pressed state
 */
/**
 * @method statehover
 * the hover state when someone hovers over the button
 */
/**
 * @method statenormal
 * the normal button state
 */
/**
 * @method stateclick
 * clicked state
 */